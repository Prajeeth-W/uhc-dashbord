import React  from "react";
import "./AddNewStud.css";
import AddStudent,{p}  from "../AddStudent/AddStudent";

class AddNewStud extends React.Component {
  state = {
    Name: "",
    address:"",    
    stNo: "",
    bDay:"",
    phoneNo: "",
    email: ""    
  };

  inputUpdate = (event) => {
    let key = event.target.name;
    let val = event.target.value;
    this.setState({ [key]: val });   
  };

  render() {
    return (      
        <div className="st_form">
          <div className="form_area">
            <form className="ui form">    
              <div className="field">   {/* Name*/}
                <label> Student Name:</label>
                <input type="text" name="name" onChange={this.inputUpdate} />
              </div>
              
              <div className="field">   {/* Address*/}
                <label>Residential  Address:</label>
                <input type="text" name="address" onChange={this.inputUpdate} />
              </div>
              <div className="field">   {/* E-mail*/}
                <label> Email Address:</label>
                <input type="email" name="email" onChange={this.inputUpdate} />
              </div>             
              <div className="two fields">   {/* Phn No*/}
                <div className="field">
                  <label> Phone Number:</label>
                  <input type="number"  name="phoneNo" onChange={this.inputUpdate} />
                </div>
              </div>             
              <div className="two fields">   {/* Bday*/}
                <div className="field">
                  <label> Birth Day:</label>
                  <input type="date" name="bDay" onChange={this.inputUpdate} placeholder="DD/ MM/ YYYY"/>
                </div>
              </div>             
             
              <div className="two fields"> {/*submit */}
              <div className="field">
              <div className="ui fluid large teal submit button">Add Student</div>
              </div>
              </div>
              
            </form>

          </div>
        </div>
      
    )
  }
}
export default AddNewStud;
