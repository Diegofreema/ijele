'use client';
import { Box, Flex, Grid, GridItem } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { NewCards } from '../home/News';
import { OrangeButton } from '../ui/OrangeButton';
import { NewsType } from '@/types';
import { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { Link } from 'next-view-transitions';

interface Props {
  news: NewsType[];
  count: number;
}

export const NewsPreview = ({ news, count }: Props) => {
  const index2 = 1,
    index3 = 2;

  const memoNews = useMemo(() => [...news], [news]);
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;
  const newsHasNextPage = count > 10 * currentPage;
  return (
    <Box
      width={{ base: '90%', md: '70%' }}
      mx={'auto'}
      mt={{ base: 140, md: 50 }}
      pb={50}
    >
      <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={5} mb={10}>
        {memoNews?.slice(0, 2).map((item, i) => (
          <GridItem
            cursor={'pointer'}
            key={i}
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
            <NewCards index={i} item={item} />
          </GridItem>
        ))}
      </Grid>
      <Grid
        templateColumns={{ base: '1fr', md: '1fr 1fr 1fr' }}
        gap={5}
        mb={10}
      >
        {memoNews.slice(2, 6).map((item, i) => (
          <GridItem
            cursor={'pointer'}
            key={i}
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
            <NewCards index={i} item={item} />
          </GridItem>
        ))}
      </Grid>
      {newsHasNextPage && (
        <Flex justifyContent={'center'} mt={5}>
          <Link href={`/site/news?page=${currentPage + 1}`} passHref>
            <OrangeButton text="Load more" />
          </Link>
        </Flex>
      )}
    </Box>
  );
};
