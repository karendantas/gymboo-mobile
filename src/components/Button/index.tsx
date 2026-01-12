import { ComponentType, ReactNode } from 'react';
import {
  Text as RnText,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { SvgProps } from 'react-native-svg';

interface ButtonProps extends TouchableOpacityProps {
  children?: ReactNode;
  variant?: 'primary' | 'secondary' | 'google';
}

export function Root({ children, variant, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      {...rest}
      className="bg-primary flex-row rounded-md w-72 gap-1 p-4 items-center justify-center"
    >
      {children}
    </TouchableOpacity>
  );
}

function Text({ children }: { children: ReactNode }) {
  return <RnText className="font-bold">{children}</RnText>;
}

function Icon({ icon: Icon }: { icon: ComponentType<SvgProps> }) {
  return <Icon width={25} height={25} />;
}

export const Button = Object.assign(Root, {
  Text,
  Icon,
});
