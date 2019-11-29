import React, { useCallback } from 'react'
import { observer } from 'mobx-react'
import PropTypes from 'prop-types'
import QuestionaryStore from 'stores/QuestionaryStore'
import QuestionRoll from 'presentation/QuestionRoll'

const QuestionTextHandler = observer(
  ({ questionaryStore, question, keyName, children, maxRoll }) => {
    const handleChangeSection = useCallback(val => {
      questionaryStore.setSelectionValue(keyName, val)
    })

    return (
      <QuestionRoll question={question} handleChange={handleChangeSection} maxRoll={maxRoll}>
        {children}
      </QuestionRoll>
    )
  }
)

QuestionTextHandler.propTypes = {
  questionaryStore: PropTypes.instanceOf(QuestionaryStore).isRequired,
  question: PropTypes.string.isRequired,
  keyName: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  maxRoll: PropTypes.number.isRequired,
}

export default QuestionTextHandler
