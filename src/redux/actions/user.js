import require from '../../services/request';
import { LIMIT } from '../../utils/constants';

// Users Lists
const getUsers =
   (page = 1, limit = LIMIT) =>
   async dispatch => {
      try {
         dispatch(changeLoading());
         const {
            data: {
               pagination: { total, page: currentPage },
               data: users,
            },
         } = await require.get(`user?page=${page}&limit=${limit}`);
         dispatch({
            payload: { total, users, currentPage, pageSize: limit },
            type: 'getUsers',
         });
      } finally {
         dispatch(changeLoading());
      }
   };

// delete user
const deleteUser = (id, page, pageSize) => async dispatch => {
   await require.delete(`user/${id}`);
   dispatch(getUsers(page, pageSize));
};

// Loading page
const changeLoading = () => dispatch => {
   dispatch({
      type: 'loading',
   });
};

export { deleteUser, getUsers };
