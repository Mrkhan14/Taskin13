import { message } from 'antd';
import Cookies from 'js-cookie';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { AuthContext } from '../hooks/useAuth';
import request from '../services/reauest'; // corrected 'reauest' to 'request'
import { TOKEN, USER } from '../utils/constants';

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

   const registerFun = async (values, navigate) => {
      try {
         setLoading(true);
         const {
            data: { token },
         } = await request.post('auth/register', values);

         console.log(data, 'ssssssssssssssss');

         // Cookies.set(TOKEN, token);

         // request.defaults.headers.common.Authorization = `Bearer ${token}`;

         // const { data: user } = await request.get('auth/me');

         // localStorage.setItem(USER, JSON.stringify(user));

         // setUser(user);

         // const { role } = user;

         message.success('You have successfully registered');

         navigate('/login');
      } catch (e) {
         console.log(e);
      } finally {
         setLoading(false);
      }
   };

   const state = { user, loading, registerFun, login };
   return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};
AuthProvider.propTypes = { children: PropTypes.node };

export default AuthProvider;
