import { POSTS_ACTIONS } from '../types/post';
const initialState = {
   posts: [],
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

const PostReducers = (state = initialState, { type, payload }) => {
   const { loading } = state;
   switch (type) {
      case POSTS_ACTIONS:
         return { ...state, ...payload };
      case 'loading':
         return { ...state, loading: !loading };
      default:
         return state;
   }
};

export default PostReducers;
