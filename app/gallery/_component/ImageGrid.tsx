'use client';
import { SimpleGrid, Image, GridItem, Grid } from '@chakra-ui/react';

interface Props {}
const array = [1, 2, 3, 4, 5, , 5, 6, 45, 54, 3, 4, 43, 5];
export const ImageGrid = ({}: Props) => {
  return (
    <Grid
      width={{ base: '90%', md: '70%' }}
      mt={{ base: 100, md: 20 }}
      templateColumns={{ base: '1fr', md: '1fr 1fr 1fr' }}
      gap={{ base: 5, md: 10 }}
      mx={'auto'}
    >
      {array.map((_, i) => (
        <GridItem key={i} colSpan={{ base: 1, md: i % 2 === 0 ? 1 : 2 }}>
          <Image
            width={'100%'}
            height={'100%'}
            src="/frame-man.jpg"
            alt="image"
            borderRadius={5}
            objectFit={'cover'}
          />
        </GridItem>
      ))}
    </Grid>
  );
};
