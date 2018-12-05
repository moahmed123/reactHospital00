import React, { Component } from 'react';
import * as actionCreatores from '../../actions';
import {connect} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class HospitalDataTable extends Component{
    constructor(props) {
        super(props);
        this.updateData = this.updateData.bind(this);
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
    // Function To Delete Data Hospital . 
    verifiedDelete(eve){                   
        if(eve.target.nextSibling.className == 'verified-delete hidden'){
            eve.target.nextSibling.className =  'verified-delete';
        }else{
            eve.target.nextSibling.className =  'verified-delete hidden';
        }
    }
    cancelDelete(ev){   
        ev.preventDefault();    
        
        if(ev.target.parentElement.parentElement.parentElement.className == 'verified-delete hidden'){
            ev.target.parentElement.parentElement.parentElement.className =  'verified-delete';
        }else{
            ev.target.parentElement.parentElement.parentElement.className =  'verified-delete hidden';
        }
    }
    deleteData(id){
      //  event.preventDefault();
        this.props.DeleteHospitalData(id);
    }
    // Function To Show And Hide Edit Form .
    showFormEditData(e){                       
        if(e.target.parentElement.parentElement.lastChild.previousSibling.className == 'hidden col-md-12 content-form'){
            e.target.parentElement.parentElement.lastChild.previousSibling.className =  'show col-md-12 content-form';
        }else{
            e.target.parentElement.parentElement.lastChild.previousSibling.className =  'hidden col-md-12 content-form';
        }
    }
    updateData(event)  {
        event.preventDefault();       
        const hospitalId         = event.target.elements.id.value,
              hospitalname       = event.target.elements.hospitalname.value,
              hospitaldetails    = event.target.elements.details.value,
              hospitalphone      = event.target.elements.phone.value,
              hospitalcity       = event.target.elements.city.value,
              hospitaltype       = event.target.elements.type.value,
              hospitallatitude   = event.target.elements.latitude.value,
              hospitalcategories = event.target.elements.categories.value,
              hospitallongitude  = event.target.elements.longitude.value,
              hospitalactivation = event.target.elements.activation.value,
              hospitalcountry    = event.target.elements.country.value;

        this.props.editHospitalData(
            hospitalId,
            hospitalname,
            hospitallatitude,
            hospitaltype,
            hospitalcategories,
            hospitalcountry,
            hospitalcity,
            hospitallongitude,
            hospitalactivation,
            hospitaldetails,
            hospitalphone);
    }
    showMoreData(e){
        if( e.target.parentElement.previousSibling.previousSibling.className == "col-md-12 hidden more-data"){
            e.target.parentElement.previousSibling.previousSibling.className = "col-md-12 more-data"
        }else{
            e.target.parentElement.previousSibling.previousSibling.className = "col-md-12 hidden more-data"
        }        
    }
    // Fun Show All Data Table .
    TableDataHospital(){
        if(!this.props.AllData || this.state.loading == false){
            return <div> Loading ... </div>;
        }        
        return this.props.AllData['hotels'].map((databrands, i)=>{            
            return(
                <div key = {i} className='row table-show display-inherit '>                
                    <div className='col-md-2 display-inherit'> 
                        <input 
                            className='btn btn-success'
                            value='تعديل' 
                            type='submit'                            
                            onClick={this.showFormEditData}/>
                        <input  
                            className='btn btn-danger' 
                            value='حذف'
                            type='submit'
                            onClick = {this.verifiedDelete}
                            />
                            <div className='verified-delete hidden'>
                                <div className='table-box'>
                                    <div className='table-cell'>
                                        <div className='text-center'>
                                            <h4>you can sure for delete : {databrands['name']}</h4>
                                        </div>
                                        <input  
                                            className='btn btn-danger' 
                                            value='حذف'
                                            type='submit'
                                            onClick = {()=> this.deleteData(databrands['_id'])}
                                            />
                                        <input  
                                            className='btn btn-primary' 
                                            value='cancel'
                                            type='submit'                 
                                            onClick = {this.cancelDelete}
                                            />
                                    </div>
                                </div>                                
                            </div>
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
                    <div className='col-md-12 hidden more-data'>
                        <p>longitude : {databrands['loc']['coordinates'][0]}</p>
                        <p>latitude  : {databrands['loc']['coordinates'][1]}</p>
                        {/* <p>{databrands['review'][0]['nameUser']}</p> */}
                        <p>{databrands['country']}</p>
                    </div>     
                    <div className='hidden col-md-12 content-form'>
                        <form onSubmit={this.updateData} className='submit-from'>                                                                                    
                            <input type="hidden" name="id" value ={databrands['_id']}/>
                            <input type="hidden" name="oldactivation" value ={databrands['activation']}/>
                            <input type="text" name="hospitalname" defaultValue= {databrands['name']}/>
                            <textarea  name='details' placeholder={databrands['details']} defaultValue= {databrands['details']}></textarea>
                            <input  name='phone' placeholder={databrands['phone']} type='text' defaultValue= {databrands['phone']}/>
                            <input  name='city' placeholder= {databrands['city']} type='text' defaultValue= {databrands['city']}/>
                            <input  name='type' placeholder= {databrands['type']} type='text' defaultValue= {databrands['type']}/>
                            <input  name='latitude' placeholder={databrands['latitude']} type='text' defaultValue= {databrands['latitude']}/>
                            <input  name='longitude' placeholder={databrands['longitude']} type='text' defaultValue= {databrands['longitude']}/>
                            <input type="text" name="activation" defaultValue= {databrands['activation']}/>
                            <input  name='country' placeholder={databrands['country']} type='text' defaultValue = {databrands['country']}/>
                            <input  name='categories' placeholder={databrands['categories']} type='text' defaultValue= {databrands['categories']}/>
                            <button type="submit">تعديل</button>
                        </form>
                    </div>                                                                                  
                    <div className='col-md-12 text-center'>
                        <FontAwesomeIcon icon="angle-down" onClick ={this.showMoreData} size= "2x" />                                            
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
                            <div className='data-table'>
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