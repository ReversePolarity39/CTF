import React from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage.tsx';
import EmployeeLogin from './EmployeeLoginPage.tsx';
import RegisterPage from './register.tsx';

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <CSSReset />
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/employee-login" element={<EmployeeLogin />} />
          <Route path="/create-account" element={<RegisterPage/>} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;
