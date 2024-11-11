import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';

import { thunk } from 'redux-thunk';
import rootReducer from '../reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

const StoreProvider = ({ children }) => {
   return <Provider store={store}>{children}</Provider>;
};
StoreProvider.propTypes = { children: PropTypes.node };

export default StoreProvider;
