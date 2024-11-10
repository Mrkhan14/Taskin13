import PropTypes from 'prop-types';
import { Provider } from "react-redux";
import { createStore } from  "redux";

import rootReducer from '../reducers';

const store = createStore(rootReducer);

const StoreProvider = ({children}) => {
    return (
       <Provider store={store}>{children}</Provider>
    )
}
StoreProvider.propTypes = { children: PropTypes.node };

export default StoreProvider