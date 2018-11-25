import React, { Component } from 'react';
import * as actionCreatores from '../../actions';
import {connect} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class HospitalDataTable extends Component{
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.deleteData = this.deleteData.bind(this);
        //showFormEditData
        this.showFormEditData = this.showFormEditData.bind(this);
        this.state = {            
            loading: false            
        };
    }
    componentDidMount(){                     
        {this.props.GetAllData()};                             
        this.setState({
            loading: true
        });

    }    
    handleSubmit(event)  {
        event.preventDefault();
       // console.log(event.target[0].value)
        const idHospital  = event.target.elements.id.value,
        hospitalname = event.target.elements.hospitalname.value;
        console.log(event.target.elements.hospitalname.value);
        console.log(event.target.elements.id.value);
        // console.log(event.target.elements.city.value)
        // console.log(event.target.elements.phone.value)
        // console.log(event.target.elements.longitude.value)
        // console.log(event.target.elements.country.value)                
        // console.log(this.inputNode.value)                             
        this.props.editHospitalData(idHospital,hospitalname);          
        // console.log(this.props.ReloadDataTable)
    }
    deleteData(id){
        event.preventDefault();
        this.props.DeleteHospitalData(id);
    }
    // Function To Show And Hide Edit Form.
    showFormEditData(e){                       
        if(e.target.parentElement.parentElement.lastChild.previousSibling.className == 'hidden col-md-12 content-form'){
            e.target.parentElement.parentElement.lastChild.previousSibling.className =  'show col-md-12 content-form';
        }else{
            e.target.parentElement.parentElement.lastChild.previousSibling.className =  'hidden col-md-12 content-form';
        }
    }
    // Fun Brands .
    TableDataHospital(){
        if(!this.props.AllData || this.state.loading == false){
            return <div> Loading ... </div>;
        }        
        return this.props.AllData['hotels'].map((databrands, i)=>{            
            return(
                <div key = {i} className='row'>
                    <div className='col-md-2'> 
                        <input 
                            className='btn btn-success'
                            value='edit' 
                            type='submit'                            
                            onClick={this.showFormEditData}/>
                        <input  
                            className='btn btn-danger' 
                            value='del'
                            type='submit'
                            onClick = {()=> this.deleteData(databrands['_id'])}
                            />
                    </div>
                    <div className='col-md-2'> 
                        <p>{databrands['phone']}</p> 
                    </div>
                    <div className='col-md-2'>
                        <p>{databrands['city']}</p>
                    </div>
                    <div className='col-md-3'> 
                        <p>{databrands['details']}</p>
                    </div>
                    <div className='col-md-3'>                         
                        <h4>{databrands['name']}</h4>
                    </div>

                    <div className='col-md-12 hidden'>
                        <p>{databrands['longitude']}</p>                    
                        {/* <p>{databrands['review'][0]['nameUser']}</p> */}
                        <p>{databrands['country']}</p>
                    </div>     
                    <div className='hidden col-md-12 content-form'>
                        <form onSubmit={this.handleSubmit} className='submit-from'>                                                        
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
                    <div>
                         icon
                    </div>
                </div>
            );
        });
    }
    render(){          
        return(  
            <section className="table-data">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12"> 
                            <div className='row static-data'>
                                <div className='col-md-2'> تعديل / حذف</div>
                                <div className='col-md-2'> التليفون </div>
                                <div className='col-md-2'> المدينه </div>
                                <div className='col-md-3'> العنوان </div>
                                <div className='col-md-3'> اسم المستشفي </div>
                            </div>
                            <div>
                                {this.TableDataHospital()}
                            </div>
                            
                        </div>     
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
export default connect(mapStateToProps, actionCreatores)(HospitalDataTable);