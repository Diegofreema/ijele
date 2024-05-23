import { PageHeader } from '@/components/ui/PageHeader';
import { Wrapper } from '@/components/ui/wrapper';
import { NextPage } from 'next';
import { Tv } from './_component/Tv';

interface Props {}

const page: NextPage<Props> = ({}): JSX.Element => {
  return (
    <Wrapper>
      <PageHeader title="Ijele Tv" />
      <Tv />
    </Wrapper>
  );
};

export default page;
