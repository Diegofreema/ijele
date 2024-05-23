import { PageHeader } from '@/components/ui/PageHeader';
import { Wrapper } from '@/components/ui/wrapper';
import { NextPage } from 'next';
import { AboutComponent } from './_component/AboutComponent';
import { NextCOmponent } from './_component/NextComponent';
import { LastComponent } from './_component/LastComponent';

interface Props {}

const page: NextPage<Props> = ({}): JSX.Element => {
  return (
    <Wrapper>
      <PageHeader title="About us" />
      <AboutComponent />
      <NextCOmponent />
      <LastComponent />
    </Wrapper>
  );
};

export default page;
