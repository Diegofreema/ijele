'use client';
import { colors } from '@/constants';
import {
  Box,
  Button,
  Image,
  SimpleGrid,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { DarkContainer } from '../ui/DarkContainer';
import { motion } from 'framer-motion';

interface Props {}

export const Membership = ({}: Props) => {
  return (
    <DarkContainer>
      <SimpleGrid
        maxWidth={{ base: '90%', md: '80%' }}
        gap={10}
        mx={'auto'}
        columns={{ base: 1, md: 2 }}
      >
        <Left />
        <Right />
      </SimpleGrid>
    </DarkContainer>
  );
};

const Left = () => {
  const color = useColorModeValue('white', colors.dark);
  return (
    <Box
      as={motion.div}
      initial={{ x: -50, opacity: 0 }}
      whileInView={{
        x: 0,
        opacity: 1,
        transition: { duration: 0.3, ease: 'easeIn' },
      }}
      viewport={{ once: true }}
      display={'flex'}
      flexDirection={'column'}
      gap={5}
    >
      <Text textColor={color} fontFamily={'var(--font-rubik)'} fontSize={20}>
        Membership
      </Text>
      <Text textColor={color} fontFamily={'var(--font-rubik)'} fontSize={15}>
        {' '}
        With a commitment to excellence, teamwork and community, we strive to
        inspire both on and off the pitch, join us on our journey as we chase
        victory, celebrate resilience, and embody the true essence of the
        beautiful game.
      </Text>
      <Button
        _hover={{
          bg: colors.textOrange,
          transition: 'all 0.3s ease',
        }}
        color="white"
        bg={colors.orange}
        width={'fit-content'}
        borderRadius={20}
      >
        Become a member
      </Button>
    </Box>
  );
};

const Right = () => {
  return (
    <Box
      as={motion.div}
      initial={{ x: 50, opacity: 0 }}
      whileInView={{
        x: 0,
        opacity: 1,
        transition: { duration: 0.3, ease: 'easeIn' },
      }}
      viewport={{ once: true }}
      width="100%"
    >
      <Image
        alt="image"
        src="/member.png"
        width={'100%'}
        height={'100%'}
        objectFit={'cover'}
      />
    </Box>
  );
};
