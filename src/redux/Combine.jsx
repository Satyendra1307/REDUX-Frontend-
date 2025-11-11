import{combineReducers} from 'redux'
import Reducers from './Reducers'
const root = combineReducers({
    item:Reducers
})
export default root;

