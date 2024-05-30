'use client';
import { Box, Image, SimpleGrid } from '@chakra-ui/react';
import { LightContainer } from '../ui/LightContainer';
import { MyText } from '../ui/MyText';
import { motion } from 'framer-motion';
import { Link } from 'next-view-transitions';

interface Props {}

const array = [1, 2, 3, 4, 5, 6];

const partners = [
  {
    link: 'https://thevoefoundation.org/',
    img: '/voe.JPG',
  },
  {
    link: 'www.afriskaut.com',
    img: '/afri.PNG',
  },
  {
    link: 'https://www.africasport.net/',
    img: '/sport.jpeg',
  },
];

export const Sponsor = ({}: Props) => {
  return (
    <LightContainer height={{ base: '100vh', md: '300px' }}>
      <MyText
        text="Partners"
        fontWeight={'bold'}
        fontSize={{ base: 15, md: 20 }}
      />
      <SimpleGrid
        gap={5}
        mt={5}
        columns={{ base: 1, md: 4 }}
        maxWidth={{ base: '90%', md: '70%' }}
        mx={'auto'}
      >
        {partners.map((item, index) => (
          <Box
            as={motion.image}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { delay: 0.3 * index, duration: 0.3 },
            }}
            viewport={{ once: true }}
            key={index}
          >
            <Link href={item?.link}>
              <Image
                alt="image"
                key={index}
                src={item.img}
                maxWidth={'100%'}
                height={200}
                borderRadius={200}
                objectFit={'contain'}
              />
            </Link>
          </Box>
        ))}
      </SimpleGrid>
    </LightContainer>
  );
};
