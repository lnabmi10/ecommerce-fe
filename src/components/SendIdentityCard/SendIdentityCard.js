import React, { useState } from 'react';
import CreateShop from '../CreateShop/CreateShop';

const SendIdentityCard = () => {
    const [file, setFile] = useState(null);
    const [uploaded, setUploaded] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const token = localStorage.getItem('token');
    const formData = new FormData();
    formData.append('images', file);

    try {
      const response = await fetch(`http://localhost:3001/api/seller/becomeseller`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      if (response.ok) {
        alert('Identity card uploaded successfully');
        // Navigate to CreateShop component after successful upload
      } else {
        alert('Failed to upload identity card');
        }
    setUploaded(true);
    } catch (error) {
      console.error('Error uploading identity card:', error);
      alert('An error occurred while uploading the identity card');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      {!uploaded ? (
        <div className="card p-4" style={{ maxWidth: '500px', width: '100%' }}>
          <div className="card-body text-center">
            <h2 className="card-title">Upload Your Identity Card</h2>
            <p className="card-text text-muted mb-4">To become a verified seller, please upload a clear image of your identity card.</p>
            <input className="form-control mb-3" type="file" onChange={handleFileChange} />
            <button className="btn btn-primary w-100" onClick={handleUpload}>Upload</button>
          </div>
        </div>
      ) : (
        <CreateShop />
      )}
    </div>
  );
};

export default SendIdentityCard;
