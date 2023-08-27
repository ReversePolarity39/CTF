import React from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <Box textAlign="center" py={20}>
      <Heading as="h1" size="3xl" fontWeight="bold" mb={6}>
        Amazon Customer Service
      </Heading>
      <Text fontSize="xl" mb={8}>
        We're here to assist you with your orders and returns.
      </Text>
      <Button
        as={Link}
        to="/customer-support"
        colorScheme="amazonOrange" // Define a custom color scheme
        size="lg"
        px={8}
      >
        Get Support
      </Button>
    </Box>
  );
};

export default Homepage;
