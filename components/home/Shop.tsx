'use client';
import {
  Box,
  Button,
  Heading,
  Image,
  Text,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';
import { DarkContainer } from '../ui/DarkContainer';
import { colors } from '@/constants';
import { motion, createMotionComponent } from 'framer-motion';
import { Link } from 'next-view-transitions';

interface Props {}

export const Shop = ({}: Props) => {
  const color = useColorModeValue('white', 'white');
  return (
    <DarkContainer>
      <Box
        display={'flex'}
        flexDirection={'column'}
        gap={5}
        width={{ base: '90%', md: '80%' }}
        mx={'auto'}
      >
        <Box
          as={motion.div}
          initial={{ x: -50, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { delay: 0.3, duration: 0.3 },
          }}
          viewport={{ once: true }}
          width={'100%'}
        >
          <Image
            alt="image"
            src="/frame.jpg"
            width={'100%'}
            height={'auto'}
            objectFit={'cover'}
          />
        </Box>
        <Flex
          as={motion.div}
          initial={{ x: 50, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { delay: 0.3, duration: 0.3 },
          }}
          viewport={{ once: true }}
          flexDir={'column'}
          gap={3}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Heading
            fontSize={{ base: 'xl', md: '5xl' }}
            fontFamily={'var(--font-rubik)'}
            fontWeight={'bold'}
            textColor={color}
          >
            Ijele SC Merchandise
          </Heading>
          <Text
            textColor={color}
            fontSize={{ base: 12, md: 15 }}
            textAlign={'center'}
          >
            Nothing but the best merchandise from your favorite football club
          </Text>

          <Link href="/shop">
            <Button
              bg={colors.darkBlue}
              color={'white'}
              width={'fit-content'}
              px={10}
              borderRadius={50}
              _hover={{
                bg: colors.textOrange,
                transition: 'all 0.3s ease',
              }}
            >
              Shop now
            </Button>
          </Link>
        </Flex>
      </Box>
    </DarkContainer>
  );
};
