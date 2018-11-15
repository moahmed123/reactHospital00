import React, { Component } from 'react';
//import {bindActionCreators} from 'redux';
import * as actionCreatores from '../../actions';
import {connect} from 'react-redux';


class FilterData extends Component{
    componentDidMount(){                     
        {this.props.GetDataFilter()}                              
    }      
    // Fun Brands .
    FilterBrandsFun(){
        if(!this.props.data){
            return <div> Loading ... </div>;
        }
        return this.props.data['hotels'].map((databrands, i)=>{            
            return(
                <div key = {i}>
                    <p>{databrands['name']}</p>
                    <p>{databrands['details']}</p>
                    <p>{databrands['longitude']}</p>
                    <p>{databrands['latitude']}</p>
                    <p>{databrands['review'][0]['nameUser']}</p>
                    <p>{databrands['city']}</p>
                    <p>{databrands['country']}</p>
                </div>
            );
        });
    }                         
    render(){        
        return(  
            <section className="body-data">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 Filter"> 
                            {this.FilterBrandsFun()}
                            {/* {this.props.data['login']} */}
                            mohamed
                        </div>                       
                    </div>
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