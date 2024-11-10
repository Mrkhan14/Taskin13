import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
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
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[pathname.slice('1')]}
          items={[
            {
              key: 'dashboard',
              icon: <UserOutlined />,
              label: <Link to='/dashboard'>Dashboard</Link>,
            },
            {
              key: 'categories',
              icon: <VideoCameraOutlined />,
              label:  <Link to='/categories'>Categories</Link>,
            },
            {
              key: 'users',
              icon: <UploadOutlined />,
              label:  <Link to='/users'>Users</Link>,
            },
            {
              key: 'admin-blogs',
              icon: <UploadOutlined />,
              label:  <Link to='/admin-blogs'>Blogs</Link>,
            },
            {
              key: 'admin-account',
              icon: <UploadOutlined />,
              label:  <Link to='/admin-account'>Admin-account</Link>,
            },
          ]}
				/>
					<button
            onClick={logoutFon}
            className='flex px-3 py-3 m-8 text-sm border text-primary-700 border-primary-700'
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2 rotate-180 size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
            </svg>
            Logout
          </button>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
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
