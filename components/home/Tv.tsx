'use client';
import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import { MyText } from '../ui/MyText';
import { Link } from 'next-view-transitions';
import { colors } from '@/constants';
import { VideoComponent } from '../ui/VideoComponent';

interface Props {}
const videos = Array.from({ length: 6 }).map((_, index) => ({
  index,
}));
export const Tv = ({}: Props) => {
  return (
    <Box
      minH={'100vh'}
      mx="auto"
      width={{ base: '90%', md: '80%' }}
      pt={{ base: '20px', md: '50px' }}
      pb={50}
    >
      <Flex my={10} justifyContent={'space-between'} alignItems={'center'}>
        <MyText fontSize={20} fontWeight={'bold'} text=" Latest News" />
        <Link href="/tv">
          <Text
            textColor={colors.textOrange}
            fontSize={20}
            fontFamily={'var(--font-rubik)'}
          >
            All News
          </Text>
        </Link>
      </Flex>

      <SimpleGrid columns={{ base: 1, md: 2 }} gap={5} mb={10}>
        {videos.slice(0, 2).map(({ index }) => (
          <VideoComponent
            key={index}
            height={{ base: '250px', md: '400px' }}
            fontSize={15}
          />
        ))}
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 4 }} gap={5}>
        {videos.slice(2, 6).map(({ index }) => (
          <VideoComponent key={index} height={250} fontSize={12} />
        ))}
      </SimpleGrid>
    </Box>
  );
};
