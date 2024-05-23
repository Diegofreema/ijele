'use client';

import { colors } from '@/constants';
import {
  Card,
  CardBody,
  Image,
  SimpleGrid,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link } from 'next-view-transitions';

type Props = {};
const array = new Array(9).fill('');
export const Shop = ({}: Props): JSX.Element => {
  return (
    <SimpleGrid
      mt={{ base: 100, md: 20 }}
      columns={{ base: 1, md: 3 }}
      width={{ base: '90%', md: '70%' }}
      gap={{ base: 5, md: 7 }}
      mx="auto"
    >
      {array.map((item, index) => (
        <ShopCard key={index} index={index} />
      ))}
    </SimpleGrid>
  );
};

const ShopCard = ({ index }: { index: number }) => {
  const color = useColorModeValue('#181818', '#fff');
  const bg = useColorModeValue('#fff', '#181818');
  return (
    <Link href={`/shop/`}>
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
            ease: 'ease',
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
            textColor={color}
            fontSize={{ base: 13, md: 16 }}
            fontFamily={'var(--font-rubik)'}
            fontWeight={'bold'}
          >
            IjeleSC male home shirt 24/25
          </Text>
          <Text
            textColor={colors.textOrange}
            fontSize={15}
            fontFamily={'var(--font-rubik)'}
            fontWeight={'500'}
          >
            N20,000
          </Text>
        </CardBody>
      </Card>
    </Link>
  );
};
