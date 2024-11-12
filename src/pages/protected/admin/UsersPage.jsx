import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteUser, getUsers } from '../../../redux/actions/user';
import useUser from '../../../redux/hooks/user';

import { DeleteOutlined, FormOutlined } from '@ant-design/icons';
import { Button, Modal, Spin, Table, Tag, Tooltip } from 'antd';

const { confirm } = Modal;

const UsersPage = () => {
   const dispatch = useDispatch();
   const { users, total, loading, currentPage, pageSize } = useUser();
   const [page, setPage] = useState(currentPage);
   const [size, setSize] = useState(pageSize);

   useEffect(() => {
      dispatch(getUsers(page, size));
   }, [dispatch, page, size]);

   const openConfirmDeleteModal = id => {
      confirm({
         title: 'Confirm',
         // icon: <ExclamationCircleOutlined />,
         content: 'Bla bla ...',
         okText: 'yes',
         cancelText: 'No',
         onOk: () => dispatch(deleteUser(id, page, size)),
      });
   };

   const columns = [
      {
         title: 'Lirst name',
         dataIndex: 'first_name',
         key: 'first_name',
      },
      {
         title: 'Last name',
         dataIndex: 'last_name',
         key: 'last_name',
      },
      {
         title: 'Role',
         dataIndex: 'role',
         render: tags => (
            <Fragment>
               {tags === 'user' ? (
                  <Tag color='#108ee9'>{tags}</Tag>
               ) : (
                  <Tag color='#87d068'>{tags}</Tag>
               )}
            </Fragment>
         ),
      },
      {
         title: 'Username',
         dataIndex: 'username',
         key: 'username',
      },
      {
         width: '80px',
         title: 'Setting',
         dataIndex: '_id',
         render: id => (
            <Fragment>
               <div className='flex'>
                  <Tooltip title='Update' className='mr-2'>
                     <Button shape='circle' icon={<FormOutlined />} />
                  </Tooltip>
                  <Tooltip title='Delete'>
                     <Button
                        onClick={() => openConfirmDeleteModal(id)}
                        danger
                        shape='circle'
                        icon={<DeleteOutlined />}
                     />
                  </Tooltip>
               </div>
            </Fragment>
         ),
      },
   ];

   const handleTableChange = pagination => {
      setPage(pagination.current);
      setSize(pagination.pageSize);
   };

   const paginationConfig = {
      total,
      current: page,
      pageSize: size,
      showSizeChanger: true,
      showQuickJumper: true,
   };

   return (
      <Fragment>
         <div className='flex justify-between mb-3'>
            <div className='font-bold text-xl'>
               Users{' '}
               <span className='bg-green-200  px-3 rounded-xl'>{total}</span>
            </div>
            <Button
            //  onClick={() => openConfirmDeleteModal(id)}
            >
               Add User
            </Button>
         </div>
         <Spin spinning={loading}>
            <Table
               columns={columns}
               dataSource={users.map(user => ({
                  ...user,
                  key: user._id,
               }))}
               pagination={paginationConfig}
               rowKey='_id' // Adjusted to use _id as per the provided data structure
               onChange={handleTableChange}
            />
         </Spin>
      </Fragment>
   );
};

export default UsersPage;
