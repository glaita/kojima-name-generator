import React, { useCallback } from 'react'
import { observer } from 'mobx-react'
import PropTypes from 'prop-types'
import QuestionaryStore from 'stores/QuestionaryStore'
import QuestionText from 'presentation/QuestionText'

const QuestionTextHandler = observer(({ questionaryStore, question, keyName }) => {
  const handleChangeSection = useCallback(e => {
    questionaryStore.setSelectionValue(keyName, e.target.value)
  })

  return (
    <QuestionText
      question={question}
      handleChange={handleChangeSection}
      value={questionaryStore.selections.get(keyName)}
    />
  )
})

QuestionTextHandler.propTypes = {
  questionaryStore: PropTypes.instanceOf(QuestionaryStore).isRequired,
  question: PropTypes.string.isRequired,
  keyName: PropTypes.string.isRequired,
}

export default QuestionTextHandler
