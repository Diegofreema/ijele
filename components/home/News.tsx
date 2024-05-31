'use client';
import {
  Box,
  Card,
  CardBody,
  Flex,
  Image,
  SimpleGrid,
  Spinner,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Wrapper } from '../ui/wrapper';
import { MyText } from '../ui/MyText';
import { colors } from '@/constants';
import { Link } from 'next-view-transitions';
import { motion } from 'framer-motion';
import { NewsType } from '@/types';
import { useMemo } from 'react';

interface Props {
  news: NewsType[];
}
const fourArray = [1, 2, 3, 4];
export const News = ({ news }: Props) => {
  const bg = useColorModeValue('#091223', '#fff');
  const color = useColorModeValue('#fff', '#091223');
  const fourNewsItems = useMemo(() => [...news.slice(0, 4)], [news]);

  return (
    <Box bg={bg} mt={{ base: '20px', md: '50px' }} py={50} minHeight={'400px'}>
      <Box width={{ base: '90%', md: '80%' }} mx={'auto'} height={'100%'}>
        <Flex my={10} justifyContent={'space-between'} alignItems={'center'}>
          <Text
            textColor={color}
            fontSize={{ base: 15, md: 20 }}
            fontFamily={'var(--font-rubik)'}
          >
            Latest News
          </Text>
          {news?.length > 4 && (
            <Link href="/news">
              <Text
                textColor={colors.textOrange}
                fontSize={{ base: 15, md: 20 }}
                fontFamily={'var(--font-rubik)'}
              >
                All News
              </Text>
            </Link>
          )}
        </Flex>
        <SimpleGrid columns={{ base: 1, md: 4 }} gap={30}>
          {fourNewsItems?.length > 0 &&
            fourNewsItems.map((item, i) => (
              <NewCards index={i} key={i} item={item} />
            ))}
        </SimpleGrid>
        {news?.length === 0 && (
          <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            height={'100%'}
            width={'100%'}
          >
            <MyText text="No News yet" textAlign={'center'} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export const NewCards = ({
  index,
  item,
}: {
  index: number;
  item: NewsType;
}) => {
  const color = useColorModeValue('#181818', '#fff');
  const bg = useColorModeValue('#fff', '#181818');

  return (
    <Link href={`/news/${item?.id}`}>
      <Card
        as={motion.div}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
            type: 'spring',
            damping: '8',
            ease: 'easeInOut',
            delay: 0.3 * index,
          },
        }}
        whileHover={{ y: -20 }}
        viewport={{ once: true }}
        borderRadius={5}
        cursor={'pointer'}
      >
        <Image
          src={item?.image_url as string}
          alt="Green double couch with wooden legs"
          width={'100%'}
          height={250}
          objectFit={'fill'}
        />
        <CardBody bg={bg}>
          <Text
            textColor={colors.textOrange}
            fontSize={15}
            fontFamily={'var(--font-rubik)'}
            fontWeight={'500'}
          >
            {item?.author_name}
          </Text>
          <Text
            textColor={color}
            fontSize={20}
            fontFamily={'var(--font-rubik)'}
            fontWeight={'bold'}
          >
            {item?.title}
          </Text>
        </CardBody>
      </Card>
    </Link>
  );
};
