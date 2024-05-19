'use client';
import { Box, useColorModeValue } from '@chakra-ui/react';

interface Props {
  children: React.ReactNode;
}

export const AppWrapper = ({ children }: Props) => {
  const bg = useColorModeValue('white', '#181818');
  return (
    <Box minHeight={'100vh'} bg={bg} width={'100%'} overflowX={'hidden'}>
      {children}
    </Box>
  );
};
