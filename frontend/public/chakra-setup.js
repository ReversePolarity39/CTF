// public/chakra-setup.js
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    fonts: {
        heading: "Verdana, Geneva, sans-serif",
        body: "Verdana, Geneva, sans-serif",
    },
});

export const App = ({ children }) => (
    <ChakraProvider theme={theme}>
        {children}
    </ChakraProvider>
);