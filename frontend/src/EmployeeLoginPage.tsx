import React, { useState } from 'react';
import { Flex, Box, Text, Input, Checkbox, Button } from '@chakra-ui/react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const EmployeeLogin = () => {
  const [employeeNumber, setEmployeeNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Send a request to your backend
      const response = await fetch('http://localhost:3002/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ employeeNumber, password }),
      });

      if (response.ok) {
        const data = await response.json();
        // Handle successful login, like setting JWT token, redirecting, etc.
      } else {
        // Handle unsuccessful login
        throw new Error('Failed to login');
      }
    } catch (err) {
      console.error(err);
      // Show an error message
    }
  };

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box p={8} borderWidth={1} borderRadius="md" shadow="lg">
        <Text fontSize="xl" mb={4}>
          Amazon Employee Login
        </Text>
        <Input
          placeholder="Employee Number"
          size="lg"
          mb={4}
          leftIcon={<FaEnvelope />}
          value={employeeNumber}
          onChange={(e) => setEmployeeNumber(e.target.value)}
          aria-label="Employee Number"
        />
        <Input
          type="password"
          placeholder="Password"
          size="lg"
          mb={4}
          leftIcon={<FaLock />}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          aria-label="Password"
        />
        <Checkbox mb={4}>Remember Me</Checkbox>
        <Button
          colorScheme="orange"
          size="lg"
          width="100%"
          mb={4}
          onClick={handleLogin}
        >
          Sign In
        </Button>
        <Text fontSize="sm" textAlign="center" color="gray.500">
          Forgot your password?
        </Text>
        <Text fontSize="sm" textAlign="center" color="gray.500">
          New to Amazon? <Link to="/create-account">Create an account</Link>
        </Text>
        <Text fontSize="sm" textAlign="center" color="gray.500">
          Conditions of Use | Privacy Notice
        </Text>
      </Box>
    </Flex>
  );
};

export default EmployeeLogin;
