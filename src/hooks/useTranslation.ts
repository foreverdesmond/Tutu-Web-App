import { useLanguage } from '@/context/LanguageContext';
import { getTranslation } from '@/services/i18n';

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = (key: string): string => {
    return getTranslation(language, key);
  };

  return { t, language };
}; 