import { CATEGORY_ACTIONS } from '../types/category';
const initialState = {
   categories: [],
   loading: false,
   total: 0,
   activePage: 1,
   pageSize: 10,
   selected: null,
   isModalLoading: false,
   isModalOpen: false,
   imageData: null,
   imageLoading: false,
};

const categoryReducers = (state = initialState, { type, payload }) => {
   const { loading } = state;
   switch (type) {
      case CATEGORY_ACTIONS:
         return { ...state, ...payload };
      case 'loading':
         return { ...state, loading: !loading };
      default:
         return state;
   }
};

export default categoryReducers;
