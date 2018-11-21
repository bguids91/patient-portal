import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Vitals extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  static contextTypes = {
    router: PropTypes.object
  }

  render() {
    const vitals = this.props.vitals
    const GoToVitalsPage = e => {
      e.preventDefault()
      this.context.router.history.push(`/vitals`)
    }

    return (
      <div>
        <h2 className='card-header'>Vitals<button className="btn book-apt" onClick={GoToVitalsPage}>View</button></h2>
        <div className='card-body med-info'>
          <p><span>Blood pressure - systolic: </span> <span>{vitals.bp_s}</span><br />
            <span>Blood pressure -  diastolic: </span> <span>{vitals.bp_d}</span><br />
            <span>Weight (kg): </span> <span>{vitals.weight_kg}</span><br />
            <span>Height (cm): </span> <span>{vitals.height_cm}</span><br />
            <span>Temperature (°C): </span> <span>{vitals.temperature_c}</span><br />
            <span>Pulse: </span> <span>{vitals.pulse}</span><br />
            <span>BMI: </span> <span>{vitals.bmi}</span><br />
            <span>Date: </span> <span>{vitals.date}</span></p>
        </div>
      </div>
    )
  }
}
export default Vitals
