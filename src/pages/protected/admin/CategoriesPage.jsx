import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteCategory, getCategories } from '../../../redux/actions/category';
import useCategory from '../../../redux/hooks/category';
// import { render } from 'react-dom';
import { DeleteOutlined , FormOutlined} from '@ant-design/icons';
import { Button,  Tooltip,  Spin, Table, Modal, Image  } from 'antd';
import getPhotoUrl from './../../../utils/getPhotoUrl'

const {confirm} = Modal

const CategoriesPage = () => {
   const dispatch = useDispatch();
   const { categories, total, loading, currentPage, pageSize } = useCategory();
   const [page, setPage] = useState(currentPage);
   const [size, setSize] = useState(pageSize);

   useEffect(() => {
      dispatch(getCategories(page, size));
   }, [dispatch, page, size]);

   const handleTableChange = pagination => {
      setPage(pagination.current);
      setSize(pagination.pageSize);
   };

   const openConfirmDeleteModal = (id) => {
      confirm({
         title: 'Confirm',
         // icon: <ExclamationCircleOutlined />,
         content: 'Bla bla ...',
         okText: 'yes',
         cancelText: 'No',
         onOk: () => dispatch(deleteCategory(id))
      });
   }
   
   
   const columns = [
      {
         title: 'Photo',
         dataIndex: 'photo',
         render: (photo) => <Image src={getPhotoUrl(photo)}></Image>
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
         title: 'Setting',
         dataIndex: "_id",
         render: (id) => (
            <Fragment>
               <div className="flex">
                  <Tooltip title="Update" className='mr-2'>
                     <Button  shape="circle" icon={<FormOutlined />} /> 
                  </Tooltip>
                  <Tooltip title="Delete">
                     <Button  onClick={() => openConfirmDeleteModal(id)} danger shape="circle" icon={<DeleteOutlined />} />
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
      <Spin spinning={loading}>
         <Table
            columns={columns}
            dataSource={categories.map(category => ({
               ...category,
               key: category._id,
            }))}
            pagination={paginationConfig}
            rowKey='_id' // Adjusted to use _id as per the provided data structure
            onChange={handleTableChange}
         />
      </Spin>
   );
};

export default CategoriesPage;
