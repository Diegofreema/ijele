'use client';
import { Text, TextProps, useColorModeValue } from '@chakra-ui/react';

type Props = TextProps & {
  text: string;
};

export const MyText = ({ text, ...props }: Props) => {
  const color = useColorModeValue('#181818', 'white');
  return (
    <Text {...props} textColor={color} fontFamily={'var(--font-rubik)'}>
      {text}
    </Text>
  );
};
