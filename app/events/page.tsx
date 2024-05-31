import { PageHeader } from '@/components/ui/PageHeader';
import { Wrapper } from '@/components/ui/wrapper';
import { NextPage } from 'next';
import { Events } from './_component/Events';
import { getAllMatches, getTotalMatches } from '@/actions/data.action';

interface Props {}

const page = async ({ searchParams }: { searchParams?: { page?: string } }) => {
  const currentPage = Number(searchParams?.page) || 1;

  const matchesCount = getTotalMatches();
  const matchesData = getAllMatches(currentPage);
  const [count, matches] = await Promise.all([matchesCount, matchesData]);
  return (
    <Wrapper>
      <PageHeader title="Event" />
      <Events count={count} matches={matches} />
    </Wrapper>
  );
};

export default page;
