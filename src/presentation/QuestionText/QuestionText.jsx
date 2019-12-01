import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Question from 'presentation/Question'
import styles from './questionText.scss'

const QuestionText = ({ question, handleChange, value, disabled }) => {
  return (
    <Fragment>
      <Question question={question} />
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          type={'text'}
          onChange={handleChange}
          value={value}
          disabled={disabled}
          autoComplete={'none'}
        />
      </div>
    </Fragment>
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
