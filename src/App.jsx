import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import PublicLayout from './components/layout/PublicLayout';
import AboutPage from './pages/public/AboutPage';
import BlogPage from './pages/public/BlogPage';
import BlogsPage from './pages/public/BlogsPage';
import CategoryPage from './pages/public/CategoryPage';
import HomePage from './pages/public/HomePage';
import LoginPage from './pages/public/LoginPage';
import RegisterPage from './pages/public/RegisterPage';

function App() {
   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route element={<PublicLayout></PublicLayout>}>
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
               </Route>
            </Routes>
         </BrowserRouter>
      </>
   );
}

export default App;
