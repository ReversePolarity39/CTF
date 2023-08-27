import React from 'react';
import { Button, Flex, Heading, Text } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      height="100vh"
      bg="amazonBlue"
      color="white"
    >
      <Heading fontSize="4xl" mb={4}>
        Welcome to Amazon Customer Service
      </Heading>
      <Text fontSize="xl" mb={8}>
        We're here to help you with all your inquiries.
      </Text>
      <Button
        as="a"
        href="/employee-login" // Replace with the actual link to your employee login page
        target="_blank"
        rel="noopener noreferrer"
        bg="orange.500"
        _hover={{ bg: 'orange.400' }}
        color="white"
        fontWeight="bold"
        fontSize="lg"
        px={8}
        py={4}
        borderRadius="md"
        boxShadow="md"
      >
        Employee Login
      </Button>
    </Flex>
  );
};

export default HomePage;