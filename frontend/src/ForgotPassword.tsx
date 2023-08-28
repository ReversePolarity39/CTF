import React from 'react';
import { Flex, Box, Text, Input, Button } from '@chakra-ui/react';
import { FaEnvelope } from 'react-icons/fa';

const ForgotPassword = () => {
  return (
    <Flex align="center" justify="center" height="100vh">
      <Box p={8} borderWidth={1} borderRadius="md" boxShadow="md">
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Forgot Your Password?
        </Text>
        <Text mb={4}>
          Enter your registered email below and we'll send you instructions on how to reset your password.
        </Text>
        <Input
          placeholder="Enter your email"
          size="lg"
          mb={4}
          leftIcon={<FaEnvelope />}
        />
        <Button
          colorScheme="orange"
          size="lg"
          width="100%"
          mb={4}
        >
          Send Reset Instructions
        </Button>
        <Text fontSize="sm" textAlign="center" color="gray.500">
          Remembered your password? <a href="/employee-login">Sign in</a>
        </Text>
      </Box>
    </Flex>
  );
};

export default ForgotPassword;
