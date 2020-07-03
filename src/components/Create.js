import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.state = {
      fullname: '',
      username: '',
      password: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { fullname,username,password } = this.state;

    axios.post('/api/create', { fullname,username,password })
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    const { fullname,username,password } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              ADD EMPLOYEE
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Employee List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="inputName">Full Name</label>
                <input type="text" class="form-control" placeholder="Full Name" name="fullname" value={fullname} onChange={this.onChange} required/>
              </div>
              <div class="form-group">
                <label for="inputEmail" >Email address</label>
                <input type="email" class="form-control" placeholder="Email address" name="username" value={username} onChange={this.onChange} required/>
              </div>
              <div class="form-group">
                <label for="inputPassword">Password</label>
                <input type="password" class="form-control" placeholder="Password" name="password" value={password} onChange={this.onChange} required/>
              </div>
              <button type="submit" class="btn btn-lg btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;