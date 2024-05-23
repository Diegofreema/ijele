import { PageHeader } from '@/components/ui/PageHeader';
import { Wrapper } from '@/components/ui/wrapper';
import { NextPage } from 'next';
import { Shop } from './_component/Shop';

interface Props {}

const page: NextPage<Props> = ({}): JSX.Element => {
  return (
    <Wrapper>
      <PageHeader title="Shop" />
      <Shop />
    </Wrapper>
  );
};

export default page;
