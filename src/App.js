import React, { Component } from 'react';
import logo from './logo.svg';

const initialState = {
  name: '',
  email: '',
  password: '',
  bio: '',
  gender: '',
  country: '',
  skills: []
}


export class App extends Component {

  constructor() {
    super();
    this.myForm = React.createRef();
  }

  state = {
    ...initialState
  };
  changeHandler = event => {
    if(event.target.type === 'checkbox'){
      if(event.target.checked){
        console.log('checkded');
        
        this.setState({
          ...this.state,
          skills: this.state.skills.concat(event.target.value)
        })
      }
      else{
        console.log('unchecked');
        
        this.setState({
          ...this.state,
          skills: this.state.skills.filter(skill => skill !== event.target.value)
        });
      }
    }
    else{
      console.log('others');
      
      this.setState({
        [event.target.name]: event.target.value
      });
    }
  }

  submitHandler = event => {
    event.preventDefault();
    console.log(this.state);

    this.myForm.current.reset();

    this.setState({
      ...initialState
    });
  }

  render(){
    return (
      <form ref={this.myForm} onSubmit={this.submitHandler} className="container" style={{marginTop: "50px", width: "100%"}}>
        <div className="form-group" style={{display:"flex", flexDirection: "row", margin: "auto", width: "50%", marginTop: "20px"}}>
          <label htmlFor="name">Your name:  </label>
          <input 
            style={{width: "80%", marginLeft: "10px"}}
            name="name" 
            type="text"
            id="name" 
            className="form-control" 
            placeholder="Enter your name" 
            value={this.state.name}
            onChange={this.changeHandler}
          />
        </div>

        <div className="form-group mt-4" style={{display:"flex", flexDirection: "row", margin: "auto", width: "50%", marginTop: "20px"}}>
          <label htmlFor="emial">Your E-mail:</label>
          <input 
            style={{width: "80%", marginLeft: "10px"}}
            name="email" 
            id="email" 
            type="email"
            className="form-control" 
            placeholder="Enter your E-mail" 
            value={this.state.emial}
            onChange={this.changeHandler}
          />
        </div>

        <div className="form-group mt-4" style={{display:"flex", flexDirection: "row", margin: "auto", width: "50%", marginTop: "20px"}}>
          <label htmlFor="password">Password:</label>
          <input 
            style={{width: "80%", marginLeft: "10px"}}
            name="password" 
            id="password" 
            type="password"
            className="form-control" 
            placeholder="Enter password" 
            value={this.state.password}
            onChange={this.changeHandler}
          />
        </div>

        <div className="form-group mt-4" style={{display:"flex", flexDirection: "row", margin: "auto", width: "50%", marginTop: "20px"}}>
          <label htmlFor="bio">Short bio:</label>
          <textarea 
            style={{width: "80%", marginLeft: "10px"}}
            name="bio" 
            id="bio" 
            type="text"
            className="form-control" 
            placeholder="Enter your short bio" 
            value={this.state.bio}
            onChange={this.changeHandler}
          />
        </div>

        <div className="form-group mt-4" style={{display:"flex", flexDirection: "row", margin: "auto", width: "50%", marginTop: "20px"}}>
          <label htmlFor="country">Choose your country:</label>
          <select 
            style={{width: "30%", marginLeft: "10px"}}
            name="country" 
            id="country" 
            type="text"
            className="form-control"  
            onChange={this.changeHandler}
          >
          <option value="">Choose your country</option>
          <option value="america">America</option>
          <option value="bangladesh">Bangladesh</option>
          <option value="canada">Canada</option>
          <option value="india">India</option>
          </select>
        </div>

        <div className="form-group" style={{margin: "auto", width: "50%", marginTop: "20px"}}>
        <label>Select your gender</label>
          <div className="form-check">
            <input
              name="gender" 
              id="gender1" 
              type="radio"
              value="male"
              onChange={this.changeHandler}
            />
            <label style={{marginLeft: "10px"}} htmlFor="gender1">Male</label>
          </div>

          <div className="form-check">
            <input
              name="gender" 
              id="gender2" 
              type="radio"
              value="female"
              onChange={this.changeHandler}
            />
            <label style={{marginLeft: "10px"}} htmlFor="gender2">Female</label>
          </div>

          <div className="form-check">
            <input
              name="gender" 
              id="gender3" 
              type="radio"
              value="other"
              onChange={this.changeHandler}
            />
            <label style={{marginLeft: "10px"}} htmlFor="gender3">Other</label>
          </div>
        </div>

        <div className="form-group" style={{margin: "auto", width: "50%", marginTop: "20px"}}>
        <label>Select your skills</label>
          <div className="form-check">
            <input 
              id="js" 
              type="checkbox"
              value="Javascript"
              className="form-check-input"
              onChange={this.changeHandler}
            />
            <label style={{marginLeft: "10px"}} htmlFor="gender1">Javascript</label>
          </div>

          <div className="form-check">
            <input
              id="react" 
              type="checkbox"
              value="React js"
              className="form-check-input"
              onChange={this.changeHandler}
            />
            <label style={{marginLeft: "10px"}} htmlFor="gender2">React js</label>
          </div>

          <div className="form-check">
            <input
              id="angular" 
              type="checkbox"
              value="Angular"
              className="form-check-input"
              onChange={this.changeHandler}
            />
            <label style={{marginLeft: "10px"}} htmlFor="gender3">Angular</label>
          </div>

          <div className="form-check">
            <input
              id="node" 
              type="checkbox"
              value="NodeJs"
              className="form-check-input"
              onChange={this.changeHandler}
            />
            <label style={{marginLeft: "10px"}} htmlFor="gender3">NodeJs</label>
          </div>
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    );
  }
}

export default App;
