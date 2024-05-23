import { PageHeader } from '@/components/ui/PageHeader';
import { Wrapper } from '@/components/ui/wrapper';
import React from 'react';
import { Men } from './_component/Men';

type Props = {};

const page = (props: Props) => {
  return (
    <Wrapper>
      <PageHeader title="Men's First Team" />
      <Men />
    </Wrapper>
  );
};

export default page;
