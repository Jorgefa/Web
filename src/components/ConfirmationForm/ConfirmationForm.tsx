// src/components/ConfirmationForm/ConfirmationForm.tsx
import React, { useState } from 'react';
import { useForm, useFieldArray, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ConfirmationFormData, GuestData } from '../../types/confirmation';
import { saveConfirmation } from '../../services/firestoreService';
import { Timestamp } from 'firebase/firestore';
import styles from './ConfirmationForm.module.css';

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
      setSubmitError('Hubo un error al enviar la confirmación. Por favor, inténtalo de nuevo.');
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      {fields.map((field, index) => {
        const guestType = watch(`guests.${index}.tipo` as const);

        return (
          <fieldset key={field.id} className={styles.guestSection}>
            {/* ... (Legend, botón de eliminar, Nombre, Apellidos, Tipo sin cambios) ... */}
            <legend className={styles.guestLegend}>
              <div className={styles.legendContainer}>
                <span>Invitado {index + 1}</span>
                {fields.length > 1 && (
                  <button type="button" onClick={() => remove(index)} className={styles.removeButton}>×</button>
                )}
              </div>
            </legend>


             <div className={styles.formRow}>
                <div className={styles.formField}>{/* Nombre */}
                    <label htmlFor={`guests.${index}.nombre`}>Nombre *</label>
                    <input id={`guests.${index}.nombre`} {...register(`guests.${index}.nombre` as const, { required: 'El nombre es obligatorio' })} placeholder="Nombre" aria-invalid={errors.guests?.[index]?.nombre ? 'true' : 'false'}/>
                    {errors.guests?.[index]?.nombre && (<span className={styles.errorMsg}>{errors.guests[index]?.nombre?.message}</span>)}
                    <div className={styles.fieldDivider} />
                </div>
                <div className={styles.formField}>{/* Apellidos */}
                    <label htmlFor={`guests.${index}.apellidos`}>Apellidos *</label>
                    <input id={`guests.${index}.apellidos`} {...register(`guests.${index}.apellidos` as const, { required: 'Los apellidos son obligatorios' })} placeholder="Apellidos" aria-invalid={errors.guests?.[index]?.apellidos ? 'true' : 'false'}/>
                    {errors.guests?.[index]?.apellidos && (<span className={styles.errorMsg}>{errors.guests[index]?.apellidos?.message}</span>)}
                    <div className={styles.fieldDivider} />
                </div>
             </div>
             <div className={styles.formField}>{/* Tipo */}
                <label htmlFor={`guests.${index}.tipo`}>Adulto o niño...? *</label>
                <select id={`guests.${index}.tipo`} {...register(`guests.${index}.tipo` as const, { required: 'Selecciona si es adulto o niño' })} aria-invalid={errors.guests?.[index]?.tipo ? 'true' : 'false'}>
                    <option value="adulto">Adulto</option>
                    <option value="niño">Niño</option>
                </select>
                {errors.guests?.[index]?.tipo && (<span className={styles.errorMsg}>{errors.guests[index]?.tipo?.message}</span>)}
                <div className={styles.fieldDivider} />
             </div>


            {/* --- Campos Condicionales (Solo Adultos) --- */}
            {guestType === 'adulto' && (
              <>
                {/* ... (Plato Principal sin cambios) ... */}
                <div className={styles.formField}>
                  <label htmlFor={`guests.${index}.plato`}>Plato Principal</label>
                  <select {...register(`guests.${index}.plato` as const)}>
                    <option value="carne">Carne</option>
                    <option value="pescado">Pescado</option>
                  </select>
                  <div className={styles.fieldDivider} />
                </div>

                {/* --- SECCIÓN TRANSPORTE (Simplificada) --- */}
                {/* Ya no usamos .checkboxGroup, solo un .formField normal */}
                <div className={styles.formField}>
                     <label htmlFor={`guests.${index}.transporteVuelta`}>¿Necesitas transporte?</label>
                     <select
                        id={`guests.${index}.transporteVuelta`}
                        // --- Registro actualizado ---
                        {...register(`guests.${index}.transporte` as const)}
                     >
                        {/* --- Opciones actualizadas --- */}
                        <option value="no_necesito">No, voy por mi cuenta.</option>
                        <option value="si_pronto">Sí, y seguramente me baje pronto.</option>
                        <option value="si_cierre">Sí, y seguramente cierre el garito.</option>
                     </select>
                     <div className={styles.fieldDivider} />
                </div>
                {/* --- FIN SECCIÓN TRANSPORTE --- */}
              </>
            )}

            {/* --- Campos Comunes (Adultos y Niños) --- */}
            {/* ... (Intolerancias y Comentarios sin cambios) ... */}
             <div className={styles.formField}>{/* Intolerancias */}
               <label htmlFor={`guests.${index}.intolerancias`}>Alergias o Intolerancias</label>
               <textarea id={`guests.${index}.intolerancias`} {...register(`guests.${index}.intolerancias` as const)} placeholder="..." rows={3}/>
               <div className={styles.fieldDivider} />
             </div>
             <div className={styles.formField}>{/* Comentarios */}
               <label htmlFor={`guests.${index}.comentarios`}>Comentarios Adicionales</label>
               <textarea id={`guests.${index}.comentarios`} {...register(`guests.${index}.comentarios` as const)} placeholder="..." rows={3}/>
               <div className={styles.fieldDivider} />
             </div>

          </fieldset>
        );
      })}

      {/* ... (Botón Añadir, Mensaje de Error, Botón Enviar sin cambios) ... */}
      <button type="button" onClick={() => append(defaultGuest)} className={`${styles.button} ${styles.addButton} ${styles.buttonPrimary}`}>+ Añadir otro invitado</button>
      {submitError && <p className={styles.submitErrorMsg}>{submitError}</p>}
      <button type="submit" className={`${styles.button} ${styles.submitButton} ${(!isSubmitting && isValid) ? styles.buttonPrimary : ''} `} disabled={isSubmitting || !isValid}>{isSubmitting ? 'Enviando...' : 'Confirmar Asistencia'}</button>
    </form>
  );
};

export default ConfirmationForm;