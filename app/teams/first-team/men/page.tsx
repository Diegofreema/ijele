import { PageHeader } from '@/components/ui/PageHeader';
import { Wrapper } from '@/components/ui/wrapper';
import React from 'react';
import { Men } from './_component/Men';
import { getPlayers } from '@/actions/data.action';

type Props = {};

const page = async (props: Props) => {
  const data = await getPlayers();
  return (
    <Wrapper>
      <PageHeader title="Men's First Team" />
      <Men mens={data} />
    </Wrapper>
  );
};

export default page;
