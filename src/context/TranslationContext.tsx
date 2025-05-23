import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define available languages
export type Language = 'es' | 'en';

// Define the shape of our context
interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  translate: (spanish: string, english: string) => string;
  isEnglish: boolean;
}

// Create the context with default values
const TranslationContext = createContext<TranslationContextType>({
  language: 'es',
  setLanguage: () => {},
  translate: (spanish) => spanish,
  isEnglish: false,
});

// Custom hook for using the translation context
export const useTranslation = () => useContext(TranslationContext);

// The list of guest slugs that should see English content by default
const ENGLISH_GUEST_SLUGS = ['coral', 'oliwer'];

// Storage key for the guest slug
const GUEST_SLUG_STORAGE_KEY = 'currentGuestSlug';

interface TranslationProviderProps {
  children: ReactNode;
}

export const TranslationProvider: React.FC<TranslationProviderProps> = ({ children }) => {
  // Initialize language based on stored guest slug
  const [language, setLanguage] = useState<Language>(() => {
    // Check if we're in the browser
    if (typeof window === 'undefined') return 'es';
    
    // Get the stored guest slug
    const storedGuestSlug = localStorage.getItem(GUEST_SLUG_STORAGE_KEY);
    
    // If the slug is in our English list, default to English
    if (storedGuestSlug && ENGLISH_GUEST_SLUGS.includes(storedGuestSlug.toLowerCase())) {
      return 'en';
    }
    
    return 'es'; // Default to Spanish
  });

  // Helper function to translate text
  const translate = (spanish: string, english: string): string => {
    return language === 'en' ? english : spanish;
  };

  // Computed property for convenience
  const isEnglish = language === 'en';

  // Provide the translation context to children
  return (
    <TranslationContext.Provider value={{ language, setLanguage, translate, isEnglish }}>
      {children}
    </TranslationContext.Provider>
  );
};
