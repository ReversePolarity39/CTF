import React from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage.tsx';
import EmployeeLogin from './EmployeeLoginPage.tsx';
import Register from './Register.tsx';
import ForgotPassword from './ForgotPassword.tsx';
import Conditions from './Conditions.tsx';
import PrivacyNotice from './Privacy.tsx';
import TermsOfUse from './Terms.tsx';

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <CSSReset />
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/employee-login" element={<EmployeeLogin />} />
          <Route path="/create-account" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/conditions" element={<Conditions />} />\
          <Route path="/privacy" element={<PrivacyNotice />} />
          <Route path="/terms" element={<TermsOfUse />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;
