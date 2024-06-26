'use client';
import { Box, Grid, GridItem, Image, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link } from 'next-view-transitions';

interface Props {}

const images = [
  {
    img: '/frame-man.jpg',
    href: '/teams/first-team/men',
    text: "Men's First Team",
  },
  {
    img: '/frame-man.jpg',
    href: '#',
    text: "Women's First Team",
  },
  {
    img: '/frame-man.jpg',
    href: '#',
    text: 'Academy',
  },
  {
    img: '/frame-man.jpg',
    href: '#',
    text: 'Basketball Team',
  },
];
export const ImageLinks = ({}: Props) => {
  const index2 = 1,
    index3 = 2;
  return (
    <Box
      width={{ base: '90%', md: '70%' }}
      mx={'auto'}
      mt={{ base: 140, md: 50 }}
      pb={50}
    >
      <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={5}>
        {images.map((item, i) => (
          <GridItem
            cursor={'pointer'}
            key={i}
            colSpan={{ base: 1, md: i === index2 || i === index3 ? 1 : 2 }}
            position={'relative'}
            as={motion.div}
            initial={{ x: 50, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                delay: 0.3 * i,
                duration: 0.3,
                type: 'spring',
                damping: 9,
              },
            }}
            viewport={{ once: true }}
          >
            <Link key={i} href={item?.href}>
              <Image
                src={item.img}
                alt="image"
                width={'100%'}
                height={'auto'}
                objectFit={'cover'}
                borderRadius={10}
              />
            </Link>
            <Box position={'absolute'} left={5} bottom={5}>
              <Text
                textColor={'white'}
                fontSize={{ base: 15, md: 20 }}
                fontWeight={'bold'}
                fontFamily={'var(--font-rubik)'}
              >
                {item?.text}
              </Text>
            </Box>
            <Box
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              position={'absolute'}
              top={0}
              right={0}
              left={0}
              bottom={0}
              bg="black"
              opacity={0.7}
              zIndex={55}
            >
              <Text
                textColor={'white'}
                fontSize={{ base: 20, md: 30 }}
                fontWeight={'bold'}
                fontFamily={'var(--font-rubik)'}
              >
                Coming soon
              </Text>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};
