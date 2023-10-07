import React, { useState } from 'react';
import './style.css';

const Registration = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });
};

export default Registration;
