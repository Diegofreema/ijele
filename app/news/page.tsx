import { NewsPreview } from '@/components/news/NewsPreview';
import { PageHeader } from '@/components/ui/PageHeader';
import { Wrapper } from '@/components/ui/wrapper';
import { NextPage } from 'next';

interface Props {}

const page: NextPage<Props> = ({}): JSX.Element => {
  return (
    <Wrapper>
      <PageHeader title="Latest News" />
      <NewsPreview />
    </Wrapper>
  );
};

export default page;
