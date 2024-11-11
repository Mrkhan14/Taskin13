// const initialState = {
//    categories: [],
//    loading: false,
//    total: 0,
// };

// const categoryReducers = (state = initialState, { type, payload }) => {
//    const { loading } = state;
//    switch (type) {
//       case 'getCategories':
//          return { ...state, ...payload };
//       case 'loading':
//          return { ...state, loading: !loading };
//       default:
//          return state;
//    }
// };

// export default categoryReducers;

const initialState = {
   categories: [],
   loading: false,
   total: 0,
   currentPage: 1,
   pageSize: 10,
};

const categoryReducers = (state = initialState, { type, payload }) => {
   const { loading } = state;
   switch (type) {
      case 'getCategories':
         return { ...state, ...payload };
      case 'loading':
         return { ...state, loading: !loading };
      default:
         return state;
   }
};

export default categoryReducers;
