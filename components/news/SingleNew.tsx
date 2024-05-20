'use client';
import {
  Avatar,
  Box,
  Center,
  Flex,
  Image,
  SimpleGrid,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { MyText } from '../ui/MyText';
import { DarkContainer } from '../ui/DarkContainer';
import { NewCards } from '../home/News';
import { Link } from 'next-view-transitions';
import { colors } from '@/constants';

interface Props {}

export const SingleNew = ({}: Props) => {
  return (
    <Box pb={50}>
      <Box mb={{ base: 50, md: 100 }} mt={{ base: 120, md: 0 }}>
        <Image
          alt="team"
          src="/wide.png"
          width="100%"
          height={{ base: '200px', md: 'auto' }}
          objectFit={'cover'}
        />
      </Box>
      <NewsDetails />
      <RelatedNews />
    </Box>
  );
};

const NewsDetails = () => {
  return (
    <Center
      flexDir={'column'}
      width={{ base: '90%', md: '50%' }}
      mx={'auto'}
      mb={50}
    >
      <Flex
        justifyContent={'space-between'}
        alignItems={'center'}
        width={'100%'}
      >
        <Flex gap={{ base: 2, md: 5 }} alignItems={'center'}>
          <Avatar
            name="Segun Adebayo"
            src="/logo.png"
            size={{ base: 'sm', md: 'md' }}
          />
          <MyText
            text="Vicent Company"
            fontWeight={'400'}
            fontSize={{ base: 12, md: 15 }}
          />
        </Flex>
        <MyText
          text="May 15, 2022"
          fontWeight={'bold'}
          fontSize={{ base: 12, md: 15 }}
        />
      </Flex>
      <SimpleGrid mt={10} gap={5}>
        <MyText
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia
        deserunt mollit anim id est laborum."
          fontSize={14}
          fontFamily={'var(--font-rubik)'}
        />
        <MyText
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia
        deserunt mollit anim id est laborum."
          fontSize={14}
          fontFamily={'var(--font-rubik)'}
        />
        <MyText
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia
        deserunt mollit anim id est laborum."
          fontSize={14}
          fontFamily={'var(--font-rubik)'}
        />
      </SimpleGrid>
    </Center>
  );
};

const array = [1, 2, 3, 4];

const RelatedNews = () => {
  const color = useColorModeValue('#fff', '#091223');
  return (
    <DarkContainer height={'auto'}>
      <Box width={{ base: '90%', md: '70%' }} mx={'auto'}>
        <Flex my={10} justifyContent={'space-between'} alignItems={'center'}>
          <Text
            textColor={color}
            fontSize={{ base: 15, md: 20 }}
            fontFamily={'var(--font-rubik)'}
          >
            Related News
          </Text>
          <Link href="/news">
            <Text
              textColor={colors.textOrange}
              fontSize={{ base: 15, md: 20 }}
              fontFamily={'var(--font-rubik)'}
            >
              All News
            </Text>
          </Link>
        </Flex>
        <SimpleGrid columns={{ base: 1, md: 4 }} gap={5}>
          {array.map((_, index) => (
            <NewCards index={index} key={index} />
          ))}
        </SimpleGrid>
      </Box>
    </DarkContainer>
  );
};
