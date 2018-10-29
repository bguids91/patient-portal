import React, { Component } from 'react'
import Immunization from './Immunization.jsx';

class Immunizations extends Component {

  render() {
    const immunizationsItems = this.props.immunizations.map(immunization => (
      <Immunization immunization={immunization} key={immunization.id} />
    ))

    return (
      <div>
        <h3 className='card-header'>Immunizations</h3>
        {immunizationsItems}
      </div>
    )
  }
}

export default Immunizations


