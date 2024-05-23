'use client';

import { Banner } from '@/components/ui/Banner';
import { Box, Grid, GridItem, Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';

type Props = {};

export const AboutComponent = ({}: Props): JSX.Element => {
  return (
    <Grid
      templateColumns={{ base: '1fr', md: '1fr 1fr 1fr' }}
      mt={{ base: 100, md: 0 }}
      mx={'auto'}
    >
      <Left />
      <Right />
    </Grid>
  );
};

const Left = () => {
  return (
    <GridItem
      colSpan={1}
      pt={{ md: 10 }}
      as={motion.div}
      initial={{ x: -50, opacity: 0 }}
      whileInView={{
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, type: 'spring', damping: 9, delay: 0.3 },
      }}
      viewport={{ once: true }}
    >
      <Heading size={{ base: 'xl', md: '2xl' }} className="pl-6" mb={5}>
        Ijele SC
      </Heading>

      <blockquote className="mt-6 border-l-2 px-6 italic ">
        &ldquo;As we embark on this exciting journey together, we are thrilled
        to share with you the vision of our club: to become the largest sports
        club in Africa through the growth of our membership. Inspired by the
        fusion of Sports, Culture, and Entertainment, our club&apos;s name,
        &ldquo;Ijele Sports Club,&ldquo; pays homage to the majestic African
        masquerade, symbolizing our ambition to be the pinnacle of sporting
        excellence on the continent. Join us in celebrating this fusion and
        striving towards unparalleled success in African sports.&ldquo;
      </blockquote>
    </GridItem>
  );
};

const Right = () => {
  return (
    <GridItem colSpan={{ base: 1, md: 2 }}>
      <Banner img={'/frame.jpg'} />
    </GridItem>
  );
};
