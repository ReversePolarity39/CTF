// src/App.tsx
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Login from './Login.tsx';

const App: React.FC = () => {
    const error = null;

    return (
        <ChakraProvider>
            <Login error={error} />
        </ChakraProvider>
    );
};

export default App;