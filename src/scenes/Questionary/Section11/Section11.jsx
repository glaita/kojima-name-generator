import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import Section from 'presentation/Section'
import QuestionaryStore from 'stores/QuestionaryStore'
import QuestionText from 'presentation/QuestionText'
import RollOptionModel from 'models/RollOptionModel'
import QuestionRollHandler from '../QuestionRollHandler'

const Section11 = observer(({ questionaryStore }) => (
  <Section
    title={'Section 11: VIOLENT NAME'}
    description={
      'Sometimes, a Kojima name can be very threatening and violent, like Sniper Wolf, or The Fury. Now you can also be threatening and violent.'
    }
  >
    <QuestionRollHandler
      question={'1. Roll a d4. Use this table to determine your last name:'}
      keyName={'11_1'}
      questionaryStore={questionaryStore}
      maxRoll={4}
      rollOptionModels={[
        new RollOptionModel([1, 1], 'Your answer to Section 3, Number 19.'),
        new RollOptionModel([2, 2], 'Your answer to Section 2, Number 12.'),
        new RollOptionModel([3, 3], 'Your answer to Section 3, Number 20.'),
        new RollOptionModel([4, 4], 'Your answer to Section 2, Number 9.'),
      ]}
    />
    <QuestionText
      question={
        'Your Last Name is what you wrote on Section 3, Number 5, your First Name is defined by your last roll:'
      }
      value={questionaryStore.getName}
      disabled
    />
  </Section>
))

Section11.propTypes = {
  questionaryStore: PropTypes.instanceOf(QuestionaryStore).isRequired,
}

export default Section11
