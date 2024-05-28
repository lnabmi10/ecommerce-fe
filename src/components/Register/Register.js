import React, { useState } from 'react';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import style from '../Button/Button.module.css';

function Register() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const response = await fetch('http://localhost:3001/api/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstname, lastname, email, mobile, password }),
    });

    const data = await response.json();

    if (response.ok) {
      // Handle successful registration (e.g., redirect to login)
      console.log('Registration successful:', data);
    } else {
      // Handle error
      setError(data.message || 'Registration failed');
    }

    setLoading(false);
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header text-center">
              <h3>Register</h3>
            </div>
            <div className="card-body">
              {error && <div className="alert alert-danger">{error}</div>}
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-2">
                  <label htmlFor="firstname">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstname"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    placeholder="Enter first name"
                    required
                  />
                </div>
                <div className="form-group mb-2">
                  <label htmlFor="lastname">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastname"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    placeholder="Enter last name"
                    required
                  />
                </div>
                <div className="form-group mb-2">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                    required
                  />
                </div>
                <div className="form-group mb-2">
                  <label htmlFor="mobile">Mobile</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="mobile"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="Enter mobile number"
                    required
                  />
                </div>
                <div className="form-group mb-2">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                  />
                </div>
                <div className='d-flex justify-content-between'>
                  <button
                    type="submit"
                    className={style.buttonStyle}
                    disabled={loading}
                  >
                    {loading ? 'Registering...' : 'Register'}
                  </button>
                  <button
                    type="button"
                    className={style.buttonStyle}
                  >
                    <Link className='text-white' to='/login'>Login</Link>
                  </button>
                </div>
              </form>
            </div>
            <div className="card-footer text-center">
              <small className="text-muted">Already have an account?</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
