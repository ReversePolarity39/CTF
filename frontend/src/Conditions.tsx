import React from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';

const Conditions = () => {
  return (
    <Flex align="center" justify="center" height="100vh">
      <Box p={8} borderWidth={1} borderRadius="md" boxShadow="md">
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Conditions of Use
        </Text>
        <Text>
          Welcome to our CTF! By using our site, you agree to the following nonsensical conditions:
        </Text>
        <Text mt={4}>
          1. You must wear a green hat every time you browse our site. Failure to comply may result in invisible
          penalties.
        </Text>
        <Text mt={4}>
          2. You're encouraged to pet the virtual unicorns that appear on your screen. They thrive on virtual love and
          happiness.
        </Text>
        <Text mt={4}>
          3. Please do not attempt to communicate with the pixelated squirrels in the corners of the website. They only
          respond to Morse code.
        </Text>
        <Text mt={4}>
          4. While browsing, remember to recite Shakespearean soliloquies out loud at random intervals. This keeps the
          AI entertained.
        </Text>
        <Text mt={4}>
          5. In case of technical difficulties, perform a rain dance and chant "Ctrl + Alt + Delete" three times while
          spinning clockwise.
        </Text>
        <Text mt={4}>
          6. By clicking "Accept," you acknowledge that these conditions are a playful fabrication and have absolutely
          no legal basis. We appreciate your humor!
        </Text>
      </Box>
    </Flex>
  );
};

export default Conditions;
