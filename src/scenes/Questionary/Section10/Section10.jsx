import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import Section from 'presentation/Section'
import QuestionaryStore from 'stores/QuestionaryStore'
import QuestionText from 'presentation/QuestionText'
import RollOptionModel from 'models/RollOptionModel'
import QuestionRollHandler from '../QuestionRollHandler'

const Section10 = observer(({ questionaryStore }) => (
  <Section
    title={'Section 10: COOL NAME'}
    description={
      'Kojima loves to be cool. Sometimes, his idea of cool is a bit strange, but it is always cool to Hideo Kojima, and that’s what matters.'
    }
  >
    <QuestionRollHandler
      question={'1. Roll a d6. Use this table to determine your last name:'}
      keyName={'10_1'}
      questionaryStore={questionaryStore}
      maxRoll={6}
      rollOptionModels={[
        new RollOptionModel([1, 1], 'Your answer to Section 3, Number 17.'),
        new RollOptionModel([2, 2], 'Your answer to Section 3, Number 18.'),
        new RollOptionModel([3, 3], 'Your answer to Section 3, Number 19.'),
        new RollOptionModel([4, 4], 'Your answer to Section 2, Number 6.'),
        new RollOptionModel([5, 5], 'Your answer to Section 2, Number 8.'),
        new RollOptionModel([6, 6], 'Your answer to Section 2, Number 13.'),
      ]}
    />
    <QuestionText
      question={
        'Your First Name is what you wrote on Section 3, Number 21a, your Last Name is defined by your last roll with any conditions added on Section 4:'
      }
      value={questionaryStore.hasCoolName ? questionaryStore.getName : ''}
      disabled
    />
  </Section>
))

Section10.propTypes = {
  questionaryStore: PropTypes.instanceOf(QuestionaryStore).isRequired,
}

export default Section10
