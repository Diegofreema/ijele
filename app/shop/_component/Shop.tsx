'use client';

import { CustomTitle } from '@/app/tv/_component/Tv';
import { colors } from '@/constants';
import { ProductType } from '@/types';
import {
  Card,
  CardBody,
  Flex,
  Image,
  SimpleGrid,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link } from 'next-view-transitions';

type Props = {
  products: ProductType[];
  count: number;
};

export const Shop = ({ count, products }: Props): JSX.Element => {
  return (
    <>
      <Flex>
        {products?.length === 0 && (
          <CustomTitle title="No data yet" textAlign="center" />
        )}
      </Flex>
      <SimpleGrid
        mt={{ base: 100, md: 20 }}
        columns={{ base: 1, md: 3 }}
        width={{ base: '90%', md: '70%' }}
        gap={{ base: 5, md: 7 }}
        mx="auto"
      >
        {products?.length > 0 &&
          products?.map((item, index) => (
            <ShopCard key={index} index={index} item={item} />
          ))}
      </SimpleGrid>
    </>
  );
};

const ShopCard = ({ index, item }: { index: number; item: ProductType }) => {
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
          src={item?.image_url}
          alt="product"
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
            {item?.product_name}
          </Text>
          <Text
            textColor={colors.textOrange}
            fontSize={15}
            fontFamily={'var(--font-rubik)'}
            fontWeight={'500'}
          >
            N{item?.price}
          </Text>
        </CardBody>
      </Card>
    </Link>
  );
};
