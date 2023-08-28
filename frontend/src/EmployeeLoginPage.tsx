import React, { useState } from 'react';
import { Flex, Box, Text, Input, Checkbox, Button, useToast } from '@chakra-ui/react';
import { FaUser, FaLock } from 'react-icons/fa';

const EmployeeLogin = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();

  async function handleLogin() {
    try {
      const response = await fetch('/api/check-credentials', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ employeeNumber: employeeId, password }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.isValidCredentials) {
          toast({
            title: 'Login Successful',
            description: 'Welcome back!',
            status: 'success',
            duration: 3000,
            isClosable: true,
          });

          // Redirect the user to the dashboard after successful login
          window.location.href = '/dashboard'; // Adjust the path as needed
        } else {
          // Handle failed login
          toast({
            title: 'Login Failed',
            description: 'Invalid employee ID or password.',
            status: 'error',
            duration: 3000,
            isClosable: true,
          });
        }
      } else {
        console.error('Error checking credentials:', response.status);
      }
    } catch (error) {
      console.error('Error logging in:', error);
      toast({
        title: 'Login Failed',
        description: 'An error occurred while trying to log in.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  }

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box p={8} borderWidth={1} borderRadius="md" boxShadow="md">
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Amazon Employee Login
        </Text>
        <Input
          placeholder="Employee ID"
          size="lg"
          mb={4}
          leftIcon={<FaUser />}
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          size="lg"
          mb={4}
          leftIcon={<FaLock />}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
          Forgot your password? <a href="/forgot-password">Reset Password</a>
        </Text>
        <Text fontSize="sm" textAlign="center" color="gray.500">
          New to Amazon? <a href="/create-account">Create an account</a>
        </Text>
        <Text fontSize="sm" textAlign="center" color="gray.500">
          <a href="/conditions">Conditions of Use </a> | <a href="/privacy"> Privacy Notice </a>
        </Text>
      </Box>
    </Flex>
  );
};

export default EmployeeLogin;
