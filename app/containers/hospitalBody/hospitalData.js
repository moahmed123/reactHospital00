import React, { Component } from 'react';
import * as actionCreatores from '../../actions';
import {connect} from 'react-redux';


class FilterData extends Component{
    componentDidMount(){                     
        {this.props.GetDataFilter()}                              
    }
    handleSubmit(event)  {
        event.preventDefault()
       // console.log(event.target[0].value)
       const idHospital  = event.target.elements.id.value,
            hospitalname = event.target.elements.hospitalname.value;
        console.log(event.target.elements.hospitalname.value);
        console.log(event.target.elements.id.value);
        // console.log(event.target.elements.city.value)
        // console.log(event.target.elements.phone.value)
        // console.log(event.target.elements.longitude.value)
        // console.log(event.target.elements.country.value)        
        //console.log(event.target.username.value)
       // console.log(this.inputNode.value)
    //    {this.props.putedit(idHospital,hospitalname)}
       {this.props.GetDataFilter()};
    }
    // Fun Brands .
    FilterBrandsFun(){
        if(!this.props.data){
            return <div> Loading ... </div>;
        }
        return this.props.data['hotels'].map((databrands, i)=>{            
            return(
                <div key = {i} className='row'>
                    <div className='col-md-3'>                         
                        <h4>{databrands['name']}</h4>
                    </div>
                    <div className='col-md-3'> 
                        <p>{databrands['details']}</p>
                    </div>
                    <div className='col-md-2'>
                        <p>{databrands['city']}</p>
                    </div>
                    <div className='col-md-2'> <p>{databrands['phone']}</p> </div>
                    <div className='col-md-2'> 
                        <input className='btn btn-success' value='edit' type='submit'/>
                        <input className='btn btn-danger' value='del' type='submit'/>
                    </div>
                    <div className='col-md-12 hidden'>
                        <p>{databrands['longitude']}</p>                    
                        <p>{databrands['review'][0]['nameUser']}</p>                    
                        <p>{databrands['country']}</p>
                    </div>     
                    <div className='col-md-12'>                        
                        <form onSubmit={this.handleSubmit}>                                                        
                            <input type="text" name="hospitalname"/>
                            <input type="hidden" name="id" value ={databrands['_id']}/>
                            {/* <input  name='details' placeholder={databrands['details']} type='text'/>
                            <input  name='phone' placeholder={databrands['phone']} type='text'/>
                            <input  name='city' placeholder= {databrands['city']} type='text'/>
                            <input  name='longitude' placeholder={databrands['longitude']} type='text'/>
                            <input  name='country' placeholder={databrands['country']} type='text'/>                             */}
                            <button type="submit">Submit</button>
                        </form>
                    </div>                                   
                </div>
            );
        });
    }
    render(){        
        return(  
            <section className="body-data">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 Filter"> 
                        <div className='row'>
                            <div className='col-md-3'> Hospital Name </div>
                            <div className='col-md-3'> Address </div>
                            <div className='col-md-2'> City </div>
                            <div className='col-md-2'> Phone</div>
                            <div className='col-md-2'> Edit / Delete</div>
                        </div>
                            {this.FilterBrandsFun()}                            
                        </div>     
                    </div>

      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="username"
            // ref={node => (this.inputNode = node)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>

                </div>
            </section>                                                               
        );
    }
}

function mapStateToProps(state){
    return{
        data: state.filterData
    };
}
export default connect(mapStateToProps, actionCreatores)(FilterData);