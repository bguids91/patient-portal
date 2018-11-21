import React, { Component } from 'react'
import Vitals from './Vitals.jsx'

class VitalsPage extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  componentDidMount() {
    this.getVitalsInfo()
  }

  fetch(endpoint) {
    return window.fetch(endpoint)
      .then(response => response.json())
      .catch(error => console.log(error))
  }

  getVitalsInfo() {
    this.fetch(`/api/patients/${this.props.patient.id}/vitals`)
      .then(vitals => {
        if (vitals.length) {
          const lastVital = vitals[vitals.length - 1]
          this.setState({ vitals: lastVital })
        } else {
          this.setState({ vitals: [] })
        }
      })
  }

  render() {
    let { vitals } = this.state
    let patient = this.props.patient

    return <div>
      <div className='med-info-card'>
        {vitals
          ? <Vitals vitals={this.state.vitals} />
          : <div className='container'> loading... </div>
        }
      </div>
    </div>
  }
}

export default VitalsPage