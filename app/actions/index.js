import fetch from 'node-fetch';

export function GetDataFilter(){
    return(dispatch) => {
        return fetch('http://localhost:3000/api/hotel?name=mohamed',{
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, cors, *same-origin
            headers: {                
                "Access-Control-Allow-Origin": "*"
            }
        })
        .then(res => res.json())
        .then((result) =>{
            console.log(result);
            dispatch(ActionDataFilter(result));
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