'use client';
import { colors } from '@/constants';
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

interface Props {}
const headers = ['Date', 'Event', 'Time/Result', 'League', 'Season', 'Venue'];

const roles = [
  'Sep 5, 2023',
  'Ijele SC vs Papilo',
  '8:00pm',
  'Cup',
  '19/20',
  'Owerri',
];

export const Events = ({}: Props) => {
  const bg = useColorModeValue(colors.dark, 'white');
  const { isOpen, onClose, onOpen } = useDisclosure();
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
          bg={isOpen ? colors.orange : colors.textOrange}
          color="white"
          onClick={onOpen}
        >
          {'Fixtures'}
        </Button>
        <Button
          bg={!isOpen ? colors.orange : colors.textOrange}
          color="white"
          mb={5}
          onClick={onClose}
        >
          {'Results'}
        </Button>
      </Flex>
      <SlideFade in={isOpen}>
        <FixtureCard scores={{ home: 0, away: 0 }} />
      </SlideFade>
      <SlideFade in={!isOpen}>
        <FixtureCard scores={{ home: 2, away: 1 }} />
      </SlideFade>
    </SimpleGrid>
  );
};

const FixtureCard = ({
  scores,
}: {
  scores: { home: number; away: number };
}) => {
  const color = useColorModeValue('#181818', '#fff');
  const bg = useColorModeValue('#fff', '#181818');
  return (
    <Card
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
          FRIENDLY
        </Text>
        <Flex justifyItems={'center'} gap={3} alignItems={'center'}>
          <Flex alignItems={'center'} gap={3}>
            <Text textColor={color} fontWeight={'bold'}>
              Ijele SC
            </Text>
            <Image
              src="https://clublogos.stadion.io/assets/ClubLogos/Football/1292.png"
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
            {scores.home + ' : ' + scores.away}
          </Flex>
          <Flex alignItems={'center'} gap={3}>
            <Image
              src="https://clublogos.stadion.io/assets/ClubLogos/Football/Scottish/61.svg"
              alt="Green double couch with wooden legs"
              width={100}
              height={100}
              objectFit={'cover'}
            />{' '}
            <Text textColor={color} fontWeight={'bold'}>
              Papilo FC
            </Text>
          </Flex>
        </Flex>
        <Button bg={'blue'} color={'white'} borderRadius={0} width={'100%'}>
          Owerri
        </Button>
      </Flex>
    </Card>
  );
};
