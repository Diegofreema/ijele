import { PageHeader } from '@/components/ui/PageHeader';
import { Wrapper } from '@/components/ui/wrapper';
import { NextPage } from 'next';
import { Events } from './_component/Events';

interface Props {}

const page: NextPage<Props> = ({}): JSX.Element => {
  return (
    <Wrapper>
      <PageHeader title="Event" />
      <Events />
    </Wrapper>
  );
};

export default page;
