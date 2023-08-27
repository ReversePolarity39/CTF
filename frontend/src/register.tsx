import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Center,
} from '@chakra-ui/react';
import { useToast } from '@chakra-ui/toast';
import bcrypt from 'bcryptjs'; // Assuming you've installed bcryptjs

const RegisterPage = () => {
  const toast = useToast();
  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');
  const [isEmployeeIdInvalid, setIsEmployeeIdInvalid] = useState(false);
  const [error, setError] = useState('');

  const handleCreateAccount = async () => {
    try {
      if (!/^\d{12}$/.test(employeeId)) {
        setIsEmployeeIdInvalid(true);
        setError('Employee ID must be 12 digits long.');
        return;
      }

      setIsEmployeeIdInvalid(false);
      setError('');

      // Hash the password
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(password, salt);

      // Send a request to your backend
      const response = await fetch('http://localhost:3002/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ employeeId, hashedPassword }),
      });

      if (response.ok) {
        toast({
          title: 'Account Created',
          description: 'Your account has been successfully created.',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
      } else {
        throw new Error('Failed to create account');
      }
    } catch (err) {
      setError('Error creating account. Please try again.');
      toast({
        title: 'Error',
        description: 'Error creating account. Please try again.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      console.error(err);
    }
  };

  return (
    <Center h="100vh">
      <Box p={8} maxW="md" borderWidth={1} borderRadius="lg" boxShadow="lg">
        <FormControl isInvalid={isEmployeeIdInvalid}>
          <FormLabel>Employee ID</FormLabel>
          <Input
            type="text"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
            placeholder="Enter 12-digit Employee ID"
          />
          <FormErrorMessage>{error}</FormErrorMessage>
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </FormControl>
        <Button mt={4} colorScheme="teal" onClick={handleCreateAccount}>
          Create Account
        </Button>
      </Box>
    </Center>
  );
};

export default RegisterPage;
