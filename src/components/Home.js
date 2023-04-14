import React, { Component } from "react";
import { connect } from "react-redux";
import {getUserDetails} from '../services/actions/action'
import { Link } from "react-router-dom";
const mapStateToProps=state=>({
  storeData:state.userItems.userData
})

const mapDispatchToProps=dispatch=>({
  userDetailsHandler:data=>dispatch(getUserDetails(data))
})

 class Home extends Component {
  constructor() {
    super();
    this.state = {
      userDetails: {
        firstName: "",
        middleName: "",
        lastName: "",
      },
      index: "",
      userData: [],
    };
  }
  
  submitForm = () => { 
    let index = document.getElementById("inde").value;
    if (index === "" || index === undefined) {
      this.setState({
        userData: [...this.state.userData, { ...this.state.userDetails }],
      },()=>this.props.userDetailsHandler(this.state.userData)); 

    } else {
      let newData = this.state.userData;
      let newdetails = this.state.userDetails;
      newData.splice(index, 1, newdetails);
      this.setState({
        userData: [...newData],
      });
    }
    this.setState({
      userDetails: {
        firstName: "",
        middleName: "",
        lastName: "",
      },
    });
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      userDetails: {
        ...this.state.userDetails,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleEdit = (i) => {
    let arr = this.state.userData;
    let val = arr[i];
    this.setState({
      userDetails: {
        firstName: val.firstName,
        middleName: val.middleName,
        lastName: val.lastName,
      },
    });
    this.setState({
      index: i,
    });
    // console.log(val);
  };
 
  handleDelete = (i) => {
    let newData = this.state.userData;
    newData.splice(i, 1);
    this.setState({
      userData: [...newData],
    });
  };

  render() {   
    // console.log("props-->",this.props)
    return (
      <div className="container my-3">
        <input id="inde" type="hidden" value={this.state.index} />
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={this.handleChange}
            value={this.state.userDetails.firstName}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Middle Name</label>
          <input
            type="text"
            name="middleName"
            placeholder="Middle Name"
            onChange={this.handleChange}
            value={this.state.userDetails.middleName}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={this.handleChange}
            value={this.state.userDetails.lastName}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary" onClick={this.submitForm}>Submit</button>
        
      </div>

// this.submitForm
    );
  }
}


// 
export default connect(mapStateToProps,mapDispatchToProps)(Home);
// export default Home