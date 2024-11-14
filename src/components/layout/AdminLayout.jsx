import {
   BarsOutlined,
   FileWordOutlined,
   HomeOutlined,
   LogoutOutlined,
   MenuFoldOutlined,
   MenuUnfoldOutlined,
   TeamOutlined,
   UserOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import React, { useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const { Header, Sider, Content } = Layout;

const App = () => {
   const [collapsed, setCollapsed] = useState(false);
   const {
      token: { colorBgContainer, borderRadiusLG },
   } = theme.useToken();
   const { pathname } = useLocation();
   const { logout } = useAuth(); // Correctly call useAuth as a function
   const navigate = useNavigate();

   const logoutFon = () => {
      logout(navigate); // Pass the navigate function to logout
   };

   return (
      <Layout className='!h-[100vh]'>
         <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className='demo-logo-vertical' />
            <Menu
               theme='dark'
               mode='inline'
               defaultSelectedKeys={[pathname.slice('1')]}
               items={[
                  {
                     key: 'dashboard',
                     icon: <HomeOutlined />,
                     label: <Link to='/dashboard'>Dashboard</Link>,
                  },
                  {
                     key: 'categories',
                     icon: <BarsOutlined />,
                     label: <Link to='/categories'>Categories</Link>,
                  },
                  {
                     key: 'users',
                     icon: <TeamOutlined />,
                     label: <Link to='/users'>Users</Link>,
                  },
                  {
                     key: 'admin-blogs',
                     icon: <FileWordOutlined />,
                     label: <Link to='/admin-blogs'>Blogs</Link>,
                  },
                  {
                     key: 'admin-account',
                     icon: <UserOutlined />,
                     label: <Link to='/admin-account'>Admin-account</Link>,
                  },
                  {
                     key: '/',
                     icon: <LogoutOutlined />,
                     label: (
                        <button
                           className='!text-primary-700'
                           onClick={logoutFon}
                        >
                           Logout
                        </button>
                     ),
                  },
               ]}
            />
         </Sider>
         <Layout>
            <Header
               style={{
                  padding: 0,
                  background: colorBgContainer,
               }}
            >
               <Button
                  type='text'
                  icon={
                     collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
                  }
                  onClick={() => setCollapsed(!collapsed)}
                  style={{
                     fontSize: '16px',
                     width: 64,
                     height: 64,
                  }}
               />
            </Header>
            <Content
               className='h-[calc(100vh-120px)] overflow-y-scroll'
               style={{
                  margin: '24px 16px',
                  padding: 24,
                  minHeight: 280,
                  background: colorBgContainer,
                  borderRadius: borderRadiusLG,
               }}
            >
               <Outlet />
            </Content>
         </Layout>
      </Layout>
   );
};

export default App;
