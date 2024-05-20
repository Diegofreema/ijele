import { ImageLinks } from '@/components/Teams/ImageLinks';
import { PageHeader } from '@/components/ui/PageHeader';
import { Wrapper } from '@/components/ui/wrapper';
import { NextPage } from 'next';

interface Props {}

const page: NextPage<Props> = ({}): JSX.Element => {
  return (
    <Wrapper>
      <PageHeader title="Teams" />
      <ImageLinks />
    </Wrapper>
  );
};

export default page;
