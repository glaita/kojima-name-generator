import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styles from './section.scss'

const Section = ({ title, description, children }) => {
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
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
