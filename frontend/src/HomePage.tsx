import React from 'react';
import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import imageSrc from './amazon_logo.png'
const HomePage = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      height="100vh"
      bg="#232F3E" // Dark blue background color similar to Amazon's color scheme
      color="white"
      backgroundImage="url('amazon_background.jpg')" // Replace with the actual path to your background image
      backgroundSize="cover"
      backgroundPosition="center"
    >
      <img
        src={imageSrc}// Replace with the actual path to your Amazon logo image
        alt="Amazon Logo"
        width="150"
        height="auto"
      />
      <Heading fontSize="4xl" my={4} textAlign="center">
        Welcome to Amazon Employee Portal
      </Heading>
      <Text fontSize="xl" mb={8} textAlign="center">
        Your gateway to the world's most customer-centric company.
      </Text>
      <Button
        as="a"
        href="/employee-login" // Replace with the actual link to your employee login page
        target="_blank"
        rel="noopener noreferrer"
        bg="#FF9900" // Amazon orange color
        _hover={{ bg: '#FFA500' }}
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
