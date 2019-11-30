import React, { useCallback } from 'react'
import { observer } from 'mobx-react'
import PropTypes from 'prop-types'
import QuestionaryStore from 'stores/QuestionaryStore'
import QuestionRoll from 'presentation/QuestionRoll'
import RollOption from 'presentation/RollOption'

const QuestionTextHandler = observer(
  ({ questionaryStore, question, keyName, rollOptionModels, maxRoll }) => {
    const handleChangeSection = useCallback(val => {
      questionaryStore.setSelectionValue(keyName, val)
    })
    const isRollOptionSelected = useCallback((ranges, value) => {
      if (value === '') {
        return false
      }

      if (value >= ranges[0] && value <= ranges[1]) {
        return true
      }

      return false
    })
    const options = rollOptionModels.map(rollOption => (
      <RollOption
        key={`${keyName}_${rollOption.valuesString}`}
        values={rollOption.valuesString}
        description={rollOption.description}
        selected={isRollOptionSelected(rollOption.values, questionaryStore.selections.get(keyName))}
      />
    ))

    return (
      <QuestionRoll question={question} handleChange={handleChangeSection} maxRoll={maxRoll}>
        {options}
      </QuestionRoll>
    )
  }
)

QuestionTextHandler.propTypes = {
  questionaryStore: PropTypes.instanceOf(QuestionaryStore).isRequired,
  question: PropTypes.string.isRequired,
  keyName: PropTypes.string.isRequired,
  maxRoll: PropTypes.number.isRequired,
  rollOptionModels: PropTypes.array.isRequired,
}

export default QuestionTextHandler
