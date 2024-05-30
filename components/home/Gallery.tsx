'use client';
import { colors } from '@/constants';
import {
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link } from 'next-view-transitions';
import { LightContainer } from '../ui/LightContainer';
import { motion } from 'framer-motion';
import { ImageType } from '@/types';
import { useMemo } from 'react';

interface Props {
  images: ImageType[];
}

export const Gallery = ({ images }: Props) => {
  const color = useColorModeValue('#181818', 'white');
  const bg = useColorModeValue('#fff', '#181818');
  const memoImages = useMemo(() => [...images], [images]);
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
        {memoImages?.length > 4 && (
          <Link href="/gallery">
            <Text
              textColor={colors.textOrange}
              fontSize={{ base: 15, md: 20 }}
              fontFamily={'var(--font-rubik)'}
              fontWeight={'500'}
            >
              All Pictures
            </Text>
          </Link>
        )}
      </Flex>
      <Grid
        templateColumns={{ base: '1fr', md: '1fr 1fr 1fr' }}
        templateRows="1fr"
        gap={10}
        maxWidth={{ base: '90%', md: '80%' }}
        mx={'auto'}
      >
        {memoImages?.map((item, i) => (
          <GridItem
            key={i}
            as={motion.div}
            initial={{ x: i === 0 || i === 3 ? -50 : 50, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { delay: 0.3, duration: 0.3 },
            }}
            viewport={{ once: true }}
            rowSpan={1}
            height={'300px'}
            colSpan={{ base: 1, md: i === 0 || i === 3 ? 1 : 2 }}
          >
            <Image
              alt="image"
              src={item?.image_url as string}
              width={'100%'}
              height={'100%'}
              objectFit={'cover'}
              borderRadius={10}
            />
          </GridItem>
        ))}
      </Grid>
    </LightContainer>
  );
};
