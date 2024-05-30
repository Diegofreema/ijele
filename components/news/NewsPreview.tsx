'use client';
import { Box, Flex, Grid, GridItem } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { NewCards } from '../home/News';
import { OrangeButton } from '../ui/OrangeButton';
import { NewsType } from '@/types';

interface Props {
  news: NewsType[];
}
const fourArray = [1, 2, 3, 4, 5, , 6, 7];
export const NewsPreview = ({ news }: Props) => {
  const index2 = 1,
    index3 = 2;
  return (
    <Box
      width={{ base: '90%', md: '70%' }}
      mx={'auto'}
      mt={{ base: 140, md: 50 }}
      pb={50}
    >
      <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={5} mb={10}>
        {fourArray.slice(0, 2).map((item, i) => (
          <GridItem
            cursor={'pointer'}
            key={item}
            colSpan={1}
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
            <NewCards index={i} />
          </GridItem>
        ))}
      </Grid>
      <Grid
        templateColumns={{ base: '1fr', md: '1fr 1fr 1fr' }}
        gap={5}
        mb={10}
      >
        {fourArray.slice(2, 6).map((item, i) => (
          <GridItem
            cursor={'pointer'}
            key={item}
            colSpan={1}
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
            <NewCards index={i} />
          </GridItem>
        ))}
      </Grid>
      <Flex justifyContent={'center'}>
        <OrangeButton text="Load more" />
      </Flex>
    </Box>
  );
};
