'use client';
import {
  Avatar,
  Box,
  Button,
  Flex,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link } from 'next-view-transitions';
import { MyText } from './MyText';
import { Moon, Sun } from 'lucide-react';

interface Props {}
const links = [
  {
    href: '/news',
    label: 'News',
  },
  {
    href: '/about-us',
    label: 'About us',
  },
  {
    href: '/ticket',
    label: 'Ticket',
  },
  {
    href: '/teams',
    label: 'Teams',
  },
  {
    href: '/membership',
    label: 'Membership',
  },
  {
    href: '/shop',
    label: 'Shop',
  },
  {
    href: '/tv',
    label: 'Ijele Tv',
  },
];
export const Header = ({}: Props) => {
  const bg = useColorModeValue('white', '#181818');
  return (
    <Box
      bg={bg}
      position={'fixed'}
      top={0}
      right={0}
      left={0}
      zIndex={555}
      width={'100%'}
    >
      <Flex
        p={5}
        maxWidth={{ base: '90%', md: '80%' }}
        mx={'auto'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Link href="/">
          <Avatar src="/logo.png" size={'md'} objectFit={'cover'} />
        </Link>
        <Links />
        <ToggleDarkMode />
      </Flex>
    </Box>
  );
};

const Links = () => {
  return (
    <Flex gap={5}>
      {links.map(({ href, label }) => (
        <Link key={href} href={href}>
          <MyText text={label} fontWeight={'bold'} />
        </Link>
      ))}
    </Flex>
  );
};

const ToggleDarkMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  console.log('🚀 ~ ToggleDarkMode ~ colorMode:', colorMode);
  const bg = useColorModeValue('#181818', 'white');
  const color = useColorModeValue('white', '#181818');

  return (
    <Button
      borderRadius={50}
      width={50}
      height={50}
      bg={bg}
      onClick={toggleColorMode}
    >
      {colorMode === 'light' ? <Sun color={color} /> : <Moon color={color} />}
    </Button>
  );
};
