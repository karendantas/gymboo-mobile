import { COLORS } from './colors';

export const defaultTheme = {
  id: 1,
  colors: {
    primary: COLORS.pink[300],
    primaryDark: COLORS.pink[700],

    secondary: COLORS.purple[400],
    secondaryDark: COLORS.purple[700],

    base: COLORS.neutral[100],
    baseDark: COLORS.neutral[300],

    text: COLORS.gray[700],
    textDark: COLORS.gray[900],

    hydration: COLORS.blue[300],
    hydrationDark: COLORS.blue[500],

    petLife: COLORS.red[500],
    petPhysical: COLORS.yellow[400],
    petThirsty: COLORS.purple[700],

    button: COLORS.green[300],
    buttonDark: COLORS.green[600],

    danger: COLORS.red[500],
  },
};
