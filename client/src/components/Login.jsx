import React, { Component } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'


class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static contextTypes = {
    router: PropTypes.object
  }

  componentDidMount() {

  }

  handleSubmit = event => {
    event.preventDefault()

    axios.post(`/api/login/`, { email: event.target.email.value, password: event.target.password.value })
      .then(res => {
        console.log(res)
        console.log(res.data)
        this.setState({ login_patient: res.data })
        let patient = res.data
        this.props.updatePatientInState(patient)
        axios.get(`/api/patients/${patient.id}/conditions`)
        .then(res2 => {
          let conditions = res2.data
          this.props.updateConditionsInState(conditions)
          })
        console.log('Now we do the redirect')
        this.context.router.history.push(`/home`)
        // this.redirectToTarget()
      })
  }

  render () {
    let { patient } = this.state
    return <div  className='container'>
    <div className='row'>
    <div className='col-md-5 main'>
      <h2>Please login</h2>
      
      <form onSubmit={this.handleSubmit} className='form-group'>
      <input className='form-control textarea' type="text" name="email" placeholder="example@example.com"></input>
      <input className='form-control textarea' type="password" name="password" placeholder="Type your password"></input>
      <br />
      <p>Are you a new user? <a href='#'>Learn more</a> about our registration process.</p>
      
      <button className='btn btn-primary' type="submit" value="Submit">Login</button>
      </form>
      </div>
    </div>
    </div>
  }
}

export default Login
