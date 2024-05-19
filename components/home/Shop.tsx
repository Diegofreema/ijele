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

interface Props {}

export const Shop = ({}: Props) => {
  const color = useColorModeValue('white', colors.dark);
  return (
    <DarkContainer>
      <Box
        display={'flex'}
        flexDirection={'column'}
        gap={5}
        width={{ base: '90%', md: '80%' }}
        mx={'auto'}
      >
        <Image
          alt="image"
          src="/people.png"
          width={'100%'}
          height={'auto'}
          objectFit={'cover'}
        />
        <Flex
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

          <Button
            bg={colors.orange}
            color={'white'}
            width={'fit-content'}
            px={10}
            borderRadius={50}
          >
            Shop now
          </Button>
        </Flex>
      </Box>
    </DarkContainer>
  );
};
