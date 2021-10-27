import { combineReducers } from 'redux';
import errorsReducer from './errorsReducer';
import requestingReducer from './requestingReducer';
import sessionsReducer from './sessionsReducer';
import customersReducer from './customersReducer';
import productsReducer from './productsReducer';
import salesReducer from './salesReducer';
import cartReducer from './cartReducer';

export default combineReducers({
    errors: errorsReducer,
    requesting: requestingReducer,
    sessions: sessionsReducer,
    products: productsReducer,
    customers: customersReducer,
    sales: salesReducer
    // cart: cartReducer
})