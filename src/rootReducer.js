import { combineReducers } from 'redux';
import homeReducer from '~/containers/Home/reducers';
import globalReducer from './components/GlobalStyle/reducers';
const rootReducer = combineReducers({
    homeReducer,
    globalReducer,
});
export default rootReducer;
