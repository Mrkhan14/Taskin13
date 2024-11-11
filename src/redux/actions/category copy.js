import require from '../../services/request';
import { LIMIT, PAGE } from '../../utils/constants';

// const getCategories = () => {
//    return async dispatch => {
//       try {
//          const { data } = await require.get('category');
//          console.log(data, 'sss');
//          dispatch({
//             payload: { total: total, categories: data, loading: true },
//             type: 'getCategories',
//          });
//       } finally {
//          dispatch({ loading: false });
//          console.log('finally');
//       }
//    };
// };

// const getCategories = () => async dispatch => {
//    try {
//       dispatch(changeLoading());
//       const {
//          data: {
//             pagination: { total },
//             data,
//          },
//       } = await require.get('category');
//       dispatch({
//          payload: { total, categories: data },
//          type: 'getCategories',
//       });
//    } finally {
//       dispatch(changeLoading());
//    }
// };

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

const changeLoading = () => dispatch => {
   dispatch({
      type: 'loading',
   });
};

export { getCategories };
