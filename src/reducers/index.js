import { combineReducers } from 'redux';
import errorsReducer from './errorsReducer';
import requestingReducer from './requestingReducer';
import sessionsReducer from './sessionsReducer';

export default combineReducers({
    errors: errorsReducer,
    requesting: requestingReducer,
    sessions: sessionsReducer
})