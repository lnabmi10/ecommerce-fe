import React from 'react';
import { useNavigate } from 'react-router-dom';

const CreateShop = () => {
  const navigate = useNavigate();

  const handleCreateShop = async (e) => {
    e.preventDefault();
    const { storeName, storeDescription, storeBrand, storeCategory } = e.target.elements;

    const token = localStorage.getItem('token');
    const response = await fetch('http://localhost:3001/api/shop/createshop', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        shopName: storeName.value,
        description: storeDescription.value,
        brand: storeBrand.value,
        category: storeCategory.value,
      }),
    });

    if (response.ok) {
      alert('Store created successfully');
      navigate('/MyStore');
    } else {
      alert('Failed to create store');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="card p-4" style={{ maxWidth: '500px', width: '100%' }}>
        <div className="card-body">
          <h2 className="card-title text-center">Create Your Shop</h2>
          <form onSubmit={handleCreateShop}>
            <div className="mb-3">
              <label htmlFor="storeName" className="form-label">Store Name</label>
              <input type="text" className="form-control" id="storeName" name="storeName" required />
            </div>
            <div className="mb-3">
              <label htmlFor="storeDescription" className="form-label">Store Description</label>
              <textarea className="form-control" id="storeDescription" name="storeDescription" required></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="storeBrand" className="form-label">Store Brand</label>
              <input type="text" className="form-control" id="storeBrand" name="storeBrand" />
            </div>
            <div className="mb-3">
              <label htmlFor="storeCategory" className="form-label">Store Category</label>
              <input type="text" className="form-control" id="storeCategory" name="storeCategory" />
            </div>
            <button type="submit" className="btn btn-primary w-100">Create Store</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateShop;
