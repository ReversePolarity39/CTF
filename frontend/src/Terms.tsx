import React from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';

const TermsOfUse = () => {
  const flag = "F1@9_H1dd3n_Fl@9"; // The hidden flag

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box p={8} borderWidth={1} borderRadius="md" boxShadow="md" overflowY="scroll" maxH="80vh">
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Terms of Use
        </Text>
        <Text>
          Welcome to our website! By continuing to use this site, you agree to the following terms of use:
        </Text>
        {/* ... A lengthy terms of use document */}
        <Text>
          You must not disclose, share, or distribute any confidential information related to this website. This includes
          passwords, access codes, and the flag: <span style={{ color: 'transparent' }}>{flag}</span>.
        </Text>
        <Text>
          By accepting these terms, you acknowledge that you have read and understood the content, including the hidden
          flag <span style={{ color: 'transparent' }}>{flag}</span> embedded within this text.
        </Text>
        <Text>
          999. These terms are legally binding and supersede any prior agreements. The hidden flag{' '}
          <span style={{ color: 'transparent' }}>{flag}</span> represents your acceptance of these terms.
        </Text>
        <Text>
          Enjoy using our website, and remember that the flag <span style={{ color: 'transparent' }}>{flag}</span> is your
          secret to unlocking this hidden treasure!
        </Text>
      </Box>
    </Flex>
  );
};

export default TermsOfUse;
