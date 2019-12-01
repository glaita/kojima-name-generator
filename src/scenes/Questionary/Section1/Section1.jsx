import React from 'react'
import PropTypes from 'prop-types'
import Section from 'presentation/Section'
import QuestionaryStore from 'stores/QuestionaryStore'
import RollOptionModel from 'models/RollOptionModel'
import Question from 'presentation/Question'
import QuestionRollHandler from '../QuestionRollHandler'

const Section1 = ({ questionaryStore }) => (
  <Section
    title={'Section 1: Determining How Many Names You Have'}
    description={
      'Kojima often creates characters that have many alternate names, so we must first figure out how many names you will have.'
    }
  >
    <QuestionRollHandler
      question={'1. Roll a d6. Use this table to determine how many names you have:'}
      keyName={'1_1'}
      questionaryStore={questionaryStore}
      maxRoll={6}
      rollOptionModels={[
        new RollOptionModel([1, 5], 'You have 1 name.'),
        new RollOptionModel([6, 6], 'You have 1 name + 6 other alternate names.'),
      ]}
    />
    <Question
      question={
        '2. If you rolled a 6, you must do this worksheet 6 more times. You do not need to complete Sections 1-3 on subsequent name generations.'
      }
    />
  </Section>
)

Section1.propTypes = {
  questionaryStore: PropTypes.instanceOf(QuestionaryStore).isRequired,
}

export default Section1
