import { message } from 'antd';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { AuthContext } from '../hooks/useAuth';
import request from '../services/request'; // Corrected 'reauest' to 'request'
import { TOKEN, USER } from '../utils/constants';
import Cookies from 'js-cookie';

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(
      JSON.parse(localStorage.getItem(USER)) || null
   );
   const [loading, setLoading] = useState(false);

   const login = async (values, navigate) => {
      try {
         setLoading(true);
         const {
            data: { token },
         } = await request.post('auth/login', values);

         Cookies.set(TOKEN, token);

         request.defaults.headers.common.Authorization = `Bearer ${token}`;

         const { data: user } = await request.get('auth/me');

         localStorage.setItem(USER, JSON.stringify(user));

         setUser(user);

         const { role } = user;

         message.success('You have successfully logged in');

         if (role === 'admin') {
            navigate('/dashboard');
         } else if (role === 'user') {
            navigate('/myPost');
         }
      } finally {
         setLoading(false);
      }
   };
   
   const logout = (navigate) => {
      setUser(null);
      localStorage.removeItem(USER);
      Cookies.remove(TOKEN);
      navigate('/');
   };

   const registerFun = async (values, navigate) => {
      try {
         setLoading(true);
         const response = await request.post('auth/register', values);

         if (response.status === 200 || response.status === 204) {
            message.success('You have successfully registered');
            navigate('/login');
         } else {
            message.error('Registration failed. Please try again.');
         }
      } catch (e) {
         console.error(e);
         message.error('Registration failed. Please try again.');
      } finally {
         setLoading(false);
      }
   };

   const state = { user, loading, registerFun, logout, login };
   return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = { children: PropTypes.node };

export default AuthProvider;