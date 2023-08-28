import React from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';

const PrivacyNotice = () => {
  return (
    <Flex align="center" justify="center" height="100vh">
      <Box p={8} borderWidth={1} borderRadius="md" boxShadow="md">
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Privacy Notice
        </Text>
        <Text>
          At our whimsical website, your privacy is of paramount importance, but we also believe in fun and games.
          Here's our playful take on privacy:
        </Text>
        <Text mt={4}>
          1. We may collect imaginary data like the number of rainbows you've seen today and the level of stardust in
          your dreams.
        </Text>
        <Text mt={4}>
          2. We use cookies, but they're purely magical and sugar-free. They help us understand your preferences, such as
          whether you prefer unicorns or dragons.
        </Text>
        <Text mt={4}>
          3. We promise not to share your non-existent personal information with anyone, except maybe with our resident
          AI chef to create personalized virtual cupcakes.
        </Text>
        <Text mt={4}>
          4. If you ever receive an email from us, it's likely the digital pigeons carrying secret messages of laughter
          and joy. Please do not reply with actual pigeon coos.
        </Text>
        <Text mt={4}>
          5. While we strive to keep your imaginary data safe, please note that our virtual security guards are really
          just emojis and rainbows.
        </Text>
        <Text mt={4}>
          6. By continuing to use our website, you agree to this whimsical privacy notice, which is designed to bring a
          smile to your face and not to be taken seriously.
        </Text>
      </Box>
    </Flex>
  );
};

export default PrivacyNotice;
