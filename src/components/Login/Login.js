
import React, { useState } from 'react';
import Button from '../Button/Button';
import { Link,useNavigate } from 'react-router-dom';
import style from '../Button/Button.module.css'


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit =  (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    
const loginfct = async ()=>{
    const response = await fetch('http://localhost:3001/api/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    console.log(email)
    console.log(password)
    const data = await response.json();

  if (response.ok) {
      
        const token = data.token;
        localStorage.setItem('token', token);
        navigate('/');
      
    } else {
      // Handle error
      setError(data.message || 'Login failed');
    }

}
    

loginfct()
    

    setLoading(false);
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header text-center">
              <h3>Login</h3>
            </div>
            <div className="card-body">
              {error && <div className="alert alert-danger">{error}</div>}
              <form onSubmit={handleSubmit}>
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
                    
                  {loading ? 'Logging in...' : 'Login'}
                </button>
                <button
                  type="submit"
                  className={style.buttonStyle}
                  disabled={loading}
                >
                    <Link className='text-white' to='/register'>Register
                    </Link>
                </button>
                    
                  
                </div>
                
              </form>
            </div>
            <div className="card-footer text-center ">
              <small className="text-muted">Forgot your password?</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

    