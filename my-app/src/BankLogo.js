import React from 'react';
import bankLogo from './BankLogo.png'; // Import the logo image

const BankLogo = () => {
  return (
    <div className="logo-container">
      {/* Use the imported image */}
      <img src={bankLogo} alt="Bank Logo" />
    </div>
  );
}

export default BankLogo;