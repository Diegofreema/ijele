import { SingleNew } from '@/components/news/SingleNew';
import { Wrapper } from '@/components/ui/wrapper';
import { Box, Image } from '@chakra-ui/react';
import { NextPage } from 'next';

interface Props {}

const page: NextPage<Props> = ({}): JSX.Element => {
  return (
    <Wrapper>
      <SingleNew />
    </Wrapper>
  );
};

export default page;
