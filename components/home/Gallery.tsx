'use client';
import { colors } from '@/constants';
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link } from 'next-view-transitions';
import { LightContainer } from '../ui/LightContainer';

interface Props {}

export const Gallery = ({}: Props) => {
  const color = useColorModeValue('#181818', 'white');
  const bg = useColorModeValue('#fff', '#181818');
  return (
    <LightContainer>
      <Flex
        width={'100%'}
        my={10}
        justifyContent={'space-between'}
        alignItems={'center'}
        maxWidth={{ base: '90%', md: '80%' }}
        mx={'auto'}
      >
        <Text
          textColor={color}
          fontSize={{ base: 15, md: 20 }}
          fontWeight={'bold'}
          fontFamily={'var(--font-rubik)'}
        >
          Gallery
        </Text>
        <Link href="/news">
          <Text
            textColor={colors.textOrange}
            fontSize={{ base: 15, md: 20 }}
            fontFamily={'var(--font-rubik)'}
            fontWeight={'500'}
          >
            All Pictures
          </Text>
        </Link>
      </Flex>
      <Grid
        templateColumns={{ base: '1fr', md: '1fr 1fr 1fr' }}
        templateRows="1fr"
        gap={10}
        maxWidth={{ base: '90%', md: '80%' }}
        mx={'auto'}
      >
        <GridItem rowSpan={1} height={'300px'} colSpan={{ base: 1, md: 2 }}>
          <Image
            alt="image"
            src="/member.png"
            width={'100%'}
            height={'100%'}
            objectFit={'cover'}
            borderRadius={10}
          />
        </GridItem>
        <GridItem rowSpan={1} height={'300px'} colSpan={1}>
          <Image
            alt="image"
            src="/member.png"
            width={'100%'}
            height={'100%'}
            objectFit={'cover'}
            borderRadius={10}
          />
        </GridItem>
        <GridItem rowSpan={1} height={'300px'} colSpan={1}>
          <Image
            alt="image"
            src="/member.png"
            width={'100%'}
            height={'100%'}
            objectFit={'cover'}
            borderRadius={10}
          />
        </GridItem>
        <GridItem rowSpan={1} height={'300px'} colSpan={{ base: 1, md: 2 }}>
          <Image
            alt="image"
            src="/member.png"
            width={'100%'}
            height={'100%'}
            objectFit={'cover'}
            borderRadius={10}
          />
        </GridItem>
      </Grid>
    </LightContainer>
  );
};
