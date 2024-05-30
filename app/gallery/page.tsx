import { PageHeader } from '@/components/ui/PageHeader';
import { Wrapper } from '@/components/ui/wrapper';
import React from 'react';
import { ImageGrid } from './_component/ImageGrid';
import { getImages, getTotalImages } from '@/actions/data.action';

type Props = {};

const page = async ({ searchParams }: { searchParams?: { page?: string } }) => {
  const currentPage = Number(searchParams?.page) || 1;
  const imageCount = getTotalImages();
  const imagesData = getImages(currentPage);
  const [count, images] = await Promise.all([imageCount, imagesData]);
  return (
    <Wrapper>
      <PageHeader title="Gallery" />
      <ImageGrid count={count?.numberOfImages} images={images} />
    </Wrapper>
  );
};

export default page;
