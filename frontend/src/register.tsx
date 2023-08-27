/*import React, { useState } from 'react';
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
      // ... Your fetch logic here ...

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
      // ... Toast and error handling logic ...
      console.error(err);
    }
  };

  return (
    <Center h="100vh">
      {/* ... JSX for your form ... */}
    </Center>
  );
};

export default RegisterPage;
*/