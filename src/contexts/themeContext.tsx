import { defaultTheme } from '@/theme/themeDefault';
import { softBlueTheme } from '@/theme/themeSoftBlue';
import { createContext, useMemo, useState } from 'react';

type Theme = typeof defaultTheme;
interface ThemeContextProps {
  theme: Theme;
  toggleTheme: (id: number) => void;
}

const THEMES: any = {
  1: defaultTheme,
  2: softBlueTheme,
};

export const ThemeContext = createContext<ThemeContextProps>({} as any);
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  function toggleTheme(id: number) {
    setTheme(THEMES[id] ?? defaultTheme);
  }

  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
