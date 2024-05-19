'use client';
import { colors } from '@/constants';
import { Box, Button, ResponsiveValue, Text } from '@chakra-ui/react';
import { Pause, Play } from 'lucide-react';
import React, { LegacyRef, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
type Props = {
  height:
    | ResponsiveValue<
        | number
        | (string & {})
        | 'inherit'
        | '-moz-initial'
        | 'initial'
        | 'revert'
        | 'revert-layer'
        | 'unset'
        | 'auto'
        | 'fit-content'
        | 'max-content'
        | 'min-content'
        | '-moz-max-content'
        | '-moz-min-content'
        | '-webkit-fit-content'
      >
    | undefined;

  fontSize?: number;
};

export function VideoComponent({ height, fontSize }: Props) {
  const [playing, setPlaying] = useState(false);
  const size = height === 250 ? 45 : 50;
  const iconSize = height === 250 ? 20 : 25;
  const onTogglePlay = () => {
    setPlaying((prev) => !prev);
  };
  return (
    <Box
      flex={1}
      height={height}
      borderRadius={5}
      position={'relative'}
      overflow={'hidden'}
    >
      <ReactPlayer
        playing={playing}
        url="https://youtu.be/ZZgP1dPELrA"
        controls
        width={'100%'}
        height={'100%'}
      />
      <Box zIndex={2} position={'absolute'} bottom={'5%'} left={5}>
        <Button
          onClick={onTogglePlay}
          borderRadius={50}
          width={size}
          height={size}
          bg={colors.orange}
        >
          {playing ? (
            <Pause color="white" size={iconSize} />
          ) : (
            <Play color="white" size={iconSize} />
          )}
        </Button>
        <Text
          textColor={'white'}
          fontSize={fontSize}
          fontFamily={'var(--font-rubik)'}
          fontWeight={'bold'}
          mt={5}
          maxWidth={'80%'}
        >
          Nwobodo: we are here to compete with the very best
        </Text>
      </Box>
      <Box className="absolute inset-0 bg-black/40" />
    </Box>
  );
}
