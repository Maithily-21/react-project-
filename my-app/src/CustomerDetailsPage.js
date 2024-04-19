// CustomerDetailsPage.js
import React from 'react';

function CustomerDetailsPage({ customerDetails , onSignOut}) {
  return (
    <div className="customer-details-container">
      <h1>Welcome to Nagpur Bank .... </h1>
      <hr></hr>
      <h2>Customer Details</h2>
      <div className="details">
        <div className="detail">
          <p><strong>Full Name:</strong>{customerDetails.fullName}</p>
         
        </div>
        <div className="detail">
          <p><strong>Email:</strong>{customerDetails.email}</p>
         
        </div>
        <div className="detail">
          <p><strong>Phone Number:</strong>{customerDetails.phoneNumber}</p>
         
        </div>
        <div className="detail">
          <p><strong>Age:</strong>{customerDetails.Age}</p>
         
        </div>
        <div className="detail">
          <p><strong>AadharNo:</strong>{customerDetails.AadharNo}</p>
         
        </div>
        <div className="detail">
          <p><strong>DateofBirth:</strong>{customerDetails.DOB}</p>
         
        </div>
        <div className="detail">
          <p><strong>Account Type:</strong>{customerDetails.accountType}</p>
         
        </div>
        <div className="detail">
          <p><strong>Initial Deposit:</strong>Rs{customerDetails.initialDeposit}</p>
         
        </div>
        <div>
        <button onClick={onSignOut}>Sign Out</button>
        </div>
      </div>
    </div>
  );
}

export default CustomerDetailsPage;
