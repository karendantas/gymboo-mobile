import { ComponentType } from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import { SvgProps } from 'react-native-svg';

interface InputProps extends TextInputProps {
  placeholder: string;
  icon?: ComponentType<SvgProps>;
}

export function Input({ placeholder, icon: Icon, ...rest }: InputProps) {
  return (
    <View className=" bg-base-medium flex-row items-center gap-3 h-16 px-6 rounded-lg">
      {Icon && <Icon width={25} height={25} color="#8E8E8E" />}
      <TextInput
        placeholder={placeholder}
        {...rest}
        className="w-full h-full"
      />
    </View>
  );
}
