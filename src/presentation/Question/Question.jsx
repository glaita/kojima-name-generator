import React from 'react'
import PropTypes from 'prop-types'

const Question = ({ question }) => <p>{question}</p>

Question.propTypes = {
  question: PropTypes.string.isRequired,
}

export default Question
