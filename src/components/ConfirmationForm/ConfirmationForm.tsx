// src/components/ConfirmationForm/ConfirmationForm.tsx
import React, { useState } from 'react';
import { useForm, useFieldArray, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ConfirmationFormData, GuestData } from '../../types/confirmation';
import { saveConfirmation } from '../../services/firestoreService';
import { Timestamp } from 'firebase/firestore';
import styles from './ConfirmationForm.module.css';
import { useTranslation } from '../../context/TranslationContext';

const GUEST_SLUG_STORAGE_KEY = 'currentGuestSlug';

// --- CAMBIO EN defaultGuest ---
const defaultGuest: GuestData = {
  nombre: '',
  apellidos: '',
  tipo: '',
  plato: '',
  transporte: '',
  intolerancias: '',
  comentarios: '',
};

const ConfirmationForm: React.FC = () => {
  const { translate } = useTranslation();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<ConfirmationFormData>({
    defaultValues: {
      guests: [defaultGuest],
    },
    mode: 'onChange',
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'guests',
  });

  const onSubmit: SubmitHandler<ConfirmationFormData> = async (data) => {
    setIsSubmitting(true);
    setSubmitError(null);

    const submissionTime = Timestamp.now();

    const savedSlug = localStorage.getItem(GUEST_SLUG_STORAGE_KEY);

    const dataToSave: ConfirmationFormData = {
      guests: data.guests,
      submittedAt: submissionTime, 
      ...(savedSlug && { originatingSlug: savedSlug }),

    };

    console.log('Datos a enviar (con timestamp):', dataToSave); // Depuración

    try {
      await saveConfirmation(dataToSave);
      navigate('/gracias');
    } catch (error) {
      console.error('Error al guardar la confirmación:', error);
      setSubmitError(translate(
        'Hubo un error al enviar la confirmación. Por favor, inténtalo de nuevo.',
        'There was an error sending the confirmation. Please try again.'
      ));
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      {fields.map((field, index) => {
        const guestType = watch(`guests.${index}.tipo` as const);

        return (
          <fieldset key={field.id} className={styles.guestSection}>
            <legend className={styles.guestLegend}>
              <div className={styles.legendContainer}>
                <span>{translate('Invitado', 'Guest')} {index + 1}</span>
                {fields.length > 1 && (
                  <button type="button" onClick={() => remove(index)} className={styles.removeButton}>×</button>
                )}
              </div>
            </legend>

            <div className={styles.formRow}>
                <div className={styles.formField}>{/* Nombre */}
                    <label htmlFor={`guests.${index}.nombre`}>{translate('Nombre', 'First Name')} *</label>
                    <input id={`guests.${index}.nombre`} 
                           {...register(`guests.${index}.nombre` as const, { 
                                required: translate('El nombre es obligatorio', 'First name is required') 
                            })} 
                           placeholder={translate('Nombre', 'First Name')}
                           aria-invalid={errors.guests?.[index]?.nombre ? 'true' : 'false'}/>
                    {errors.guests?.[index]?.nombre && (
                        <span className={styles.errorMsg}>{errors.guests[index]?.nombre?.message}</span>
                    )}
                    <div className={styles.fieldDivider} />
                </div>
                <div className={styles.formField}>{/* Apellidos */}
                    <label htmlFor={`guests.${index}.apellidos`}>{translate('Apellidos', 'Last Name')} *</label>
                    <input id={`guests.${index}.apellidos`} 
                           {...register(`guests.${index}.apellidos` as const, { 
                                required: translate('Los apellidos son obligatorios', 'Last name is required') 
                            })}
                           placeholder={translate('Apellidos', 'Last Name')}
                           aria-invalid={errors.guests?.[index]?.apellidos ? 'true' : 'false'}/>
                    {errors.guests?.[index]?.apellidos && (
                        <span className={styles.errorMsg}>{errors.guests[index]?.apellidos?.message}</span>
                    )}
                    <div className={styles.fieldDivider} />
                </div>
             </div>
             
             <div className={styles.formField}>{/* Tipo */}
                <label htmlFor={`guests.${index}.tipo`}>{translate('Adulto o niño...?', 'Adult or child...?')} *</label>
                <select id={`guests.${index}.tipo`} 
                        {...register(`guests.${index}.tipo` as const, { 
                            required: translate('Selecciona si es adulto o niño', 'Select if adult or child') 
                        })}
                        aria-invalid={errors.guests?.[index]?.tipo ? 'true' : 'false'}>
                    <option value="adulto">{translate('Adulto', 'Adult')}</option>
                    <option value="niño">{translate('Niño', 'Child')}</option>
                </select>
                {errors.guests?.[index]?.tipo && (
                    <span className={styles.errorMsg}>{errors.guests[index]?.tipo?.message}</span>
                )}
                <div className={styles.fieldDivider} />
             </div>

            {/* --- Campos Condicionales (Solo Adultos) --- */}
            {guestType === 'adulto' && (
              <>
                {/* --- SECCIÓN TRANSPORTE --- */}
                <div className={styles.formField}>
                     <label htmlFor={`guests.${index}.transporteVuelta`}>
                        {translate('¿Necesitas transporte?', 'Do you need transportation?')}
                     </label>
                     <select
                        id={`guests.${index}.transporteVuelta`}
                        {...register(`guests.${index}.transporte` as const)}
                     >
                        <option value="no_necesito">
                            {translate('No, voy por mi cuenta.', 'No, I\'ll go on my own.')}
                        </option>
                        <option value="si_pronto">
                            {translate('Sí, y seguramente me baje pronto.', 'Yes, and I\'ll probably leave early.')}
                        </option>
                        <option value="si_cierre">
                            {translate('Sí, y seguramente cierre el garito.', 'Yes, and I\'ll probably stay until closing time.')}
                        </option>
                     </select>
                     <div className={styles.fieldDivider} />
                </div>
                {/* --- FIN SECCIÓN TRANSPORTE --- */}
              </>
            )}

            {/* --- Campos Comunes (Adultos y Niños) --- */}
             <div className={styles.formField}>{/* Intolerancias */}
               <label htmlFor={`guests.${index}.intolerancias`}>
                {translate('Alergias o Intolerancias', 'Allergies or Intolerances')}
               </label>
               <textarea id={`guests.${index}.intolerancias`} 
                        {...register(`guests.${index}.intolerancias` as const)} 
                        placeholder="..." 
                        rows={3}/>
               <div className={styles.fieldDivider} />
             </div>
             <div className={styles.formField}>{/* Comentarios */}
               <label htmlFor={`guests.${index}.comentarios`}>
                {translate('Comentarios Adicionales', 'Additional Comments')}
               </label>
               <textarea id={`guests.${index}.comentarios`} 
                        {...register(`guests.${index}.comentarios` as const)} 
                        placeholder="..." 
                        rows={3}/>
               <div className={styles.fieldDivider} />
             </div>

          </fieldset>
        );
      })}

      <button 
        type="button" 
        onClick={() => append(defaultGuest)} 
        className={`${styles.button} ${styles.addButton} ${styles.buttonPrimary}`}
      >
        + {translate('Añadir otro invitado', 'Add another guest')}
      </button>
      
      {submitError && <p className={styles.submitErrorMsg}>{submitError}</p>}
      
      <button 
        type="submit" 
        className={`${styles.button} ${styles.submitButton} ${(!isSubmitting && isValid) ? styles.buttonPrimary : ''} `} 
        disabled={isSubmitting || !isValid}
      >
        {isSubmitting 
          ? translate('Enviando...', 'Sending...') 
          : translate('Confirmar Asistencia', 'Confirm Attendance')}
      </button>
    </form>
  );
};

export default ConfirmationForm;