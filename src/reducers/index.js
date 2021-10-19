import { combineReducers } from 'redux';
import errorsReducer from './errorsReducer';
import requestingReducer from './requestingReducer';
import sessionsReducer from './sessionsReducer';
import customersReducer from './customersReducer';
import productsReducer from './productsReducer';

export default combineReducers({
    errors: errorsReducer,
    requesting: requestingReducer,
    sessions: sessionsReducer,
    customers: customersReducer,
    products: productsReducer
})