import { getSingleNews } from '@/actions/data.action';
import { SingleNew } from '@/components/news/SingleNew';
import { Wrapper } from '@/components/ui/wrapper';
import { Box, Image } from '@chakra-ui/react';
import { NextPage } from 'next';
import { notFound } from 'next/navigation';

interface Props {}

const page = async ({ params }: { params: { id: string } }) => {
  if (!params.id) {
    return notFound();
  }
  const singleArticle: any = await getSingleNews(params.id);
  if (!singleArticle) {
    return notFound();
  }
  return (
    <Wrapper>
      <SingleNew singleArticle={singleArticle} />
    </Wrapper>
  );
};

export default page;
