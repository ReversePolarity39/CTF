import React from 'react';
import { Flex, Box, Text, Input, Checkbox, Button } from '@chakra-ui/react';
import { FaEnvelope, FaLock } from 'react-icons/fa'; // Assuming you have imported the necessary icons

const EmployeeLogin = () => {
  return (
    <Flex align="center" justify="center" height="100vh">
      <Box p={8} borderWidth={1} borderRadius="md" shadow="lg">
        <Text fontSize="xl" mb={4}>
          Amazon Employee Login
        </Text>
        <Input
          placeholder="Email"
          size="lg"
          mb={4}
          leftIcon={<FaEnvelope />}
        />
        <Input
          type="password"
          placeholder="Password"
          size="lg"
          mb={4}
          leftIcon={<FaLock />}
        />
        <Checkbox mb={4}>Remember Me</Checkbox>
        <Button
          colorScheme="orange"
          size="lg"
          width="100%"
          mb={4}
        >
          Sign In
        </Button>
        <Text fontSize="sm" textAlign="center" color="gray.500">
          Forgot your password?
        </Text>
        <Text fontSize="sm" textAlign="center" color="gray.500">
          New to Amazon? <a href="/create-account">Create an account</a>
        </Text>
        <Text fontSize="sm" textAlign="center" color="gray.500">
          Conditions of Use | Privacy Notice
        </Text>
      </Box>
    </Flex>
  );
};

export default EmployeeLogin;
