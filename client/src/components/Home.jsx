import React, { Component } from 'react'
import AppointmentList from './AppointmentList.jsx'
import MedicalInfo from './MedicalInfo.jsx'
import PropTypes from 'prop-types'

class Home extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  static contextTypes = {
    router: PropTypes.object
  }

  redirectToTarget = () => {
    this.context.router.history.push(`/login`)
  }

  componentDidMount() {
    if ( this.state.patient ) {
      this.getAppointments('upcoming')
      this.getAppointments('completed')
    } else {
      this.redirectToTarget()
    }
  }

  fetch(endpoint) {
    return window.fetch(endpoint)
      .then(response => response.json())
      .catch(error => console.log(error))
  }

  deleteAppointment = (id) => {
    fetch(`/api/patients/${this.props.patient.id}/appointments/${id}`, {
      method: 'DELETE',
    }).then(() => {
      const appt = this.state.upcomingAppointments
      const newAppt = appt.filter(app => app.id !== id)
      this.setState({ upcomingAppointments: newAppt })
    })
  }

  getAppointments(status) {
    this.fetch(`/api/patients/${this.state.patient}/appointments/`)
      .then(appointments => {
        if (appointments.length) {
          const appts = appointments.filter(app => app.status === status)
          if (status === 'completed') {
            this.setState({ completedAppointments: appts })
          } else {
            this.setState({ upcomingAppointments: appts })
          }
        }
      })
  }

  render() {
    let { completedAppointments, upcomingAppointments } = this.state
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-8'>
          <a className='btn btn-primary' href='/bookingCalendar' role='button'>Book Appointment</a>
          <h2>Upcoming Appointments</h2>
          {upcomingAppointments && upcomingAppointments.length
              ? (<AppointmentList deleteAppointment={this.deleteAppointment} appointments={this.state.upcomingAppointments} patient={this.state.patient} status={'upcoming'} />)
            : <div className='container'>No appointments found.</div>}
          <h2>Previous Appointments</h2>
          {completedAppointments && completedAppointments.length
            ? <AppointmentList appointments={this.state.completedAppointments} status={'completed'} />
            : <div className='container'>No appointments found.</div>}
          </div>
          <div className='col-4'>
            <MedicalInfo patient={this.state.patient} />
          </div>
        </div>
      </div>
    )
  }
}

export default Home
