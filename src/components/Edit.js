import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    axios.get('/api/auth/'+this.props.match.params.id)
      .then(res => {
        this.setState({ user: res.data });
        console.log(this.state.user);
      });
  }

  onChange = (e) => {
    const state = this.state.user
    state[e.target.name] = e.target.value;
    this.setState({user:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { fullname,username } = this.state.user;

    axios.put('/api/auth/'+this.props.match.params.id, { fullname,username })
      .then((result) => {
        this.props.history.push("/show/"+this.props.match.params.id)
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              EDIT EMPLOYEE
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to={`/show/${this.state.user._id}`}><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Employee List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="inputName">Name:</label>
                <input type="text" class="form-control" name="fullname" value={this.state.user.fullname} onChange={this.onChange} placeholder="ISBN" />
              </div>
              <div class="form-group">
                <label for="inputEmail">Email:</label>
                <input type="email" class="form-control" name="username" value={this.state.user.username} onChange={this.onChange} placeholder="Title" />
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;