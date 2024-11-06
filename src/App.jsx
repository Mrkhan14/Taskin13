import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Fragment } from 'react';
import './App.css';
import AdminLayout from './components/layout/AdminLayout';
import UserLayout from './components/layout/UserLayout';
import useAuth from './hooks/useAuth';
import AdminAccountPage from './pages/protected/admin/AdminAccountPage';
import DashboardPage from './pages/protected/admin/DashboardPage';
import MyPostPage from './pages/protected/user/MyPostPage';
import UserAccountPage from './pages/protected/user/UserAccountPage';
import AboutPage from './pages/public/AboutPage';
import BlogPage from './pages/public/BlogPage';
import BlogsPage from './pages/public/BlogsPage';
import CategoryPage from './pages/public/CategoryPage';
import HomePage from './pages/public/HomePage';
import LoginPage from './pages/public/LoginPage';
import RegisterPage from './pages/public/RegisterPage';

function App() {
   const { user } = useAuth() || {}; // Ensure useAuth is not null
   const role = user?.role;
   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route element={<UserLayout></UserLayout>}>
                  {/* Public Pages*/}
                  <Route index element={<HomePage></HomePage>}></Route>
                  <Route path='blogs' element={<BlogsPage></BlogsPage>}></Route>
                  <Route
                     path='blogs/:id'
                     element={<BlogPage></BlogPage>}
                  ></Route>
                  <Route
                     path='category'
                     element={<CategoryPage></CategoryPage>}
                  ></Route>
                  <Route path='about' element={<AboutPage></AboutPage>}></Route>
                  <Route
                     path='register'
                     element={<RegisterPage></RegisterPage>}
                  ></Route>
                  <Route
                     path='register'
                     element={<RegisterPage></RegisterPage>}
                  ></Route>
                  <Route path='login' element={<LoginPage></LoginPage>}></Route>

                  {/* User Pages  */}
                  {role === 'admin' ? (
                     <Fragment>
                        <Route
                           path='my-post'
                           element={<MyPostPage></MyPostPage>}
                        ></Route>
                        <Route
                           path='user-account'
                           element={<UserAccountPage></UserAccountPage>}
                        ></Route>
                     </Fragment>
                  ) : null}
               </Route>

               {/* Admin Pages */}
               {role === 'admin' ? (
                  <Route element={<AdminLayout></AdminLayout>}>
                     <Route
                        path='dashboard'
                        element={<DashboardPage></DashboardPage>}
                     ></Route>
                     <Route
                        path='admin-account'
                        element={<AdminAccountPage></AdminAccountPage>}
                     ></Route>
                  </Route>
               ) : null}
            </Routes>
         </BrowserRouter>
      </>
   );
}

export default App;
