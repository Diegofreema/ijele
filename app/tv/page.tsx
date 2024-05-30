import { PageHeader } from '@/components/ui/PageHeader';
import { Wrapper } from '@/components/ui/wrapper';
import { NextPage } from 'next';
import { Tv } from './_component/Tv';
import { getTotalVideos, getVideos } from '@/actions/data.action';

interface Props {}

const page = async ({ searchParams }: { searchParams?: { page?: string } }) => {
  const currentPage = Number(searchParams?.page) || 1;
  const videoCountData = getTotalVideos();
  const videoData = getVideos(currentPage);

  const [count, videos] = await Promise.all([videoCountData, videoData]);
  return (
    <Wrapper>
      <PageHeader title="Ijele Tv" />
      <Tv count={count?.numberOfVideos} videos={videos?.data} />
    </Wrapper>
  );
};

export default page;
