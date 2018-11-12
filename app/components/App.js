import React from 'react';
// NavBar Data
import NavBar from '../containers/NavBar';
// Filter Data 
import BodyData from '../containers/hospitalBody/hospitalData';
// Footer Data 
import Footer from '../containers/Footer';


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