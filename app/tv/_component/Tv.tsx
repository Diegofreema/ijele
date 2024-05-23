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

interface Props {}
const array = [1, 1, 1, 1];
export const Tv = ({}: Props) => {
  return (
    <Box
      width={{ base: '90%', md: '70%' }}
      mx={'auto'}
      display={'flex'}
      flexDir={'column'}
      gap={10}
    >
      <SimpleGrid>
        <CustomTitle title="Latest Videos" />
        <VideoComponent height={{ base: '250px', md: '400px' }} fontSize={15} />
      </SimpleGrid>
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
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="sm:basis-1md:basis-1/2 lg:basis-1/3"
                >
                  <VideoComponent
                    height={{ base: '250px', md: '400px' }}
                    fontSize={15}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </SimpleGrid>
      </SimpleGrid>
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
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="sm:basis-1md:basis-1/2 lg:basis-1/3"
              >
                <VideoComponent
                  height={{ base: '250px', md: '400px' }}
                  fontSize={15}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </SimpleGrid>
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
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="sm:basis-1md:basis-1/2 lg:basis-1/3"
                >
                  <VideoComponent
                    height={{ base: '250px', md: '400px' }}
                    fontSize={15}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </SimpleGrid>
      </SimpleGrid>
    </Box>
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
