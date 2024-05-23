import { Box, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

type Props = {
  img: string;
  right?: boolean;
};

export const Banner = ({ img, right = true }: Props): JSX.Element => {
  const direction = right ? -50 : 50;
  return (
    <Box
      as={motion.div}
      initial={{ x: direction, opacity: 0 }}
      whileInView={{
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, type: 'spring', damping: 9, delay: 0.3 },
      }}
      viewport={{ once: true }}
      width={'100%'}
      height={{ base: 200, md: 400 }}
    >
      <Image
        alt="banner"
        width={'100%'}
        height={'100%'}
        objectFit={'fill'}
        src={img}
      />
    </Box>
  );
};
