import React, { useState } from 'react';

function AccountOpeningPage({ userData, onAccountOpen }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [Age, setAge] = useState('');
  const [AadharNo, setAadharNo] = useState('');
  const [DOB, setDOB] = useState('');
  const [accountType, setAccountType] = useState('');
  const [initialDeposit, setInitialDeposit] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your account opening logic here

    // Assuming account opening is successful, set submitted state to true
    setSubmitted(true);

    // Pass account opening data to parent component
    onAccountOpen({
      fullName,
      email,
      phoneNumber,
      Age,
      AadharNo,
      DOB,
      accountType,
      initialDeposit
    });
  };

  return (

    <div className="account-opening-container">
      <h2>Account Opening Form</h2>
      <hr></hr>
      <h3>Dear Customer please fill the details to open a bank account ....</h3>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="tel" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
          <input type="number" placeholder="Age" value={Age} onChange={(e) => setAge(e.target.value)} required />
          <input type="number" placeholder="AadharNo" value={AadharNo} onChange={(e) => setAadharNo(e.target.value)} required />
          <input type="date" placeholder="DateofBirth" value={DOB} onChange={(e) => setDOB(e.target.value)} required />
          <select value={accountType} onChange={(e) => setAccountType(e.target.value)} required>
            <option value="">Select Account Type</option>
            <option value="Savings">Savings</option>
            <option value="Checking">Checking</option>
            <option value="Investment">Investment</option>
          </select>
          <input type="number" placeholder="Initial Deposit" value={initialDeposit} onChange={(e) => setInitialDeposit(e.target.value)} required />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div className="submitted-info">
          <p><strong>Full Name:</strong> {fullName}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Phone Number:</strong> {phoneNumber}</p>
          <p><strong>Age:</strong>{Age}</p>
          <p><strong>AadharNo:</strong>{AadharNo}</p>
          <p><strong>DateofBirth:</strong>{DOB}</p>
          <p><strong>Account Type:</strong> {accountType}</p>
          <p><strong>Initial Deposit:</strong> Rs {initialDeposit}</p>
        </div>
      )}
    </div>
  );
}

export default AccountOpeningPage;
