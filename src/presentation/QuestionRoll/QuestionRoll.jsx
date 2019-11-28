import React from 'react'
import PropTypes from 'prop-types'
import Question from 'presentation/Question'

const QuestionRoll = ({ question, children }) => {
  return (
    <div>
      <Question question={question} />
      <table>{children}</table>
    </div>
  )
}

QuestionRoll.propTypes = {
  question: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default QuestionRoll
