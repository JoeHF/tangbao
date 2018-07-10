import React from 'react';
import Core from '../../utils/core'
// import '../../styles/gaode.css'

const GaodeKey='https://webapi.amap.com/maps?v=1.4.8&key=87ca400f9fd1529537613c80098dde4b';
class Gaode extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
    this.inputHandler = this.inputHandler.bind(this)
  }

  inputHandler(e) {
    this.setState({name: e.target.value})
  }

  render() {
    return (
      <div class="jumbotron">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

export default Gaode;
