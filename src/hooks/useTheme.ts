import { ThemeContext } from '@/contexts/themeContext';
import { useContext } from 'react';

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useAuth must be user within an AuthProvider');
  }
  return context;
}
