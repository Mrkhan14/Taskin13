import { LIMIT } from '../../utils/constants';

const initialState = {
   users: [],
   loading: false,
   total: 0,
   currentPage: 1,
   pageSize: LIMIT,
};

const userReducers = (state = initialState, { type, payload }) => {
   const { loading } = state;
   switch (type) {
      case 'getUsers':
         return { ...state, ...payload };
      case 'loading':
         return { ...state, loading: !loading };
      default:
         return state;
   }
};

export default userReducers;
