import { nativewindThemes } from '@/theme/nativewindThemes';
import { createContext, useState } from 'react';
import { View } from 'react-native';

type ThemeName = keyof typeof nativewindThemes;

interface ThemeContextProps {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
}

export const ThemeContext = createContext<ThemeContextProps>(
  {} as ThemeContextProps,
);

export function ThemeProvider({
  children,
  initialTheme = 'default',
}: {
  children: React.ReactNode;
  initialTheme?: ThemeName;
}) {
  const [theme, setTheme] = useState<ThemeName>(initialTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <View style={[{ flex: 1 }, nativewindThemes[theme]]}>{children}</View>
    </ThemeContext.Provider>
  );
}
