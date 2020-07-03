import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Show extends Component {

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

  delete(id){
    console.log(id);
    axios.delete('/api/auth/'+id)
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              {this.state.user.fullname}
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Employee List</Link></h4>
            <dl>
              <dt>ID:</dt>
              <dd>{this.state.user._id}</dd>
              <dt>Full Name:</dt>
              <dd>{this.state.user.fullname}</dd>
              <dt>Username:</dt>
              <dd>{this.state.user.username}</dd>
              <dt>Site ID:</dt>
              <dd>{this.state.user.site_id}</dd>
              <dt>Attendance Status (Today) :</dt>
              <dd>{this.state.user.attendance_status}</dd>
              <dt>Attendance Percentage : </dt>
              <dd>{this.state.user.attendance_per}</dd>
            </dl>
            <Link to={`/edit/${this.state.user._id}`} class="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.user._id)} class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;