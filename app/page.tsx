import { getImages, getNews, getVideos } from '@/actions/data.action';
import { Gallery } from '@/components/home/Gallery';
import { Membership } from '@/components/home/Membership';
import { News } from '@/components/home/News';
import { Shop } from '@/components/home/Shop';
import { Sponsor } from '@/components/home/Sponsor';
import { Tv } from '@/components/home/Tv';
import { Landing } from '@/components/home/landing';
import { Wrapper } from '@/components/ui/wrapper';

export default async function Home() {
  const newData = getNews();
  const videoData = getVideos();
  const imageData = getImages();
  const [news, videos, images] = await Promise.all([
    newData,
    videoData,
    imageData,
  ]);
  return (
    <Wrapper>
      <Landing />
      <News news={news} />
      <Tv videos={videos.data} />
      <Membership />
      <Gallery images={images} />
      <Shop />
      <Sponsor />
    </Wrapper>
  );
}
