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
import { ChevronDownIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import { Link } from 'next-view-transitions';

interface Props {}
const images = ['hero.png', 'hero1.png', 'hero2.png'];
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
          as={motion.div}
          initial={{ scale: 0.6, opacity: 0 }}
          whileInView={{
            scale: 1,
            opacity: 1,
            transition: { duration: 0.5 },
          }}
          viewport={{ once: true }}
          position={'absolute'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={{ base: '90%', md: '50%' }}
          bottom={'15%'}
          zIndex={10}
          right={{ base: '18%', md: '10%' }}
        >
          <Button
            hideBelow={'md'}
            onClick={onScrollToNextWindow}
            borderColor={'white'}
            borderWidth={'1px'}
            role={'group'}
            p={3}
            borderRadius={50}
            width={'40px'}
            height={'40px'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            bg="transparent"
          >
            <ChevronDownIcon
              _groupHover={{ color: 'black' }}
              color="white"
              boxSize={25}
            />
          </Button>
          <Flex gap={2} alignItems={'center'} hideBelow={'md'}>
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
          <Flex flexDirection={{ base: 'column', md: 'row' }}>
            <Text hideBelow={'md'} fontWeight={'bold'} textColor={'white'}>
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
      as={motion.div}
      initial={{ scale: 0.6, opacity: 0 }}
      whileInView={{
        scale: 1,
        opacity: 1,
        transition: { duration: 0.5 },
      }}
      viewport={{ once: true }}
      flexDir={'column'}
      gap={3}
      position={'absolute'}
      zIndex={10}
      top={'30%'}
      left={{ base: 4, md: 20 }}
    >
      <Heading
        fontSize={{ base: '3xl', md: '7xl' }}
        fontFamily={'var(--font-rubik)'}
        fontWeight={'bold'}
        textColor="white"
      >
        Ijele SC
      </Heading>
      <Text
        textColor={'#eee'}
        width={{ base: '90%', md: '60%' }}
        fontSize={{ base: 15, md: 18 }}
      >
        With a commitment to excellence, teamwork, and community, we strive to
        inspire both on and off the pitch.
      </Text>
      <Text
        textColor={'#eee'}
        width={{ base: '90%', md: '60%' }}
        fontSize={{ base: 15, md: 18 }}
      >
        Join the biggest sports club in Nigeria on our journey as we chase
        victories, celebrate resilience, and embody the true essence of sporting
        excellence and participation.
      </Text>
      <Link
        href="https://www.ijelesportsmembership.ng"
        className={`py-2 px-10 rounded-[50px] text-white w-fit bg-[#3e5caa]`}
      >
        Join
      </Link>
    </Flex>
  );
};
