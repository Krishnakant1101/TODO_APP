import React from 'react';
import './LoginPage'

const LoginPage = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    const userData={
      userName:event.target[0].value,
      password:event.target[1].value
    }
   const p= fetch("http://localhost:5000/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData)
      }
    )
    
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="card shadow-lg" style={{ width: '400px' }}>
        <div className="card-body">
          <h3 className="text-center mb-4">Login</h3>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
          <div className="text-center mt-3">
            <a href="#!" className="text-decoration-none">Forgot Password?</a>
            <br />
            <a href="#!" className="text-decoration-none">Create an Account</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
