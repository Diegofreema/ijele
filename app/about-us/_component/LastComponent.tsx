/* eslint-disable react/no-unescaped-entities */
'use client';

import { Banner } from '@/components/ui/Banner';
import { Box, Grid, GridItem, Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';

type Props = {};

export const LastComponent = ({}: Props): JSX.Element => {
  return (
    <Grid templateColumns={{ base: '1fr', md: '1fr 1fr 1fr' }} mx={'auto'}>
      <Left />
      <Right />
    </Grid>
  );
};

const Left = () => {
  return (
    <GridItem
      colSpan={1}
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
        size={{ base: 'md', md: 'lg' }}
        mt={{ base: 10, md: 0 }}
        className="pl-6"
        mb={5}
      >
        Our Unique Approach
      </Heading>
      <blockquote className="mt-6 border-l-2 px-6 italic ">
        "At Ijele Sports Club, we are committed to a unique and enriching
        experience by seamlessly integrating sports, culture, and entertainment.
        Our approach includes: - Cultural Celebrations: Embracing and showcasing
        the rich cultural heritage of the South Eastern states through events
        and ceremonies. - Sporting Excellence: Developing top-tier teams and
        nurturing talent across multiple sports disciplines. - Entertainment
        Events: Hosting concerts, festivals, and entertainment shows to bring
        our community together. Our name, "Ijele," is inspired by the majestic
        African masquerade, symbolizing our commitment to blending tradition
        with modernity, creating a vibrant and inclusive environment for all
        members."
      </blockquote>
    </GridItem>
  );
};

const Right = () => {
  return (
    <GridItem colSpan={{ base: 1, md: 2 }}>
      <Banner right={true} img="/baller.jpg" />
    </GridItem>
  );
};
