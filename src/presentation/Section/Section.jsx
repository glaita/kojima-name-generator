import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const Section = ({ title, description, children }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <Fragment>{children}</Fragment>
    </div>
  )
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Section
