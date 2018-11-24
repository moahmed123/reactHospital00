import axios from 'axios';

//https://apihospital00.herokuapp.com/api/hotel?name=all
export function GetAllData(){
    return(dispatch) => {
        return axios.get('https://apihospital00.herokuapp.com/api/hotel?name=all')
        .then((response) => {
            console.log(response.data);
          dispatch(ActionAllData(response.data)); 
        })
        .catch( (error) => {
          console.log(error.message);
        });
    }
}
// Action To Send Data Filter For Reducer .
export function ActionAllData(HospitalData){
    return{
        type: 'GET_DATA_FILTER',
        alldata: HospitalData
    }
}
// Function Update Data 
export function editHospitalData(id,name){
    return(dispatch) => {
        return axios.put('https://apihospital00.herokuapp.com/api/put?id='+id+'&name='+name)       
        .then((response) => {
            console.log(response.data);            
            dispatch(loadingDataTable());// To Display loading
            dispatch(GetAllData());// To Reloading Data.
        })
        .catch( (error) => {         
          console.log(error.message);
        });
    }
} 
// to Display Loading  
export function loadingDataTable(){
    return(dispatch) => {
        dispatch(ActionAllData(null));
    }
}

export function InsertHospitalData(name,latitude,type,categories,country,city,longitude,activation,details){

    const URL = 'https://apihospital00.herokuapp.com/api/addhospital?name='+ name +
    '&latitude=' + latitude + '&type=' + type + '&categories='+ categories
    +'&city='+ city +'&country='+ country +'&longitude='+ longitude +
    '&activation='+ activation +'&details='+ details;

    return(dispatch) => {
        return axios.post(URL)       
        .then((response) => {
            console.log(response.data);            
            dispatch(loadingDataTable());// To Display loading
            dispatch(GetAllData());// To Reloading Data.
        })
        .catch( (error) => {         
          console.log(error.message);
        });
    }
} 