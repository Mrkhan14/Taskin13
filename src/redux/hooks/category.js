import { useSelector } from 'react-redux';

const useCategory = () => {
   const state = useSelector(state => state.category);
   return state;
};

export default useCategory;
