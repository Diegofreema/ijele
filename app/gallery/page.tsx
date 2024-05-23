import { PageHeader } from '@/components/ui/PageHeader';
import { Wrapper } from '@/components/ui/wrapper';
import React from 'react';
import { ImageGrid } from './_component/ImageGrid';

type Props = {};

const page = (props: Props) => {
  return (
    <Wrapper>
      <PageHeader title="Gallery" />
      <ImageGrid />
    </Wrapper>
  );
};

export default page;
