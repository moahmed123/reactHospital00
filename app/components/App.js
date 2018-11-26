import React from 'react';
// NavBar Data
import NavBar from '../containers/NavBar';
// Filter Data 
import BodyData from '../containers/Body/bodyHospital';
// Footer Data 
import Footer from '../containers/Footer';

import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStroopwafel, faAtom, faAngleDown } from '@fortawesome/free-solid-svg-icons';

library.add(faStroopwafel, faAtom, faAngleDown);

const App = () => {
    return(
        <div>            
            <NavBar/>
            <BodyData/>            
            <Footer/>
        </div>
    );
}
export default App;