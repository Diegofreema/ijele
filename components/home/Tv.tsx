'use client';
import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import { MyText } from '../ui/MyText';
import { Link } from 'next-view-transitions';
import { colors } from '@/constants';
import { VideoComponent } from '../ui/VideoComponent';
import { VideoType } from '@/types';

interface Props {
  videos: VideoType[];
}

export const Tv = ({ videos }: Props) => {
  return (
    <Box
      minH={'100vh'}
      mx="auto"
      width={{ base: '90%', md: '80%' }}
      pt={{ base: '20px', md: '50px' }}
      pb={50}
    >
      <Flex my={10} justifyContent={'space-between'} alignItems={'center'}>
        <MyText
          fontSize={{ base: 15, md: 20 }}
          fontWeight={'bold'}
          text=" Latest Videos"
        />
        {videos?.length > 4 && (
          <Link href="/tv">
            <Text
              textColor={colors.textOrange}
              fontSize={{ base: 15, md: 20 }}
              fontFamily={'var(--font-rubik)'}
            >
              All Videos
            </Text>
          </Link>
        )}
      </Flex>

      {videos.length > 0 && (
        <>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={5} mb={10}>
            {videos.slice(0, 2).map((video, i) => (
              <VideoComponent
                video={video}
                key={i}
                height={{ base: '250px', md: '400px' }}
                fontSize={15}
              />
            ))}
          </SimpleGrid>
          <SimpleGrid columns={{ base: 1, md: 4 }} gap={5}>
            {videos.slice(2, 6).map((video, i) => (
              <VideoComponent
                key={i}
                video={video}
                height={250}
                fontSize={12}
              />
            ))}
          </SimpleGrid>
        </>
      )}

      {videos.length === 0 && (
        <MyText
          fontSize={{ base: 15, md: 20 }}
          fontWeight={'bold'}
          text="No videos yet"
          textAlign={'center'}
        />
      )}
    </Box>
  );
};
