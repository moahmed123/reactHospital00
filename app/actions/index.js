//import fetch from 'node-fetch';
import axios from 'axios';

//https://apihospital00.herokuapp.com/api/hotel?name=all
//https://api.github.com/users/defunkt
export function GetDataFilter(){
    return(dispatch) => {
        return axios.get('https://apihospital00.herokuapp.com/api/hotel?name=all')
        .then((response) => {
            console.log(response.data);
          dispatch(ActionDataFilter(response.data)); 
        })
        .catch( (error) => {
          console.log(error.message);
        });
    }
}
// Action To Send Data Filter For Reducer .
export function ActionDataFilter(DataFilter){
    return{
        type: 'GET_DATA_FILTER',
        dataFilter: DataFilter
    }
}
// export function putedit(id,name){
//     return(dispatch) => {
//         return axios.put('https://apihospital00.herokuapp.com/api/put?id='+id+'&name='+name)        
//         .catch( (error) => {
//           console.log(error.message);
//         });
//     }
// }