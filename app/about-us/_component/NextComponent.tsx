/* eslint-disable react/no-unescaped-entities */
'use client';

import { Banner } from '@/components/ui/Banner';
import { Box, Grid, GridItem, Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';

type Props = {};

export const NextCOmponent = ({}: Props): JSX.Element => {
  return (
    <Grid templateColumns={{ base: '1fr', md: '1fr 1fr 1fr' }} mx={'auto'}>
      <Left />
      <Right />
    </Grid>
  );
};

const Right = () => {
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
      <Heading
        className="pl-6"
        size={{ base: 'xl', md: '2xl' }}
        mt={{ base: 10, md: 0 }}
        mb={5}
      >
        Our vision
      </Heading>
      <blockquote className="mt-6 border-l-2 px-6 italic ">
        &ldquo;At Ijele Sports Club, our vision is clear: - To become the
        largest sports club in Africa through membership growth.** - To
        seamlessly integrate Sports, Culture, and Entertainment. - To be the
        pinnacle of sporting excellence on the continent. The name "Ijele" pays
        tribute to the majestic African masquerade, embodying our ambition and
        pride in our cultural heritage. Join us as we pave the way for a new era
        in African sports, blending tradition with innovation to inspire and
        achieve greatness.&ldquo;
      </blockquote>
    </GridItem>
  );
};

const Left = () => {
  return (
    <GridItem colSpan={{ base: 1, md: 2 }}>
      <Banner right={false} img="/frame-man.jpg" />
    </GridItem>
  );
};
