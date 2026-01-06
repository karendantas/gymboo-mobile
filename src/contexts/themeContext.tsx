import { defaultTheme } from '@/theme/themeDefault';
import { softBlueTheme } from '@/theme/themeSoftBlue';
import { createContext, useMemo, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components/native';
export type Theme = typeof defaultTheme;
interface ThemeContextProps {
  theme: Theme;
  toggleTheme: (id: number) => void;
}

const THEMES: Record<number, Theme> = {
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
    <ThemeContext.Provider value={value}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
}
