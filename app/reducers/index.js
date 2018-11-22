import {combineReducers} from 'redux';
import HospitalData from './hospital-all-data';
import ReloadData from './reload-table-data';

let allReducers = combineReducers({
    AllDataHospital : HospitalData,
    ReloadTableData : ReloadData

});
export default allReducers;