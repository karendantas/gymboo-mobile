import { vars } from 'nativewind';
import { COLORS } from './colors';

export const nativewindThemes = {
  default: vars({
    '--color-primary': COLORS.pink[300],
    '--color-primary-dark': COLORS.pink[700],

    '--color-secondary': COLORS.purple[400],
    '--color-secondary-dark': COLORS.purple[700],

    '--color-base': COLORS.neutral[100],
    '--color-base-dark': COLORS.neutral[300],

    '--color-text': COLORS.gray[700],
    '--color-text-dark': COLORS.gray[900],

    '--color-hydration': COLORS.blue[300],
    '--color-hydration-dark': COLORS.blue[500],

    '--color-pet-life': COLORS.red[500],
    '--color-pet-physical': COLORS.yellow[400],
    '--color-pet-thirsty': COLORS.purple[700],

    '--color-button': COLORS.green[300],
    '--color-button-dark': COLORS.green[600],

    '--color-danger': COLORS.red[500],
    '--color-light': COLORS.neutral[100],
  }),

  softBlue: vars({
    '--color-primary': COLORS.blue[300],
    '--color-primary-dark': COLORS.blue[500],

    '--color-secondary': COLORS.blue[300],
    '--color-secondary-dark': COLORS.blue[500],

    '--color-base': COLORS.neutral[100],
    '--color-base-dark': COLORS.neutral[300],

    '--color-text': COLORS.gray[700],
    '--color-text-dark': COLORS.gray[900],

    '--color-button': COLORS.blue[300],
    '--color-button-dark': COLORS.blue[500],

    '--color-danger': COLORS.red[500],
    '--color-light': COLORS.neutral[100],
  }),
};
