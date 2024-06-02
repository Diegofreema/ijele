'use client';
import { CustomTitle } from '@/app/tv/_component/Tv';
import { colors } from '@/constants';
import { MatchesType } from '@/types';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  useColorModeValue,
  Card,
  Image,
  CardBody,
  Text,
  SimpleGrid,
  Flex,
  Button,
  useDisclosure,
  SlideFade,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface Props {
  count: number;
  matches: MatchesType[];
}

export const Events = ({ count, matches }: Props) => {
  const bg = useColorModeValue(colors.dark, 'white');
  const { isOpen, onClose, onOpen } = useDisclosure();
  const upcomingMatches = useMemo(
    () => matches?.filter((m) => m.match_result === 'upcoming'),
    [matches]
  );
  const playedMatches = useMemo(
    () => matches?.filter((m) => m.match_result !== 'upcoming'),
    [matches]
  );
  return (
    <SimpleGrid
      mt={{ base: 100, md: 20 }}
      width={{ base: '90%', md: '70%' }}
      mx="auto"
      position="relative"
    >
      <Flex gap={3} justifyContent={'center'}>
        {' '}
        <Button
          mb={5}
          bg={isOpen ? colors.darkBlue : colors.lightBlue}
          color="white"
          onClick={onOpen}
        >
          {'Fixtures'}
        </Button>
        <Button
          bg={!isOpen ? colors.darkBlue : colors.lightBlue}
          color="white"
          mb={5}
          onClick={onClose}
        >
          {'Results'}
        </Button>
      </Flex>
      <SlideFade in={isOpen}>
        {upcomingMatches?.length > 0 &&
          upcomingMatches?.map((m, i) => <FixtureCard key={i} match={m} />)}
        {upcomingMatches?.length === 0 && (
          <CustomTitle title="No data yet" textAlign={'center'} />
        )}
      </SlideFade>
      <SlideFade in={!isOpen}>
        {playedMatches?.length > 0 &&
          playedMatches?.map((m, i) => <FixtureCard key={i} match={m} />)}

        {playedMatches?.length === 0 && (
          <CustomTitle title="No data yet" textAlign={'center'} />
        )}
      </SlideFade>
    </SimpleGrid>
  );
};

const FixtureCard = ({ match }: { match: MatchesType }) => {
  const color = useColorModeValue('#181818', '#fff');
  const bg = useColorModeValue('#fff', '#181818');
  return (
    <Card
      mb={6}
      bg={bg}
      position={'absolute'}
      width={'100%'}
      pt={5}
      as={motion.div}
      initial={{ x: -50, opacity: 0 }}
      whileInView={{
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          type: 'spring',
          damping: '8',
          ease: 'easeInOut',
          delay: 0.3,
        },
      }}
      viewport={{ once: true }}
      borderRadius={5}
      cursor={'pointer'}
    >
      <Flex
        flexDirection="column"
        gap={3}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Text textColor={color}>WED 24 JUL 2024</Text>
        <Text textColor={color} fontSize={10} fontWeight={'bold'}>
          {match?.league}
        </Text>
        <Flex justifyItems={'center'} gap={3} alignItems={'center'}>
          <Flex alignItems={'center'} gap={3}>
            <Text textColor={color} fontWeight={'bold'}>
              {match?.home_team}
            </Text>
            <Image
              src={match?.home_team_img}
              alt="Green double couch with wooden legs"
              width={100}
              height={100}
              objectFit={'cover'}
            />
          </Flex>
          <Flex
            fontWeight={'bold'}
            fontSize={15}
            borderWidth={1}
            borderColor={'black'}
            px={3}
          >
            {match?.home_score + ' : ' + match?.away_score}
          </Flex>
          <Flex alignItems={'center'} gap={3}>
            <Image
              src={match?.away_team_img}
              alt="Green double couch with wooden legs"
              width={100}
              height={100}
              objectFit={'cover'}
            />{' '}
            <Text textColor={color} fontWeight={'bold'}>
              {match?.away_team}
            </Text>
          </Flex>
        </Flex>
        <Button bg={'blue'} color={'white'} borderRadius={0} width={'100%'}>
          {match?.venue}
        </Button>
      </Flex>
    </Card>
  );
};
