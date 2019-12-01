import React from 'react'
import PropTypes from 'prop-types'
import styles from './question.scss'

const Question = ({ question }) => <p className={styles.question}>{question}</p>

Question.propTypes = {
  question: PropTypes.string.isRequired,
}

export default Question
