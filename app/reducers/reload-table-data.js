const ReloadTable = (state=null, action) => {
    switch(action.type){
        case 'RELOAD_ALL_DATA-TABLE':
        return action.data;
        break;
    }
    return state;
}
export default ReloadTable;