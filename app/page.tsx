import { News } from '@/components/home/News';
import { Tv } from '@/components/home/Tv';
import { Landing } from '@/components/home/landing';
import { Wrapper } from '@/components/ui/wrapper';

export default function Home() {
  return (
    <Wrapper>
      <Landing />
      <News />
      <Tv />
    </Wrapper>
  );
}
