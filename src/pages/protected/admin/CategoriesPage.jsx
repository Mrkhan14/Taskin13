import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCategories } from '../../../redux/actions/category';
import useCategory from '../../../redux/hooks/category';

const CategoriesPage = () => {
   const dispatch = useDispatch();
   const { categories, total, loading } = useCategory();

   useEffect(() => {
      dispatch(getCategories());
   }, [dispatch]);

   console.log(categories, total, loading);

   return <div>CategoriesPage category</div>;
};

export default CategoriesPage;
