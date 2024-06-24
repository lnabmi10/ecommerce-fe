import React, { useState, useEffect } from 'react';

const PersonalInfo = () => {
  const [userInfo, setUserInfo] = useState({ firstname: '', lastname: '', mobile: '', email: '' });

  useEffect(() => {
    // Fetch user info from the API
    const fetchUserInfo = async () => {
      const response = await fetch('http://localhost:3001/api/user/connecterdUser', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      const data = await response.json();
      setUserInfo(data);
    };

    fetchUserInfo();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSave = async () => {
    // Save updated user info
    await fetch('http://localhost:3001/api/user/update', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(userInfo),
    });
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4 ">Personal Information</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="firstname" className="form-label ">First Name</label>
          <input
            type="text"
            className="form-control border-warning"
            id="firstname"
            name="firstname"
            value={userInfo.firstname}
            onChange={handleChange}
            placeholder="First Name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastname" className="form-label ">Last Name</label>
          <input
            type="text"
            className="form-control border-warning "
            id="lastname"
            name="lastname"
            value={userInfo.lastname}
            onChange={handleChange}
            placeholder="Last Name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="mobile" className="form-label ">Mobile</label>
          <input
            type="text"
            className="form-control border-warning"
            id="mobile"
            name="mobile"
            value={userInfo.mobile}
            onChange={handleChange}
            placeholder="Mobile"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label ">Email</label>
          <input
            type="email"
            className="form-control border-warning"
            id="email"
            name="email"
            value={userInfo.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </div>
        <button type="button" className="btn btn-warning" onClick={handleSave}>Save</button>
      </form>
    </div>
  );
};

export default PersonalInfo;
