const HospitalData = (state=null, action) => {
    switch(action.type){
        case 'GET_DATA_FILTER':
        return action.alldata;
        break;
    }
    return state;
}
export default HospitalData;