'use client';

import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Image,
  Text,
} from '@chakra-ui/react';
import { Wrapper } from '../ui/wrapper';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  useCarousel,
} from '@/components/ui/carousel';
import { MyText } from '../ui/MyText';
import { ArrowDown, ChevronDown, Play } from 'lucide-react';
import { colors } from '@/constants';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface Props {}
const images = ['slide.jpeg', 'slide1.jpeg', 'slide2.jpeg'];
export const Landing = ({}: Props) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const onScrollToNextWindow = () => {
    const windowHeight = window.innerHeight;
    window.scrollTo({
      top: windowHeight,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <Wrapper>
      <Carousel
        setApi={setApi}
        className="w-screen h-screen overflow-hidden relative"
        opts={{ loop: true }}
      >
        <CarouselContent>
          {images.map((image) => (
            <CarouselItem key={image}>
              <Image
                src={`/${image}`}
                alt="image"
                width={'100vw'}
                height={'100vh'}
                objectFit={'cover'}
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        <Flex
          position={'absolute'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={{ base: '90%', md: '50%' }}
          bottom={'15%'}
          zIndex={10}
          right={'10%'}
        >
          <Button
            onClick={onScrollToNextWindow}
            borderColor={'white'}
            border={'1px'}
            p={3}
            borderRadius={50}
            width={'40px'}
            height={'40px'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            bg="transparent"
          >
            <ChevronDown color="white" size={25} />
          </Button>
          <Flex gap={2} alignItems={'center'}>
            {images.map((_, i) => (
              <Box
                key={i}
                width={current === i + 1 ? '20px' : '15px'}
                height={current === i + 1 ? '20px' : '15px'}
                bg={current === i + 1 ? 'transparent' : 'white'}
                borderColor={'white'}
                borderWidth={current === i + 1 ? '2px' : 0}
                borderRadius={'10px'}
              />
            ))}
          </Flex>
          <Flex>
            <Text fontWeight={'bold'} textColor={'white'}>
              Next
            </Text>

            <CarouselNext />
          </Flex>
        </Flex>
        <CaptionText />
        <Box
          position={'absolute'}
          top={0}
          bottom={0}
          right={0}
          zIndex={2}
          left={0}
          backgroundColor={'rgba(0,0,0,0.5)'}
        />
      </Carousel>
    </Wrapper>
  );
};

const CaptionText = () => {
  return (
    <Flex
      flexDir={'column'}
      gap={3}
      position={'absolute'}
      zIndex={10}
      top={'30%'}
      left={20}
    >
      <Heading
        fontSize={{ base: '3xl', md: '7xl' }}
        fontFamily={'var(--font-rubik)'}
        fontWeight={'bold'}
        textColor="white"
      >
        Ijele SC
      </Heading>
      <Text textColor={'#eee'} width={{ base: '100%', md: '60%' }}>
        With a commitment to excellence, teamwork and community, we strive to
        inspire both on and off the pitch, join us on our journey as we chase
        victory, celebrate resilience, and embody the true essence of the
        beautiful game.
      </Text>

      <Button
        bg={colors.orange}
        color={'white'}
        width={'fit-content'}
        px={10}
        borderRadius={50}
      >
        Join
      </Button>
    </Flex>
  );
};
