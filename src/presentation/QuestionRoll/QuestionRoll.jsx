import React from 'react'
import PropTypes from 'prop-types'
import Question from 'presentation/Question'
import Dice from 'presentation/Dice'

const QuestionRoll = ({ question, handleChange, maxRoll, children }) => {
  return (
    <div>
      <Question question={question} />
      <div>{children}</div>
      <Dice handleChange={handleChange} maxRoll={maxRoll} />
    </div>
  )
}

QuestionRoll.propTypes = {
  handleChange: PropTypes.func.isRequired,
  question: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  maxRoll: PropTypes.number,
}

QuestionRoll.defaultProps = {
  maxRoll: 2,
}

export default QuestionRoll
