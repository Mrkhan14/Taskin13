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
import NotFoundPage from './pages/public/NotFoundPage';
import RegisterPage from './pages/public/RegisterPage';
import CategoriesPage from './pages/protected/admin/CategoriesPage';
import UsersPage from './pages/protected/admin/UsersPage';
import AdminBlogsPage from './pages/protected/admin/AdminBlogsPage';
function App() {
   const { user } = useAuth() || {};
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
                  {role === 'user' ? (
                     <Fragment>
                        <Route
                           path='myPost'
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
                        path='categories'
                        element={<CategoriesPage></CategoriesPage>}
                     ></Route>
                     <Route
                        path='users'
                        element={<UsersPage></UsersPage>}
                     ></Route>
                     <Route
                        path='admin-blogs'
                        element={<AdminBlogsPage></AdminBlogsPage>}
                     ></Route>
                     <Route
                        path='admin-account'
                        element={<AdminAccountPage></AdminAccountPage>}
                     ></Route>
                  </Route>
               ) : null}

               {/* Not Found Page */}
               <Route path='*' element={<NotFoundPage />} />
            </Routes>
         </BrowserRouter>
      </>
   );
}

export default App;
