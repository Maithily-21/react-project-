// App.js
import React, { useState } from 'react';
import LoginPage from './LoginPage';
import AccountOpeningPage from './AccountOpeningPage';
import CustomerDetailsPage from './CustomerDetailsPage';
import './App.css';
import BankLogo from './BankLogo';
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [customerData, setCustomerData] = useState(null);
  
  const handleLogin = (data) => {
    setLoggedIn(true);
    setUserData(data);
  };

  
  const handleAccountOpen = (data) => {
    setCustomerData(data);
  };
  const handleSignOut = () => {
    // Implement sign-out logic here
    console.log("Signing out...");
  };

  
  return (
    <div className="App">
      {!loggedIn && <BankLogo />}
      {!loggedIn && <LoginPage onLogin={handleLogin} />}
     
      {loggedIn && !customerData && <AccountOpeningPage userData={userData} onAccountOpen={handleAccountOpen} />}
      {loggedIn && customerData && <CustomerDetailsPage customerDetails={customerData} onSignOut={handleSignOut}  />}
      
    </div>
  );
}

export default App;
