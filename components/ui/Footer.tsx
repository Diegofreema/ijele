'use client';
import { Box, SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react';
import { DarkContainer } from './DarkContainer';
import { Link } from 'next-view-transitions';
import { colors } from '@/constants';
import { motion } from 'framer-motion';

interface Props {}

const links = [
  {
    label: 'News',
    subLinks: [
      {
        label: 'Ijele News',
        href: '/news',
      },
      {
        label: 'Ijele Tv',
        href: '/tv',
      },
    ],
  },
  {
    label: 'Football',
    subLinks: [
      {
        label: "Mens's first team",
        href: '/football/men-teams',
      },
      {
        label: "Women's first team",
        href: '/football/women-teams',
      },
      {
        label: 'Academy',
        href: '/football/academy',
      },
    ],
  },
  {
    label: 'Other sports',
    subLinks: [
      {
        label: 'Basketball',
        href: '/basketball',
      },
    ],
  },
  {
    label: 'Online store',
    subLinks: [
      {
        label: 'Jerseys',
        href: '/store/jerseys',
      },
      {
        label: 'New arrivals',
        href: '/store/new-arrivals',
      },
    ],
  },
  {
    label: 'Club',
    subLinks: [
      {
        label: 'About us',
        href: '/about-us',
      },
    ],
  },
];
export const Footer = ({}: Props) => {
  const color = useColorModeValue('white', colors.black);
  return (
    <DarkContainer height={{ base: '100vh', md: '300px' }}>
      <SimpleGrid
        columns={{ base: 1, md: 5 }}
        gap={5}
        width={{ base: '80%', md: '90%' }}
        mx={'auto'}
      >
        {links.map((link) => (
          <Box display={'flex'} flexDir={'column'} gap={5} key={link.label}>
            <Text
              textColor={color}
              fontSize={{ base: 15, md: 20 }}
              fontWeight={'bold'}
              fontFamily={'var(--font-rubik)'}
            >
              {link.label}
            </Text>
            <Box display={'flex'} flexDir={'column'} gap={5}>
              {link.subLinks.map((subLink) => (
                <Link href={subLink.href} key={subLink.href} className="w-fit">
                  <Text
                    as={motion.p}
                    initial={{ x: 0 }}
                    whileHover={{
                      x: 20,

                      transition: {
                        type: 'spring',
                      },
                    }}
                    viewport={{ once: true }}
                    key={subLink.label}
                    textColor={color}
                    fontSize={{ base: 10, md: 15 }}
                    fontWeight={'400'}
                    fontFamily={'var(--font-rubik)'}
                  >
                    {subLink.label}
                  </Text>
                </Link>
              ))}
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </DarkContainer>
  );
};
