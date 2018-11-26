import React, { Component } from 'react';
import * as actionCreatores from '../../actions';
import {connect} from 'react-redux';


class InsertDataHospital extends Component{
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);                                    
        this.toggleForm = this.toggleForm.bind(this);
        this.state = {                   
            toggleForm : 'hidden'
        };
    }
    componentDidMount(){                                                         
        this.setState({
            loading: true
        });
    }    
    toggleForm(){                
        if(this.state.toggleForm == 'hidden'){
            this.setState({
                toggleForm : 'show'
            })
        }else{
            this.setState({
                toggleForm : 'hidden'
            })
        }
    }
    handleSubmit(event)  {
        event.preventDefault();
        const name       = event.target.elements.name.value,
              details    = event.target.elements.details.value,
              phone      = event.target.elements.phone.value, // not work in database
              city       = event.target.elements.city.value,
              longitude  = event.target.elements.longitude.value,
              latitude   = event.target.elements.latitude.value,  
              type       = event.target.elements.type.value, 
              categories = event.target.elements.categories.value,             
              country    = event.target.elements.country.value;
            
            if (document.getElementById("activeData").checked == true){
                const activation = true;
                this.props.InsertHospitalData(name,latitude,type,categories,country,city,longitude,activation,details,phone);
                this.toggleForm();
            }else{
                const activation = false;
                this.props.InsertHospitalData(
                    name,
                    latitude,
                    type,
                    categories,
                    country,
                    city,
                    longitude,
                    activation,
                    details,
                    phone);
                this.toggleForm();
            }                                         
    }        
    render(){          
        return(  
            <section className="form-insert-data">
                <div className="container">
                    <div className="row">
                            <h2 className='text-center'> Form To Insert Data </h2>
                            <input 
                                type='submit'
                                value ='Insert Hospital' 
                                className='btn btn-info'
                                onClick = {this.toggleForm}
                            />
                    </div>
                    <div className={this.state.toggleForm} id='form-to-insert'>
                            <h2> Form To Insert </h2>
                          <form onSubmit = {this.handleSubmit}>
                                <input  name="name" type="text" placeholder='name'/>                                
                                <textarea  name='details' placeholder='details'></textarea>
                                <input  name='phone' placeholder='phone' type='text'/>
                                <input  name='city' placeholder= 'city' type='text'/>
                                <input  name='longitude' placeholder='longitude' type='number'/>
                                <input  name='latitude' placeholder='latitude' type='number'/>
                                <input  name='activation' type='checkbox' id='activeData'/>
                                <input  name='type' placeholder='type' type='text'/>
                                <input  name='country' placeholder='country' type='text'/>
                                <input  name='categories' placeholder='categories' type='text'/>
                                <button type="submit">Submit</button>
                          </form>  
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