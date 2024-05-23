import { CustomTitle } from '@/app/tv/_component/Tv';
import { Box, Image, SimpleGrid } from '@chakra-ui/react';
import { Link } from 'next-view-transitions';

type Props = {};

export const Men = ({}: Props): JSX.Element => {
  return (
    <SimpleGrid
      gap={{ base: 5, md: 10 }}
      mt={{ base: 100, mt: 20 }}
      width={{ base: '90%', md: '70%' }}
      mx="auto"
    >
      <PlayersCat arrayNumber={2} title="Goalkeepers" />
      <PlayersCat arrayNumber={5} title="Defenders" />
      <PlayersCat arrayNumber={5} title="Midfielders" />
      <PlayersCat arrayNumber={5} title="Forwards" />
      <PlayersCat arrayNumber={1} title="Coach" />
    </SimpleGrid>
  );
};

const PlayersCat = ({
  title,
  arrayNumber,
}: {
  title: string;
  arrayNumber: number;
}) => {
  const newArray = new Array(arrayNumber).fill(0);
  return (
    <Box>
      <CustomTitle title={title} />
      <SimpleGrid gap={5} columns={{ base: 1, md: 3 }}>
        {newArray.map((_, index) => (
          <MenCard key={index} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

const MenCard = () => {
  return (
    <Box>
      <Link href={'/'} className="w-full h-full">
        <Image alt="img" src="/foot.png" width={'100%'} height={'100%'} />
      </Link>
    </Box>
  );
};
