import React from 'react';
// NavBar Data
import InsertDataHospital from './insertDataHospital';
import HospitalData from './hospitalDataTable';



const BodyHospital = () => {
    return(
        <div>            
            <InsertDataHospital/>
            <HospitalData/>
        </div>
    );
}
export default BodyHospital;