import React from 'react'
import PropTypes from 'prop-types'
import Question from 'presentation/QuestionRoll'

const QuestionText = ({ question }) => {
  return (
    <div>
      <Question question={question} />
      <input type={'text'} />
    </div>
  )
}

QuestionText.propTypes = {
  question: PropTypes.string.isRequired,
}

export default QuestionText
