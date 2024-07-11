'use client';
import {
  Avatar,
  Box,
  Center,
  Flex,
  Image,
  SimpleGrid,
  Spinner,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { MyText } from '../ui/MyText';
import { DarkContainer } from '../ui/DarkContainer';
import { NewCards } from '../home/News';
import { Link } from 'next-view-transitions';
import { colors } from '@/constants';
import { NewsType } from '@/types';
import { useEffect, useMemo, useState } from 'react';
import { format } from 'date-fns';
import { getNews, getRelatedNews } from '@/actions/data.action';
import { LightContainer } from '../ui/LightContainer';
interface Props {
  singleArticle: NewsType;
}

export const SingleNew = ({ singleArticle }: Props) => {
  const memoData = useMemo(() => singleArticle, [singleArticle]);
  return (
    <Box pb={50}>
      <Box mb={{ base: 50, md: 100 }} mt={{ base: 120, md: 0 }}>
        <Image
          alt="team"
          src="/i.jpeg"
          width="100%"
          height={{ base: '200px', md: 400 }}
          objectFit={'cover'}
        />
      </Box>
      <NewsDetails data={memoData} />
      <RelatedNews data={memoData} />
    </Box>
  );
};

const NewsDetails = ({ data }: { data: NewsType }) => {
  return (
    <Center
      flexDir={'column'}
      width={{ base: '90%', md: '50%' }}
      mx={'auto'}
      mb={50}
    >
      <Flex
        justifyContent={'space-between'}
        alignItems={'center'}
        width={'100%'}
      >
        <Flex gap={{ base: 2, md: 5 }} alignItems={'center'}>
          <Avatar
            name="admin"
            src="/logo.png"
            size={{ base: 'sm', md: 'md' }}
          />
          <MyText
            text={data?.author_name as string}
            fontWeight={'400'}
            fontSize={{ base: 12, md: 15 }}
            textColor={'black'}
          />
        </Flex>
        <MyText
          text={format(data?.created_at!, 'eee MMM Y')}
          fontWeight={'bold'}
          fontSize={{ base: 12, md: 15 }}
          textColor={'black'}
        />
      </Flex>
      <SimpleGrid mt={10} gap={5}>
        <MyText
          text={data?.news as string}
          fontSize={{ base: 14, md: 16 }}
          fontFamily={'var(--font-rubik)'}
          textColor={'black'}
        />
      </SimpleGrid>
    </Center>
  );
};

const RelatedNews = ({ data }: { data: NewsType }) => {
  const [relatedNews, setRelatedNews] = useState<NewsType[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getRelatedNew = async () => {
      try {
        const news = await getRelatedNews(
          data?.category as string,
          data?.id as number
        );

        setRelatedNews(news);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    getRelatedNew();
  }, [data?.category, data?.id]);
  const color = useColorModeValue('#fff', '#091223');
  return relatedNews.length > 0 ? (
    <LightContainer height={'auto'}>
      {relatedNews?.length > 0 && (
        <Box width={{ base: '90%', md: '70%' }} mx={'auto'}>
          <Flex my={10} justifyContent={'space-between'} alignItems={'center'}>
            <Text
              textColor={color}
              fontSize={{ base: 15, md: 20 }}
              fontFamily={'var(--font-rubik)'}
            >
              Related News
            </Text>
            <Link href="/news">
              <Text
                textColor={colors.textOrange}
                fontSize={{ base: 15, md: 20 }}
                fontFamily={'var(--font-rubik)'}
              >
                All News
              </Text>
            </Link>
          </Flex>
          {loading ? (
            <Spinner size="xl" />
          ) : (
            <SimpleGrid columns={{ base: 1, md: 4 }} gap={5}>
              {relatedNews?.map((item, index) => (
                <NewCards item={item} index={index} key={index} />
              ))}
            </SimpleGrid>
          )}
        </Box>
      )}
    </LightContainer>
  ) : null;
};
