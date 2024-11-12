import require from '../../services/request';
import { LIMIT, PAGE } from '../../utils/constants';

// Category Lists
const getCategories =
   (page = PAGE, limit = LIMIT) =>
   async dispatch => {
      try {
         dispatch(changeLoading());
         const {
            data: {
               pagination: { total, page: currentPage, limit: pageSize },
               data: categories,
            },
         } = await require.get(`category?page=${page}&limit=${limit}`);
         dispatch({
            payload: { total, categories, currentPage, pageSize },
            type: 'getCategories',
         });
      } finally {
         dispatch(changeLoading());
      }
   };

// Categories Delete
const deleteCategory = id => async dispatch => {
   await require.delete(`category/${id}`);
   dispatch(getCategories(currentPage, pageSize));
};

// Loading page
const changeLoading = () => dispatch => {
   dispatch({
      type: 'loading',
   });
};

export { deleteCategory, getCategories };
