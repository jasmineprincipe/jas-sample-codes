import React, { Component } from 'react';
import { isNull } from 'util';

class Body extends Component{

    constructor(props){
        super(props);
        this.submitForm = this.submitForm.bind(this);
    }
    submitForm(){       
            var name = document.getElementById('name').value;
            var age = document.getElementById('age').value;   

            //display selected radio button
            if(document.getElementById('male').checked){
                var gender = document.getElementById('male').value;
            }
            else if(document.getElementById('female').checked){
                var gender = document.getElementById('female').value;
            }
            else{
                alert("Select a gender.");
                return false;
            }

            if (name === "") {
              alert("Name must be filled out.");
              return false;
            }
            else if(age === ""){
                alert("Age must be filled out.");
              return false;
            }
            else if(age < 0 || age > 100 || age === 0){
                alert("Enter a valid age.")
                return false;
            }
            else{
                document.getElementById("result").innerHTML="Name: "+ name +"<br></br>"+ "Age: "+ age +"<br></br>"+ "Gender: "+ gender; 
                document.getElementById("myform").reset();   
            }
          } 
          render(){
            return(
                <div className="body-div"> 
                        <div className='content-wrapper'>
                            <div id='input'>
                                <form id="myform">
                                    <label>Name</label><br></br><input type="text" name="name" id="name"></input><br></br><br></br>
                                    <label>Age</label><br></br><input type="number" age="age"  id="age"></input><br></br><br></br>
                                    <label>Gender</label><br></br>
                                        <input type="radio" name="gender" value="Male" id="male"></input>Male
                                        <input type="radio" name="gender" value="Female" id="female"></input>Female<br></br>
                                    <input type="button" value="Submit" onClick={this.submitForm}></input>
                                </form>
                            </div>
                        </div>
                    <div className="content-wrapper">
                        <div id="result"></div>
                    </div>
                </div>
            );
        }
    }
export default Body;