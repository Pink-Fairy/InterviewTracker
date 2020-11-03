import React, { useState } from 'react';
import regeneratorRuntime from 'regenerator-runtime';
import axios from 'axios';

const Login = ({ setIsLogin }) => {
  //setting up useStates for creating new user
  //setting up for errors are optional and can be deleted
  const [user, setUser] = useState({ name: '', email: '', password: '' });
  const [err, setErr] = useState('');

  //tracking key/value pairs by accessing value (check out the function return with the elements you'll see "value")
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setErr('');
  };

  const registerSubmit = async (e) => {
    e.preventDefault();
    try {
      //post request for creating a new user
      const res = await axios.post('/users/register', {
        username: user.name,
        email: user.email,
        password: user.password,
      });
      setUser({ name: '', email: '', password: '' });
      setErr(res.data.msg);
    } catch (err) {
      err.response.data.msg && setErr(err.response.data.msg);
      console.log('errrrrorrrr');
    }
  };

  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      //post request for login
      const res = await axios.post('/users/login', {
        email: user.email,
        password: user.password,
      });
      setUser({ name: '', email: '', password: '' });
      //checking if token exists in localStorage
      localStorage.setItem('tokenStore', res.data.token);
      setIsLogin(true);
    } catch (err) {
      err.response.data.msg && setErr(err.response.data.msg);
      console.log('errorr');
    }
  };
  //styling to make login/signup pages visible
  const [onLogin, setOnLogin] = useState(false);
  const style = {
    visibility: onLogin ? 'visible' : 'hidden',
    opacity: onLogin ? 1 : 0,
  };

    return (
    <div className="container">
      <div className="login create-note">
        <h2>LOGIN</h2>
        <form onSubmit={loginSubmit}>
          <input
            type="email"
            name="email"
            id="login-email"
            placeholder="Email"
            required
            value={user.email}
            onChange={onChangeInput}
          />

          <input
            type="password"
            name="password"
            id="login-password"
            placeholder="Password"
            required
            value={user.password}
            autoComplete="true"
            onChange={onChangeInput}
          />

          <button type="submit">Login</button>
         
          <p>
            Don't Have an Account?
            <span onClick={() => setOnLogin(true)}> Sign Up</span>
          </p>
          <h3>{err}</h3>
        </form>
      </div>
      <div className="register create-note" style={style}>
        <h2>Sign up</h2>
        <form onSubmit={registerSubmit}>
          <input
            type="text"
            name="name"
            id="register-name"
            placeholder="User Name"
            required
            value={user.name}
            onChange={onChangeInput}
          />

          <input
            type="email"
            name="email"
            id="register-email"
            placeholder="Email"
            required
            value={user.email}
            onChange={onChangeInput}
          />

          <input
            type="password"
            name="password"
            id="register-password"
            placeholder="Password"
            required
            value={user.password}
            autoComplete="true"
            onChange={onChangeInput}
          />

          <button type="submit">Sign Up</button>
          <p>
            You have an account?
            <span onClick={() => setOnLogin(false)}> Login</span>
          </p>
          <h3>{err}</h3>
        </form>
      </div>
    </div>
  );
};


export default Login;
