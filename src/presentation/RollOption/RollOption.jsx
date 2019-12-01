import React from 'react'
import PropTypes from 'prop-types'
import c from 'classnames'
import styles from './rollOption.scss'

const RollOption = ({ values, description, selected }) => {
  return (
    <div className={c(styles.tableItem, selected && styles.selected)}>
      <div className={styles.values}>{values}</div>
      <div className={styles.description}>{description}</div>
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
