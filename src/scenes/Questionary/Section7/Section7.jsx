import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import Section from 'presentation/Section'
import QuestionaryStore from 'stores/QuestionaryStore'
import QuestionText from 'presentation/QuestionText'
import RollOptionModel from 'models/RollOptionModel'
import QuestionRollHandler from '../QuestionRollHandler'

const Section7 = observer(({ questionaryStore }) => (
  <Section
    title={'Section 7: OCCUPATIONAL NAME'}
    description={
      'Kojima’s characters tend to be driven by the work that they do.That often carries over to their names. You, too, can be nothing more than your job.'
    }
  >
    <QuestionRollHandler
      question={'1. Roll a d4. Use this table to determine your first name:'}
      keyName={'7_1'}
      questionaryStore={questionaryStore}
      maxRoll={4}
      rollOptionModels={[
        new RollOptionModel([1, 1], 'Your answer to Section 2, Number 15'),
        new RollOptionModel([2, 2], 'Your answer to Section 2, Number 6'),
        new RollOptionModel([3, 3], 'Your answer to Section 2, Number 13'),
        new RollOptionModel([4, 4], 'Your answer to Section 3, Number 16'),
      ]}
    />
    <QuestionText
      question={
        'Your First Name is define by your last roll, your Last Name is what you wrote on Section 2 Number 2a with any conditions added on Section 4:'
      }
      value={questionaryStore.getName}
      disabled
    />
  </Section>
))

Section7.propTypes = {
  questionaryStore: PropTypes.instanceOf(QuestionaryStore).isRequired,
}

export default Section7
