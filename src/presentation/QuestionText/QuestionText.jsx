import React from 'react'
import PropTypes from 'prop-types'
import Question from 'presentation/Question'

const QuestionText = ({ question, handleChange, value, disabled }) => {
  return (
    <div>
      <Question question={question} />
      <input type={'text'} onChange={handleChange} value={value} disabled={disabled} />
    </div>
  )
}

QuestionText.propTypes = {
  question: PropTypes.string.isRequired,
  handleChange: PropTypes.func,
  value: PropTypes.string,
    disabled: PropTypes.bool,
}

QuestionText.defaultProps = {
  handleChange: null,
  value: '',
  disabled: false,
}

export default QuestionText
