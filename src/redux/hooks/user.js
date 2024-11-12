import { useSelector } from 'react-redux';

const useUser = () => {
   const state = useSelector(state => state.user);
   return state;
};

export default useUser;
