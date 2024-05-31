'use client';
import { CustomTitle } from '@/app/tv/_component/Tv';
import { MyText } from '@/components/ui/MyText';
import { schs } from '@/data';
import { MenType } from '@/types';
import {
  Box,
  Card,
  CardFooter,
  Flex,
  Image,
  SimpleGrid,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link } from 'next-view-transitions';
import { useMemo } from 'react';

type Props = {
  mens: MenType[];
};

export const Men = ({ mens }: Props): JSX.Element => {
  // console.log(schs.length);
  const forwards = useMemo(
    () => mens.filter((m) => m.position === 'forward'),
    [mens]
  );
  const midfielders = useMemo(
    () => mens.filter((m) => m.position === 'midfielder'),
    [mens]
  );
  const defenders = useMemo(
    () => mens.filter((m) => m.position === 'defender'),
    [mens]
  );
  const goalkeepers = useMemo(
    () => mens.filter((m) => m.position === 'goalkeeper'),
    [mens]
  );

  const coaches = useMemo(
    () => mens.filter((m) => m.position === 'coach'),
    [mens]
  );

  return (
    <>
      <Flex>
        {mens?.length === 0 && (
          <CustomTitle title="No data yet" textAlign="center" />
        )}
      </Flex>
      <SimpleGrid
        gap={{ base: 5, md: 10 }}
        mt={{ base: 100, mt: 20 }}
        width={{ base: '90%', md: '70%' }}
        mx="auto"
      >
        {goalkeepers?.length > 0 && (
          <PlayersCat mens={goalkeepers} title="Goalkeepers" />
        )}
        {midfielders?.length > 0 && (
          <PlayersCat mens={midfielders} title="Defenders" />
        )}
        {defenders?.length > 0 && (
          <PlayersCat mens={defenders} title="Midfielders" />
        )}
        {forwards?.length > 0 && (
          <PlayersCat mens={forwards} title="Forwards" />
        )}
        {coaches?.length > 0 && <PlayersCat mens={coaches} title="Coach" />}
      </SimpleGrid>
    </>
  );
};

const PlayersCat = ({ title, mens }: { title: string; mens: MenType[] }) => {
  return (
    <Box>
      <CustomTitle title={title} />
      <SimpleGrid gap={5} columns={{ base: 1, md: 3 }}>
        {mens.map((item, index) => (
          <MenCard key={index} men={item} index={index} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

const MenCard = ({ men, index }: { men: MenType; index: number }) => {
  return (
    <Card
      as={motion.div}
      initial={{ y: 50, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          type: 'spring',
          damping: '8',
          ease: 'easeInOut',
          delay: 0.3 * index,
        },
      }}
      whileHover={{ y: -20 }}
      viewport={{ once: true }}
      borderRadius={5}
      cursor={'pointer'}
    >
      {/* <Link href={`/teams/first-team/men/${men.id}`} className="w-full h-full"> */}
      <Image alt="img" src={men.image_url} width={'100%'} height={'100%'} />
      {/* </Link> */}
      <CardFooter>
        <MyText
          text={men?.first_name + ' ' + ' ' + men?.last_name}
          fontSize={{ base: 13, md: 16 }}
          fontWeight={'bold'}
        />
        <MyText text={men?.jersey_number.toString()} fontWeight={'bold'} />
        {men?.role && (
          <MyText text={men?.role?.toString()} fontWeight={'bold'} />
        )}
      </CardFooter>
    </Card>
  );
};
