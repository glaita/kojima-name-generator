import React from 'react'
import PropTypes from 'prop-types'

const RollOption = ({ values, description, selected }) => {
  return (
    <tr>
      <td>{values}</td>
      <td>{description}</td>
    </tr>
  )
}

RollOption.propTypes = {
  values: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  selected: PropTypes.bool,
}

RollOption.defaultProps = {
  selected: false,
}

export default RollOption
