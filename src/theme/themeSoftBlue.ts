import { Theme } from '@/contexts/themeContext';
import { COLORS } from './colors';

export const softBlueTheme: Theme = {
  id: 2,
  colors: {
    primary: COLORS.softBlue[300],
    primaryDark: COLORS.softBlue[500],

    secondary: COLORS.green[200],
    secondaryDark: COLORS.green[500],

    base: COLORS.neutral[100],
    baseDark: COLORS.neutral[300],

    text: COLORS.gray[700],
    textDark: COLORS.gray[900],

    hydration: COLORS.blue[300],
    hydrationDark: COLORS.blue[500],

    petLife: COLORS.red[500],
    petPhysical: COLORS.yellow[400],
    petThirsty: COLORS.purple[700],

    button: COLORS.yellow[200],
    buttonDark: COLORS.yellow[500],

    danger: COLORS.red[500],
    light: COLORS.neutral[100],
  },
};
