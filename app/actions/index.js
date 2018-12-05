import axios from 'axios';

export function GetAllData(){
    return(dispatch) => {        
        const urlAllData = "https://apihospital00.herokuapp.com/api/hotel?name=all&city=all&cat=all&admin=admin&limit=20&active=all";
        return axios.get(urlAllData)
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

export function editHospitalData(id,name,latitude,type,categories,country,city,longitude,activation,details,phone){
    const URL = 'https://apihospital00.herokuapp.com/api/put?id='+id+'&name='+ name +
    '&latitude=' + latitude + '&type=' + type + '&categories='+ categories
    +'&city='+ city +'&country='+ country +'&longitude='+ longitude +
    '&activation='+ activation +'&details='+ details + '&phone='+ phone;

    return(dispatch) => {
        return axios.put(URL)       
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
// Insert Data For Database
export function InsertHospitalData(name,latitude,type,categories,country,city,longitude,activation,details,phone){
    const URL = 'https://apihospital00.herokuapp.com/api/addhospital?name='+ name +
    '&latitude=' + latitude + '&type=' + type + '&categories='+ categories
    +'&city='+ city +'&country='+ country +'&longitude='+ longitude +
    '&activation='+ activation +'&details='+ details+ '&phone=' + phone;

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
// Delete Data From Data Base 
export function DeleteHospitalData(id){
    return(dispatch) => {
        return axios.delete('https://apihospital00.herokuapp.com/api/delete?id='+id)       
        .then((response) => {
            console.log(response.data);            
            //dispatch(loadingDataTable());// To Display loading
            dispatch(GetAllData());// To Reloading Data.
        })
        .catch( (error) => {         
          console.log(error.message);
        });
    }
}
