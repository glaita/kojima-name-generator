import React from 'react'
import PropTypes from 'prop-types'

const RollOption = ({ values, description, selected }) => {
  return (
    <div>
      <div>{values}</div>
      <div>{description}</div>
    </div>
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
