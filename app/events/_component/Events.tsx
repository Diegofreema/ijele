'use client';
import { CustomTitle } from '@/app/tv/_component/Tv';
import { OrangeButton } from '@/components/ui/OrangeButton';
import { PaymentModal } from '@/components/ui/PaymentModal';
import { colors } from '@/constants';
import { MatchesType } from '@/types';
import { createClient } from '@/utils/supabase/client';
import {
  Button,
  Card,
  Flex,
  Image,
  SimpleGrid,
  SlideFade,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo } from 'react';

interface Props {
  count: number;
  matches: MatchesType[];
}

export const Events = ({ matches }: Props) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const supabase = createClient();
  const upcomingMatches = useMemo(
    () => matches?.filter((m) => m?.RESULT === 'upcoming'),
    [matches]
  );
  const playedMatches = useMemo(
    () => matches?.filter((m) => m?.RESULT !== 'upcoming'),
    [matches]
  );
  const router = useRouter();
  useEffect(() => {
    const channel = supabase
      .channel('matches-change')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'matches',
        },
        () => {
          router.refresh();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase, router]);
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
          bg={!isOpen ? colors.darkBlue : colors.lightBlue}
          color="white"
          onClick={onClose}
        >
          {'Fixtures'}
        </Button>
        <Button
          bg={isOpen ? colors.darkBlue : colors.lightBlue}
          color="white"
          mb={5}
          onClick={onOpen}
        >
          {'Results'}
        </Button>
      </Flex>
      <SlideFade in={!isOpen}>
        {upcomingMatches?.length > 0 &&
          upcomingMatches?.map((m, i) => (
            <FixtureCard ticket key={i} match={m} />
          ))}
        {upcomingMatches?.length === 0 && (
          <CustomTitle title="No data yet" textAlign={'center'} />
        )}
      </SlideFade>
      <SlideFade in={isOpen}>
        {playedMatches?.length > 0 &&
          playedMatches?.map((m, i) => <FixtureCard key={i} match={m} />)}

        {playedMatches?.length === 0 && (
          <CustomTitle title="No data yet" textAlign={'center'} />
        )}
      </SlideFade>
    </SimpleGrid>
  );
};

const FixtureCard = ({
  match,
  ticket,
}: {
  match: MatchesType;
  ticket?: boolean;
}) => {
  const color = useColorModeValue('#181818', '#fff');
  const bg = useColorModeValue('#fff', '#181818');
  const { isOpen, onClose, onOpen } = useDisclosure();
  const availableTicket = match?.ticket_available || 0;
  const thereIsTicket = availableTicket > 1;
  const ticketText = thereIsTicket
    ? `${match?.ticket_available} tickets left`
    : 'Sold out';
  return (
    <>
      <PaymentModal
        id={match.id}
        isOpen={isOpen}
        onCloseFn={onClose}
        price={match.ticket_price || 0}
      />
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
          {ticket && (
            <>
              <OrangeButton
                text={` Buy ticket for ₦${match?.ticket_price}`}
                textColor={color}
                fontSize={15}
                onClick={onOpen}
                fontWeight={'bold'}
                zIndex={55}
                isDisabled={!thereIsTicket}
              />
              <Flex justifyItems={'center'} gap={3} alignItems={'center'}>
                <Text textColor={color}>{ticketText}</Text>
              </Flex>
            </>
          )}
          <Text textColor={color}>WED 24 JUL 2024</Text>
          <Text textColor={color} fontSize={10} fontWeight={'bold'}>
            {match?.league}
          </Text>
          <Flex
            justifyItems={'center'}
            gap={3}
            alignItems={'center'}
            flexDirection={{ base: 'column', md: 'row' }}
          >
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
                src={match?.away_team_image}
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
          <Flex
            justifyContent={'center'}
            py={3}
            bg={'blue'}
            color={'white'}
            borderRadius={0}
            width={'100%'}
          >
            {match?.venue}
          </Flex>
        </Flex>
      </Card>
    </>
  );
};
