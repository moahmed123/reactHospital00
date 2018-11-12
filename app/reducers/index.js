import {combineReducers} from 'redux';
import FilterData from './filte-data';

let allReducers = combineReducers({
    filterData : FilterData 
});
export default allReducers;