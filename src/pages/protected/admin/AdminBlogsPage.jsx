import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import request from './../../../services/request';

// actions
import {
   controlModal,
   deletePost,
   editPost,
   getPosts,
   sendPost,
   showModal,
   uploadImage,
} from '../../../redux/actions/post';
// hook
import usePost from '../../../redux/hooks/post';
// context
import { getImage } from './../../../utils/getPhotoUrl';
// component
import {
   DeleteOutlined,
   FormOutlined,
   LoadingOutlined,
   PlusOutlined,
} from '@ant-design/icons';
import {
   Button,
   Form,
   Image,
   Input,
   Modal,
   Select,
   Spin,
   Table,
   Tooltip,
   Upload,
} from 'antd';
import FormattedDate from '../../../components/box/FormattedDate';

const { confirm } = Modal;
const { Option } = Select;

const AdminBlogsPage = () => {
   const dispatch = useDispatch();
   const [form] = Form.useForm();
   const {
      posts,
      loading,
      total,
      activePage,
      pageSize,
      selected,
      isModalLoading,
      isModalOpen,
      imageData,
      imageLoading,
   } = usePost();
   const [page, setPage] = useState(activePage);
   const [size, setSize] = useState(pageSize);
   const [categories, setCategories] = useState([]); // State to store categories

   useEffect(() => {
      // Fetch categories from your backend and set them in state
      const fetchCategories = async () => {
         const response = await request.get('category');
         setCategories(response.data.data); // Adjust according to your response structure
      };
      fetchCategories();
   }, []);

   const columns = [
      {
         title: 'Photo',
         dataIndex: 'photo',
         key: 'photo',
         render: data => <Image className='!w-16' src={getImage(data)}></Image>,
      },
      {
         title: 'Title',
         dataIndex: 'title',
         key: 'title',
      },
      {
         title: 'Description',
         dataIndex: 'description',
         key: 'description',
      },
      {
         title: 'Created',
         dataIndex: 'createdAt',
         key: '_id',
         render: createdAt => (
            <Fragment>
               <FormattedDate data={createdAt}></FormattedDate>
            </Fragment>
         ),
      },
      {
         title: 'Updated',
         dataIndex: 'updatedAt',
         key: '_id',
         render: updatedAt => (
            <Fragment>
               <FormattedDate data={updatedAt}></FormattedDate>
            </Fragment>
         ),
      },
      {
         width: '60px',
         title: 'Setting',
         dataIndex: '_id',
         key: '_id',
         render: data => (
            <Fragment>
               <div className='flex'>
                  <Tooltip title='Update' className='mr-2'>
                     <Button
                        onClick={() => dispatch(editPost(form, data))}
                        shape='circle'
                        icon={<FormOutlined />}
                     />
                  </Tooltip>
                  <Tooltip title='Delete'>
                     <Button
                        onClick={() => {
                           openConfirmDeleteModal(data);
                        }}
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

   const paginationConfig = {
      total,
      current: page,
      pageSize: size,
      showSizeChanger: true,
      showQuickJumper: true,
   };

   const handleTableChange = pagination => {
      setPage(pagination.current);
      setSize(pagination.pageSize);
   };

   const closeModal = () => {
      dispatch(controlModal(false));
   };

   const openConfirmDeleteModal = id => {
      confirm({
         title: 'Confirm',
         content: 'Bla bla ...',
         okText: 'yes',
         cancelText: 'No',
         onOk: () => {
            if (posts.length > 1) {
               dispatch(deletePost(id, page, pageSize));
            } else {
               dispatch(deletePost(id, page - 1, pageSize));
            }
         },
      });
   };

   const handleOk = async () => {
      const values = await form.validateFields();
      values.photo = imageData._id;
      dispatch(sendPost({ values, selected, activePage, form }));
   };

   useEffect(() => {
      dispatch(getPosts(page, size));
   }, [dispatch, page, size]);

   return (
      <Fragment>
         <div className='flex justify-between mb-3'>
            <div className='text-xl font-bold'>
               Users{' '}
               <span className='px-3 bg-green-200 rounded-xl'>{total}</span>
            </div>
            <Button type='dashed' onClick={() => dispatch(showModal(form))}>
               Add User
            </Button>
         </div>
         <Spin spinning={loading}>
            <Table
               columns={columns}
               dataSource={posts.map(post => {
                  return {
                     ...post,
                     key: post._id,
                  };
               })}
               pagination={paginationConfig}
               rowKey='_id'
               onChange={handleTableChange}
            />
         </Spin>
         <Modal
            title='Category data'
            maskClosable={false}
            confirmLoading={isModalLoading}
            okText={selected === null ? 'Add category' : 'Save category'}
            open={isModalOpen}
            onOk={handleOk}
            onCancel={closeModal}
         >
            <Form
               name='category'
               autoComplete='off'
               labelCol={{
                  span: 24,
               }}
               wrapperCol={{
                  span: 24,
               }}
               form={form}
            >
               <Upload
                  name='avatar'
                  listType='picture-card'
                  className='avatar-uploader'
                  showUploadList={false}
                  onChange={e => dispatch(uploadImage(e.file.originFileObj))}
               >
                  <div>
                     {imageLoading ? (
                        <LoadingOutlined />
                     ) : imageData ? (
                        <img
                           src={getImage(imageData)}
                           alt='avatar'
                           style={{
                              width: '100%',
                           }}
                        />
                     ) : (
                        <div>
                           <PlusOutlined />
                           <div
                              style={{
                                 marginTop: 8,
                              }}
                           >
                              Upload
                           </div>
                        </div>
                     )}
                  </div>
               </Upload>
               <Form.Item
                  label='Name'
                  name='title'
                  rules={[
                     {
                        required: true,
                        message: 'Please fill!',
                     },
                  ]}
               >
                  <Input />
               </Form.Item>

               <Form.Item
                  label='Description'
                  name='description'
                  rules={[
                     {
                        required: true,
                        message: 'Please fill!',
                     },
                  ]}
               >
                  <Input.TextArea />
               </Form.Item>

               <Form.Item
                  label='Category'
                  name='category'
                  rules={[
                     {
                        required: true,
                        message: 'Please select a category!',
                     },
                  ]}
               >
                  <Select>
                     {categories.map(category => (
                        <Option key={category._id} value={category._id}>
                           {category.name}
                        </Option>
                     ))}
                  </Select>
               </Form.Item>

               <Form.Item
                  label='Tags'
                  name='tags'
                  rules={[
                     {
                        required: true,
                        message: 'Please add tags!',
                     },
                  ]}
               >
                  <Select
                     mode='tags'
                     style={{
                        width: '100%',
                     }}
                     placeholder='Add tags'
                  ></Select>
               </Form.Item>
            </Form>
         </Modal>
      </Fragment>
   );
};

export default AdminBlogsPage;
