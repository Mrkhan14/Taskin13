import require from '../../services/request';

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

const getCategories = () => async dispatch => {
   try {
      dispatch(changeLoading());
      const {
         data: {
            pagination: { total },
            data,
         },
      } = await require.get('category');
      dispatch({
         payload: { total, categories: data },
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
