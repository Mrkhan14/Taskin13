import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import {
   controlModal,
   deleteCategory,
   editCategory,
   getCategories,
   sendCategory,
   showModal,
   uploadImage,
} from '../../../redux/actions/category';

import useCategory from '../../../redux/hooks/category';

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
   Spin,
   Table,
   Tooltip,
   Upload,
} from 'antd';

import { getImage } from './../../../utils/getPhotoUrl';

const { confirm } = Modal;

const CategoriesPage = () => {
   const dispatch = useDispatch();
   const {
      categories,
      total,
      loading,
      activePage,
      pageSize,
      selected,
      isModalLoading,
      isModalOpen,
      imageData,
      imageLoading,
   } = useCategory();
   const [page, setPage] = useState(activePage);
   const [size, setSize] = useState(pageSize);

   const [form] = Form.useForm();

   useEffect(() => {
      dispatch(getCategories(page, size));
   }, [dispatch, page, size]);

   const handleOk = async () => {
      const values = await form.validateFields();
      values.photo = imageData._id;
      dispatch(sendCategory({ values, selected, activePage, form }));
   };

   const closeModal = () => {
      dispatch(controlModal(false));
   };

   const handleTableChange = pagination => {
      setPage(pagination.current);
      setSize(pagination.pageSize);
   };

   const openConfirmDeleteModal = id => {
      confirm({
         title: 'Confirm',
         content: 'Bla bla ...',
         okText: 'yes',
         cancelText: 'No',
         onOk: () => {
            if (categories.length > 1) {
               dispatch(deleteCategory(id, page, pageSize));
            } else {
               dispatch(deleteCategory(id, page - 1, pageSize));
            }
         },
      });
   };

   const columns = [
      {
         title: 'Photo',
         dataIndex: 'photo',
         key: 'photo',
         render: data => <Image className='!w-16' src={getImage(data)}></Image>,
      },
      {
         title: 'Category Name',
         dataIndex: 'name',
         key: 'name',
      },
      {
         title: 'Description',
         dataIndex: 'description',
         key: 'description',
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
                        onClick={() => dispatch(editCategory(form, data))}
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

   return (
      <Fragment>
         <div className='flex justify-between mb-3'>
            <div className='font-bold text-xl'>
               Users{' '}
               <span className='bg-green-200  px-3 rounded-xl'>{total}</span>
            </div>
            <Button type='dashed' onClick={() => dispatch(showModal(form))}>
               Add User
            </Button>
         </div>
         <Spin spinning={loading}>
            <Table
               columns={columns}
               dataSource={categories.map(category => {
                  console.log(categories);

                  return {
                     ...category,
                     key: category._id,
                  };
               })}
               pagination={paginationConfig}
               rowKey='_id' // Adjusted to use _id as per the provided data structure
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
               {/* <input type="file" onChange={uploadImage}/> */}
               <Form.Item
                  label='Name'
                  name='name'
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
            </Form>
         </Modal>
      </Fragment>
   );
};

export default CategoriesPage;
