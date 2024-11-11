import { Spin, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCategories } from '../../../redux/actions/category';
import useCategory from '../../../redux/hooks/category';

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

   const columns = [
      {
         title: 'Category Name',
         dataIndex: 'name',
         key: 'name',
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
