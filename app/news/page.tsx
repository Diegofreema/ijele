import { getNews, getTotalNews } from '@/actions/data.action';
import { NewsPreview } from '@/components/news/NewsPreview';
import { PageHeader } from '@/components/ui/PageHeader';
import { Wrapper } from '@/components/ui/wrapper';
import { NextPage } from 'next';

interface Props {}

const page = async ({ searchParams }: { searchParams: { page?: string } }) => {
  const currentPage = Number(searchParams?.page) || 1;
  const newsData = getNews(currentPage);
  const countData = getTotalNews();

  const [news, count] = await Promise.all([newsData, countData]);
  return (
    <Wrapper>
      <PageHeader title="Latest News" />
      <NewsPreview news={news} count={count.numberOfArticles} />
    </Wrapper>
  );
};

export default page;
