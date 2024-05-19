'use client';

import { theme } from '@/utils/theme';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      {children}
    </ChakraProvider>
  );
}
