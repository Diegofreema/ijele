'use client';
import {
  Avatar,
  Box,
  Button,
  Flex,
  IconButton,
  ResponsiveValue,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { Link } from 'next-view-transitions';
import { MyText } from './MyText';
import { Moon, Sun, MenuIcon } from 'lucide-react';
import { MobileDrawer } from './MobileNav';
import { MouseEventHandler, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { colors } from '@/constants';

interface Props {}
export const links = [
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
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      as={motion.div}
      initial={{ y: -20, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, type: 'spring', damping: 9 },
      }}
      viewport={{ once: true }}
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
        <MobileDrawer isOpen={isOpen} onClose={onClose} />
        <IconButton
          hideFrom="md"
          onClick={onOpen}
          aria-label="button"
          icon={<MenuIcon />}
        />
      </Flex>
    </Box>
  );
};

export const Links = ({
  flexDirection = 'row',
  onClose,
}: {
  flexDirection?: 'row' | 'column' | ResponsiveValue<'row' | 'column'>;
  onClose?: () => void;
}) => {
  const pathname = usePathname();
  const color = useColorModeValue('black', 'white');
  const onPress = (e: any) => {
    e.stopPropagation();
    onClose && onClose();
  };

  return (
    <Flex gap={5} hideBelow={'md'} flexDirection={flexDirection}>
      {links.map(({ href, label }) => {
        const isActive = pathname.includes(href);
        return (
          <Link key={href} href={href} onClick={onPress} className="group">
            <Text
              className="group-hover:text-[#FF2E3B] transition duration-150 group-hover:-translate-y-1"
              fontFamily={'var(--font-rubik)'}
              textColor={isActive ? colors.orange : color}
              fontWeight={'bold'}
            >
              {label}
            </Text>
          </Link>
        );
      })}
    </Flex>
  );
};

export const ToggleDarkMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue('#181818', 'white');
  const color = useColorModeValue('white', '#181818');

  return (
    <Button
      hideBelow={'md'}
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
