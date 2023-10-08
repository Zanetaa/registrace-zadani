import React, { useState } from 'react';
import './style.css';

const Registration = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const handleClick = (e) => {
    e.preventDefault();
    console.log(user);
  };

  const handleEmail = (e) => {
    if (user.userName === '' && user.email.includes('@')) {
      const emailName = user.email.slice(0, user.email.indexOf('@'));
      setUser({ ...user, userName: emailName });
      setUser({ ...user, email: e.target.value });
    } else {
      setUser({ ...user, email: e.target.value });
    }
  };

  return (
    <div className="Registration">
      <h1>REGISTRATION</h1>
      <form onSubmit={handleClick}>
        <input
          type="email"
          placeholder="Email Address"
          value={user.email}
          onChange={handleEmail}
        />

        <input
          type="text"
          placeholder="User Name"
          value={user.username}
          onChange={(e) => {
            setUser({ ...user, username: e.target.value });
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={user.passwordConfirm}
          onChange={(e) => {
            setUser({ ...user, passwordConfirm: e.target.value });
          }}
        />

        <button type="submit">REGISTER</button>
      </form>
    </div>
  );
};

export default Registration;
