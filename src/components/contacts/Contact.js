import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Contact.css'
import {Consumer} from '../../context'
import axios from 'axios';
import {Link} from 'react-router-dom';
class Contact extends Component {
  state={
    showContactInfo:false
  }
/*onDeleteClick=(id, dispatch)=>{
  axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
  .then(res=>dispatch({type:"DELETE_CONTACT", payload:id}))

}*/
onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: 'DELETE_CONTACT', payload: id });
    } catch (e) {
      dispatch({ type: 'DELETE_CONTACT', payload: id });
    }
  };

    render() {
      const {id,name, email, phone}=this.props.contact;
      const {showContactInfo}= this.state;
      return(
        <Consumer>
          {value=>{
            const {dispatch}= value;
            return(
              <div className="card card-body mb-3">
              <h4 > {name}  <i onClick={()=>{this.setState({showContactInfo:!this.state.showContactInfo})}}
              className="fas fa-sort-down" style={{cursor:'pointer'}}> </i>
            <i className="fas fa-trash" style={{cursor:'pointer', float:'right',color:'red'}}
              onClick={this.onDeleteClick.bind(this,id,dispatch)}
              > </i>
            <Link to={`contact/edit/${id}`}>
              <i className="fas fa-pencil-alt"
                style={{cursor:'pointer', float:'right',color:'black',marginRight: '1rem'}}></i>
            </Link>
              </h4>
              {showContactInfo?(<ul className="list-group">
              <li className="list-group-item"><i className="far fa-envelope"
                style={{fload:'left',color:'black', marginRight: '1rem'}}
                />{email} </li>
              <li className="list-group-item">
                <i className="far fa-phone"
                  style={{fload:'left', marginRight: '1rem', color:'black'}}
                  />
                {phone}</li>
               </ul>):null}

              </div>
            )
          }}
        </Consumer>
      )

    }
}
Contact.propTypes={
  contact:PropTypes.object.isRequired,

}
export default Contact
