'use client';
import { Box, Button, ButtonProps } from '@chakra-ui/react';
import { colors } from '../../constants';

interface Props extends ButtonProps {
  text: string;
}

export const OrangeButton = ({ text, ...props }: Props) => {
  return (
    <Button
      {...props}
      bg={colors.orange}
      _hover={{ bg: colors.textOrange }}
      borderRadius={20}
      color={'white'}
    >
      {text}
    </Button>
  );
};
