import { useTheme } from '@/hooks/useTheme';
import { COLORS } from '@/theme/colors';
import { ComponentType, ReactNode } from 'react';
import {
  Text as RnText,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { SvgProps } from 'react-native-svg';

type ButtonVariants = 'primary' | 'secondary';

interface ButtonProps extends TouchableOpacityProps {
  children?: ReactNode;
  variant?: ButtonVariants;
}

const variants: Record<ButtonVariants, string> = {
  primary: 'bg-primary',
  secondary: 'bg-white border-2 border-primary-dark',
};
export function Root({ children, variant = 'primary', ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      {...rest}
      className={`${variants[variant]} flex-row rounded-lg w-72 gap-1 p-4 items-center justify-center`}
    >
      {children}
    </TouchableOpacity>
  );
}

function Text({ children }: { children: ReactNode }) {
  return (
    <RnText className="font-bold text-xl text-primary-dark">{children}</RnText>
  );
}

function Icon({ icon: Icon }: { icon: ComponentType<SvgProps> }) {
  const { theme } = useTheme();

  return (
    <Icon
      width={25}
      height={25}
      color={theme == 'default' ? COLORS.pink[700] : COLORS.blue[500]}
    />
  );
}

export const Button = Object.assign(Root, {
  Text,
  Icon,
});
