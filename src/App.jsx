import {  BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/public/HomePage'
import BlogsPage from './pages/public/BlogsPage'
import RegisterPage from './pages/public/RegisterPage'
import LoginPage from './pages/public/LoginPage'
import AboutPage from './pages/public/AboutPage'
import './App.css';
import PublicLayout from './components/layout/PublicLayout';
import CategoryPage from './pages/public/CategoryPage';

function App() {

   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route element={<PublicLayout></PublicLayout>}>
                  <Route index element={<HomePage></HomePage>}></Route>
                  <Route path='blogs' element={<BlogsPage></BlogsPage>} ></Route>
                  <Route path='category' element={<CategoryPage></CategoryPage>} ></Route>
                  <Route path='about' element={<AboutPage></AboutPage>} ></Route>
                  <Route path='register' element={<RegisterPage></RegisterPage>}></Route>
                  <Route path='register' element={<RegisterPage></RegisterPage>}></Route>
                  <Route path='login' element={<LoginPage></LoginPage>}></Route>
               </Route>
            </Routes>
         </BrowserRouter>
      </>
   );
}

export default App;
