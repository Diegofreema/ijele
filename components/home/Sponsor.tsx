'use client';
import { Box, Image, SimpleGrid } from '@chakra-ui/react';
import { LightContainer } from '../ui/LightContainer';
import { MyText } from '../ui/MyText';

interface Props {}

const array = [1, 2, 3, 4, 5, 6];

export const Sponsor = ({}: Props) => {
  return (
    <LightContainer height={{ base: '100vh', md: '300px' }}>
      <MyText
        text="Sponsors"
        fontWeight={'bold'}
        fontSize={{ base: 15, md: 20 }}
      />
      <SimpleGrid gap={5} mt={5} columns={{ base: 2, md: 4, lg: 6 }}>
        {array.map((_, index) => (
          <Image
            alt="image"
            key={index}
            src="/member.png"
            maxWidth={100}
            height={100}
            borderRadius={200}
            objectFit={'cover'}
          />
        ))}
      </SimpleGrid>
    </LightContainer>
  );
};
