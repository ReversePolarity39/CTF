import React from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/HomePage';
import theme from './theme'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Router>
        <Routes>
          <Route path="/" exact component={Homepage} />
          {/* Add more routes here */}
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
