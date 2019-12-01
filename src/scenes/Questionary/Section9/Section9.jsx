import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import Section from 'presentation/Section'
import QuestionaryStore from 'stores/QuestionaryStore'
import QuestionText from 'presentation/QuestionText'
import RollOptionModel from 'models/RollOptionModel'
import QuestionRollHandler from '../QuestionRollHandler'

const Section9 = observer(({ questionaryStore }) => (
  <Section
    title={'Section 9: THE NAME'}
    description={
      'Kojima loves to make people have names that start with the word “The” and they usually symbolize fears or unstoppable forces. You are now that unstoppable force.'
    }
  >
    <QuestionRollHandler
      question={'1. Roll a d4. Use this table to determine your last name:'}
      keyName={'9_1'}
      questionaryStore={questionaryStore}
      maxRoll={4}
      rollOptionModels={[
        new RollOptionModel([1, 1], 'Your answer to Section 2, Number 8'),
        new RollOptionModel([2, 2], 'Your answer to Section 2, Number 9.'),
        new RollOptionModel([3, 3], 'Your answer is Section 2, Number 4a.'),
        new RollOptionModel([4, 4], 'Your answer to Section 3, Number 20.'),
      ]}
    />
    <QuestionText
      question={
        'Your First Name is "The", your Last Name is defined by your last roll with any conditions added on Section 4:'
      }
      value={questionaryStore.getName}
      disabled
    />
  </Section>
))

Section9.propTypes = {
  questionaryStore: PropTypes.instanceOf(QuestionaryStore).isRequired,
}

export default Section9
