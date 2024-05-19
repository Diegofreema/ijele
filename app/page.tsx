import { Gallery } from '@/components/home/Gallery';
import { Membership } from '@/components/home/Membership';
import { News } from '@/components/home/News';
import { Shop } from '@/components/home/Shop';
import { Sponsor } from '@/components/home/Sponsor';
import { Tv } from '@/components/home/Tv';
import { Landing } from '@/components/home/landing';
import { Wrapper } from '@/components/ui/wrapper';

export default function Home() {
  return (
    <Wrapper>
      <Landing />
      <News />
      <Tv />
      <Membership />
      <Gallery />
      <Shop />
      <Sponsor />
    </Wrapper>
  );
}
