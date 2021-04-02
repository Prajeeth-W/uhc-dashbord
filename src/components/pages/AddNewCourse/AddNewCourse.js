import React  from "react";
import "./AddNewCourse.css";
import AddStudent,{p}  from "../AddStudent/AddStudent";

class AddNewCourse extends React.Component {
  state = {
    cName: "",
    description:"",    
    fee: "",
    year:"",
        
  };

  inputUpdate = (event) => {
    let key = event.target.name;
    let val = event.target.value;
    this.setState({ [key]: val });   
  };

  render() {
    return (      
        <div className="course_form">
          <div className="form_area">
            <form className="ui form">    
              <div className="field">   {/*Course Name*/}
                <label> Course Name:</label>
                <input type="text" name="cName" onChange={this.inputUpdate} />
              </div>
              
              <div class="ui form">
                <div className="field">   {/* Descriptio*/}
                  <label>Description:</label>
                  <textarea type="text" name="description" onChange={this.inputUpdate} />
                </div>  
              </div>

              <div className="field">   {/* Fee-*/}
                <label> Fee (USD):</label>
                <input type="number" name="fee" onChange={this.inputUpdate} />
              </div>             
              <div className="two fields">   {/* Phn No*/}
                <div className="field">
                  <label> Year:</label>
                  <input type ="date" name="year" onChange={this.inputUpdate} />
                </div>
              </div>             
                         
             
              <div className="two fields"> {/*submit */}
              <div className="field">
                <input type="submit" class="ui fluid teal large button" />
              </div>
              </div>
              
            </form>

          </div>
        </div>
      
    )
  }
}
export default AddNewCourse;
