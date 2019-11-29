import React from 'react'
import PropTypes from 'prop-types'
import Question from 'presentation/Question'

const QuestionText = ({ question, handleChange, value }) => {
  return (
    <div>
      <Question question={question} />
      <input type={'text'} onChange={handleChange} value={value} />
    </div>
  )
}

QuestionText.propTypes = {
  question: PropTypes.string.isRequired,
  handleChange: PropTypes.func,
  value: PropTypes.string,
}

QuestionText.defaultProps = {
  handleChange: null,
  value: '',
}

export default QuestionText
