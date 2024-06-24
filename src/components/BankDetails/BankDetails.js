import React, { useState } from 'react';

const BankDetails = () => {
  const [bankDetails, setBankDetails] = useState({
    bankName: '',
    accountNumber: '',
    branchCode: '',
    nameOnAccount: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBankDetails({ ...bankDetails, [name]: value });
  };

  const handleAdd = async () => {
    // Send bank details to the API
    try {
      const response = await fetch('http://localhost:3001/api/bankinfo/createbankinfo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(bankDetails),
      });

      if (response.ok) {
        // Handle successful response
        setBankDetails({
          bankName: '',
          accountNumber: '',
          branchCode: '',
          nameOnAccount: '',
        });
        alert('Bank details added successfully');
      } else {
        // Handle error response
        alert('Failed to add bank details');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while adding bank details');
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4 ">Add Bank Details</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="bankName" className="form-label ">Bank Name</label>
          <input
            type="text"
            className="form-control border-warning"
            id="bankName"
            name="bankName"
            value={bankDetails.bankName}
            onChange={handleChange}
            placeholder="Bank Name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="accountNumber" className="form-label ">Account Number</label>
          <input
            type="text"
            className="form-control border-warning"
            id="accountNumber"
            name="accountNumber"
            value={bankDetails.accountNumber}
            onChange={handleChange}
            placeholder="Account Number"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="branchCode" className="form-label ">Branch Code</label>
          <input
            type="text"
            className="form-control border-warning"
            id="branchCode"
            name="branchCode"
            value={bankDetails.branchCode}
            onChange={handleChange}
            placeholder="Branch Code"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="nameOnAccount" className="form-label ">Name on Account</label>
          <input
            type="text"
            className="form-control border-warning"
            id="nameOnAccount"
            name="nameOnAccount"
            value={bankDetails.nameOnAccount}
            onChange={handleChange}
            placeholder="Name on Account"
          />
        </div>
        <button type="button" className="btn btn-warning" onClick={handleAdd}>Add Bank Details</button>
      </form>
    </div>
  );
};

export default BankDetails;
