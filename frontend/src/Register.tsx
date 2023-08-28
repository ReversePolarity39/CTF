import React, { useState } from 'react';
import { Flex, Box, Text, Input, Checkbox, Button, useToast } from '@chakra-ui/react';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';

const Register = () => {
  const toast = useToast();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleRegister(event) {
    event.preventDefault(); // Prevent default form submission behavior

    if (!fullName || !email || !password) {
      toast({
        title: 'Registration Failed',
        description: 'Please fill in all fields.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, email, password }),
      });

      if (response.ok) {
        toast({
          title: 'Registration Successful',
          description: 'Your account has been created.',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          title: 'Registration Failed',
          description: 'An error occurred while creating your account.',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error('Error registering user:', error);
      toast({
        title: 'Registration Failed',
        description: 'An error occurred while creating your account.',
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
          Create Your Amazon Employee Account
        </Text>
        <form onSubmit={handleRegister}>
          <Input
            placeholder="Discord Username"
            size="lg"
            mb={4}
            leftIcon={<FaUser />}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <Input
            placeholder="Email"
            size="lg"
            mb={4}
            leftIcon={<FaEnvelope />}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          <Checkbox mb={4}>
            I agree to Amazon's <a href="/terms">Terms of Service</a>
          </Checkbox>
          <Button colorScheme="orange" size="lg" width="100%" mb={4} type="submit">
            Create Account
          </Button>
        </form>
        <Text fontSize="sm" textAlign="center" color="gray.500">
          Already have an account? <a href="/employee-login">Sign in</a>
        </Text>
        <Text fontSize="xs" textAlign="center" color="gray.500" mt={8}>
          By creating an account, you agree to Amazon's{' '}
          <a href="/conditions">Conditions of Use</a> and{' '}
          <a href="/privacy">Privacy Notice</a>.
        </Text>
      </Box>
    </Flex>
  );
};

export default Register;
