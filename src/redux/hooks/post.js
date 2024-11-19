import { useSelector } from 'react-redux';

const usePost = () => {
   const state = useSelector(state => state?.post);
   return state;
};

export default usePost;
