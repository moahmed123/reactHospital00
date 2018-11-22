import React, { Component } from 'react';
import * as actionCreatores from '../../actions';
import {connect} from 'react-redux';


class InsertDataHospital extends Component{
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);                                    
        this.state = {            
            loading: false
        };
    }
    componentDidMount(){                                                         
        this.setState({
            loading: true
        });
    }    
    handleSubmit(event)  {
        event.preventDefault()       
        //event.target.elements.city.value       
    }    
    render(){          
        return(  
            <section className="form-insert-data">
                <div className="container">
                    <div className="row">
                            <h2 className='text-center'> Form To Insert Data </h2>
                    </div>
                </div>
            </section>                                                               
        );
    }
}
function mapStateToProps(state){
    return{
        AllData: state.AllDataHospital        
    };
}
export default connect(mapStateToProps, actionCreatores)(InsertDataHospital);