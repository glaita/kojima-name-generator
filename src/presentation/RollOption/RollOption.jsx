import React from 'react'
import PropTypes from 'prop-types'
import c from 'classnames'
import styles from './rollOption.scss'

const RollOption = ({ values, description, selected }) => {
  return (
    <div className={c(selected && styles.selected)}>
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
