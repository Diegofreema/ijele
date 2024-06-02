'use client';
import { CustomTitle } from '@/app/tv/_component/Tv';
import { MyText } from '@/components/ui/MyText';
import { OrangeButton } from '@/components/ui/OrangeButton';
import { ImageType } from '@/types';
import { Image, GridItem, Grid, Flex, Box } from '@chakra-ui/react';
import { Link } from 'next-view-transitions';
import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

interface Props {
  count: number;
  images: ImageType[];
}

export const ImageGrid = ({ count, images }: Props) => {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;
  const imageHasNextPage = count > 10 * currentPage;
  const memoImages = useMemo(() => images, [images]);
  return (
    <>
      {memoImages?.length > 0 && (
        <Box>
          <Grid
            width={{ base: '90%', md: '70%' }}
            mt={{ base: 100, md: 20 }}
            templateColumns={{ base: '1fr', md: '1fr 1fr 1fr' }}
            gap={{ base: 5, md: 10 }}
            mx={'auto'}
          >
            {memoImages?.map((item, i) => (
              <GridItem key={i} colSpan={{ base: 1, md: i % 2 === 0 ? 1 : 2 }}>
                <Image
                  width={'100%'}
                  height={'100%'}
                  src={item?.image_url as string}
                  alt="image"
                  borderRadius={5}
                  objectFit={'cover'}
                />
              </GridItem>
            ))}
          </Grid>
          {imageHasNextPage && (
            <Flex justifyContent={'center'} mt={5}>
              <Link href={`/site/images?page=${currentPage + 1}`}>
                <OrangeButton text={'Load more'} />
              </Link>
            </Flex>
          )}
        </Box>
      )}
      {images?.length === 0 && (
        <Flex
          width={{ base: '90%', md: '70%' }}
          mx={'auto'}
          justifyContent={'center'}
          alignItems={'center'}
          height={'100%'}
        >
          <CustomTitle
            title={'No images yet'}
            fontSize={{ base: 15, md: 20 }}
            fontWeight={'bold'}
            textAlign={'center'}
          />
        </Flex>
      )}
    </>
  );
};
