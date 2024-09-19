// src/Login.tsx
import React, { useState } from 'react';
import './Login.css';
import Cookies from 'js-cookie';
import { Button, Input, FormControl, FormLabel, Box, Heading, Alert, AlertIcon, AlertTitle, CloseButton } from '@chakra-ui/react';

const Login: React.FC<{ error: any }> = ({ error }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const [alertMessage, setAlertMessage] = useState<string | null>(null);
    const [alertStatus, setAlertStatus] = useState<'success' | 'error'>('error');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        const userToken = 'Q0NTQ1RGe1VTM1JOMFRGMFVORCk=';
        const isAdminToken = email.toLowerCase() === 'admin@example.com';  // Simulated check

        Cookies.set('userToken', userToken);
        Cookies.set('isAdmin', isAdminToken ? 'true' : 'false');

        if (isAdminToken) {
            setAlertStatus('success');
            setAlertMessage('Welcome User CCSCTF{@DM1N@C3SS}');
            setIsAdmin(true);
        } else {
            setAlertStatus('error');
            setAlertMessage('User not Found');
            setIsAdmin(false);
        }
    };

    return (
        <div className="login-container">
            <Box
                p={8}
                maxWidth="400px"
                borderWidth={1}
                borderRadius={8}
                boxShadow="lg"
                bg="white"
                color="black"
                textAlign="center"
            >
                <Heading className="login-title" mb={6}>
                    NCL Workshop Login
                </Heading>

                {alertMessage && (
                    <Alert status={alertStatus} mb={4}>
                        <AlertIcon />
                        <AlertTitle mr={2}>{alertMessage}</AlertTitle>
                        <CloseButton position="absolute" right="8px" top="8px" onClick={() => setAlertMessage(null)} />
                    </Alert>
                )}

                {error && <p className="error">{error}</p>}

                <form onSubmit={handleLogin}>
                    <FormControl id="email" mb={4}>
                        <FormLabel>Email address</FormLabel>
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </FormControl>

                    <FormControl id="password" mb={6}>
                        <FormLabel>Password</FormLabel>
                        <Input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </FormControl>

                    <Button colorScheme="blue" width="full" type="submit">
                        Login
                    </Button>
                </form>
            </Box>
        </div>
    );
};

export default Login;