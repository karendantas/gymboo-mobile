import { ThemeContext } from '@/contexts/themeContext';
import { useContext } from 'react';

export function useTheme() {
  return useContext(ThemeContext);
}
