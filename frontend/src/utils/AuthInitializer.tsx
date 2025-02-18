// AuthInitializer.jsx
import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { authState } from '../store/atom/authrizationState';

const AuthInitializer = ({ children }:{children:React.ReactNode}) => {
  const setAuth = useSetRecoilState(authState);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        // I will need a axios req to backend 
        // after it get verified then I will set auth state to true else false
        // according to the state change I will set the data
        
      } catch (error) {
        console.error('Token decoding error', error);
        localStorage.removeItem('token');
      }
    }
  }, [setAuth]);

  return children;
};

export default AuthInitializer;
