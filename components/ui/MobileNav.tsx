import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useColorModeValue,
  Text,
  Flex,
  Button,
  Box,
  useColorMode,
} from '@chakra-ui/react';
import { Links, ToggleDarkMode, links } from './Header';
import { Link } from 'next-view-transitions';
import { Moon, Sun } from 'lucide-react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export function MobileDrawer({ isOpen, onClose }: Props) {
  const color = useColorModeValue('black', '#fff');
  const bg = useColorModeValue('#fff', '#181818');
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent bg={bg}>
        <DrawerCloseButton color={color} />

        <DrawerBody>
          <Flex
            gap={5}
            flexDir={'column'}
            justifyContent={'center'}
            height={'100%'}
          >
            {links.map(({ href, label }) => (
              <Link key={href} href={href} onClick={onClose}>
                <Text textColor={color} fontWeight={'bold'}>
                  {label}
                </Text>
              </Link>
            ))}
          </Flex>
        </DrawerBody>

        <DrawerFooter>
          <Button
            borderRadius={50}
            width={50}
            height={50}
            bg={color}
            onClick={toggleColorMode}
          >
            {colorMode === 'light' ? <Sun color={bg} /> : <Moon color={bg} />}
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
