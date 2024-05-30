'use client';
import { VideoComponent } from '@/components/ui/VideoComponent';
import { colors } from '@/constants';
import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { VideoType } from '@/types';
import { useMemo } from 'react';
import { MyText } from '@/components/ui/MyText';

interface Props {
  count: number;
  videos: VideoType[];
}
const array = [1, 1, 1, 1];
export const Tv = ({ count, videos }: Props) => {
  const memoVideos = useMemo(() => [...videos], [videos]);
  const firstVideo = memoVideos?.[0];
  const firstTeam = useMemo(
    () => videos?.filter((item) => item.type === 'first team'),
    [videos]
  );
  const academyVideo = useMemo(
    () => videos?.filter((item) => item.type === 'academy'),
    [videos]
  );
  const pressConference = useMemo(
    () => videos?.filter((item) => item.type === 'press conference'),
    [videos]
  );
  return (
    <>
      <Box
        width={{ base: '90%', md: '70%' }}
        mx={'auto'}
        display={'flex'}
        flexDir={'column'}
        gap={10}
      >
        <SimpleGrid width={'100%'}>
          <CustomTitle title="Latest Videos" />
          {firstVideo && (
            <VideoComponent
              video={firstVideo}
              height={{ base: '250px', md: '400px' }}
              fontSize={15}
            />
          )}
        </SimpleGrid>

        {firstTeam?.length > 0 && (
          <SimpleGrid>
            <CustomTitle title="First Team" />
            <SimpleGrid>
              <Carousel
                opts={{
                  align: 'start',
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="w-full">
                  {firstTeam?.map((item, index) => (
                    <CarouselItem
                      key={index}
                      className="sm:basis-1md:basis-1/2 lg:basis-1/3"
                    >
                      <VideoComponent
                        video={item}
                        height={{ base: '250px', md: '400px' }}
                        fontSize={15}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </SimpleGrid>
          </SimpleGrid>
        )}
        {pressConference?.length > 0 && (
          <SimpleGrid>
            <CustomTitle title="Press Conference" />
            <Carousel
              opts={{
                align: 'start',
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="w-full">
                {pressConference?.map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="sm:basis-1md:basis-1/2 lg:basis-1/3"
                  >
                    <VideoComponent
                      video={item}
                      height={{ base: '250px', md: '400px' }}
                      fontSize={15}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </SimpleGrid>
        )}
        {academyVideo?.length > 0 && (
          <SimpleGrid>
            <CustomTitle title="Academy" />
            <SimpleGrid>
              <Carousel
                opts={{
                  align: 'start',
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="w-full">
                  {academyVideo?.map((item, index) => (
                    <CarouselItem
                      key={index}
                      className="sm:basis-1md:basis-1/2 lg:basis-1/3"
                    >
                      <VideoComponent
                        video={item}
                        height={{ base: '250px', md: '400px' }}
                        fontSize={15}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </SimpleGrid>
          </SimpleGrid>
        )}
      </Box>
      <Flex justifyContent={'center'} width={'100%'}>
        {videos?.length === 0 && (
          <MyText
            text="No videos yet"
            fontSize={{ base: 15, md: 20 }}
            fontWeight={'bold'}
            width={'100%'}
            textAlign={'center'}
          />
        )}
      </Flex>
    </>
  );
};

export const CustomTitle = ({ title }: { title: string }) => {
  const bg = useColorModeValue(colors.dark, 'white');
  return (
    <Heading
      textColor={bg}
      size={{ base: 'lg', md: 'xl' }}
      mb={{ base: 5, md: 10 }}
      mt={{ base: 100, md: 10 }}
    >
      {title}
    </Heading>
  );
};
