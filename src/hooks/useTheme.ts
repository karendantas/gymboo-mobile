import { ThemeContext } from '@/contexts/themeContext';
import { useContext } from 'react';

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be within an ThemeProvider');
  }
  return context;
}
