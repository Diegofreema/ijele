'use client';
import {
  Box,
  Card,
  CardBody,
  Flex,
  Image,
  SimpleGrid,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Wrapper } from '../ui/wrapper';
import { MyText } from '../ui/MyText';
import { colors } from '@/constants';
import { Link } from 'next-view-transitions';
import { motion } from 'framer-motion';

interface Props {}
const fourArray = [1, 2, 3, 4];
export const News = ({}: Props) => {
  const bg = useColorModeValue('#091223', '#fff');
  const color = useColorModeValue('#fff', '#091223');

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
        <SimpleGrid columns={{ base: 1, md: 4 }} gap={30}>
          {fourArray.map((item, i) => (
            <NewCards index={i} key={item} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export const NewCards = ({ index }: { index: number }) => {
  const color = useColorModeValue('#181818', '#fff');
  const bg = useColorModeValue('#fff', '#181818');

  return (
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
        src="/news.png"
        alt="Green double couch with wooden legs"
        width={'100%'}
        height={200}
        objectFit={'cover'}
      />
      <CardBody bg={bg}>
        <Text
          textColor={colors.textOrange}
          fontSize={15}
          fontFamily={'var(--font-rubik)'}
          fontWeight={'500'}
        >
          Interview
        </Text>
        <Text
          textColor={color}
          fontSize={20}
          fontFamily={'var(--font-rubik)'}
          fontWeight={'bold'}
        >
          Nwobodo: we are here to compete with the very best
        </Text>
      </CardBody>
    </Card>
  );
};
