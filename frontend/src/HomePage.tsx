import React from 'react';
import { Button, Flex, Heading, Text, Box, Icon } from '@chakra-ui/react';
import { FaAmazon } from 'react-icons/fa'; // Import Amazon icon

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
      <Box mb={4}>
        <Icon as={FaAmazon} boxSize={12} color="amazonOrange" />
      </Box>
      <Heading fontSize="4xl" mb={4}>
        Amazon Internal Services
      </Heading>
      <Text fontSize="xl" mb={8}>
        Welcome, Amazon Employee! Access your tools and services below.
      </Text>
      <Button
        as="a"
        href="/employee-login" // Replace with the actual link to your employee login page
        target="_blank"
        rel="noopener noreferrer"
        bg="amazonOrange"
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
      <Text fontSize="sm" mt={8}>
        For support, please contact the IT department.
      </Text>
    </Flex>
  );
};

export default HomePage;
