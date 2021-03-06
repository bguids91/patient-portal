import React, { Component } from 'react'

class Navbar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const patient = this.props.patient
    return (
      <nav className="navbar sticky-top navbar-light">
        <a className='nav-brand' href='/home'>
          <img id="logo" src='images/logo_clipped_rev_3.png' width="70" height="70" className="d-inline-block" alt="" />
          <b>tandem</b> health portal </a>
        {patient
          ? (<span className='nav-name justify-content-end'>
            <button className="btn navbar-btn d-inline-block align-top"><a className="logoutlink" href='/'>Logout</a></button>{patient.first_name} {patient.last_name}</span>)
          : <div></div>}
      </nav>)
  }
}

export default Navbar
