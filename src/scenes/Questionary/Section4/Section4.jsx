import React from 'react'
import PropTypes from 'prop-types'
import Section from 'presentation/Section'
import QuestionaryStore from 'stores/QuestionaryStore'
import RollOptionModel from 'models/RollOptionModel'
import QuestionRollHandler from '../QuestionRollHandler'

const Section4 = ({ questionaryStore }) => (
  <Section
    title={'Section 4: Determining Your Name Conditions'}
    description={
      'Sometimes, a character will have a plot-based condition that affects their name. You, too, might have a condition that affects your name. Conditions can stack, so please make note of how many your name has.'
    }
  >
    <QuestionRollHandler
      question={
        '1. THE -MAN CONDITION: Roll a d4. Use this table to determine whether you have this condition:'
      }
      keyName={'4_1'}
      questionaryStore={questionaryStore}
      maxRoll={4}
      rollOptionModels={[
        new RollOptionModel([1, 3], 'You do not have this condition.'),
        new RollOptionModel(
          [4, 4],
          'You have this condition. Your last name will include the suffix-man. If your name already has -man at the end of it, I guess you’re just going to have -manman at the end of your name.'
        ),
      ]}
    />
    <QuestionRollHandler
      question={
        '2. THE CONDITION CONDITION: Roll a d8. Use this table to determine your what this condition will do to you:'
      }
      keyName={'4_2'}
      questionaryStore={questionaryStore}
      maxRoll={8}
      rollOptionModels={[
        new RollOptionModel([1, 5], 'You do not have this condition.'),
        new RollOptionModel(
          [6, 6],
          'You’re big. Your name must have “Big” at the beginning of it.'
        ),
        new RollOptionModel(
          [7, 7],
          'You are older than you once were. Your name must have “Old” at the beginning of it.'
        ),
        new RollOptionModel(
          [8, 8],
          'You are how you currently are. Please add your answer from Section2, Number 11 to the beginning of your name.'
        ),
      ]}
    />
    <QuestionRollHandler
      question={
        '3. THE CLONE CONDITION: Roll a d12. Use this table to determine if you have this condition'
      }
      keyName={'4_3'}
      questionaryStore={questionaryStore}
      maxRoll={12}
      rollOptionModels={[
        new RollOptionModel([1, 11], 'You do not have this condition.'),
        new RollOptionModel(
          [12, 12],
          'You are a clone of someone else, or you have been brainwashed into becoming a mental doppelganger of someone else. Find someone who has completed this worksheet and replace 50% of your Kojima name with 50% of their Kojima name.'
        ),
      ]}
    />
    <QuestionRollHandler
      question={
        '4. THE KOJIMA CONDITION: Roll a d100 (or two d10s, using one as the 1s place and the other as the 10s place.) Use this table to determine if you have this condition'
      }
      keyName={'4_4'}
      questionaryStore={questionaryStore}
      maxRoll={100}
      rollOptionModels={[
        new RollOptionModel([1, 68], 'You do not have this condition.'),
        new RollOptionModel(
          [69, 69],
          'Oh no. You are Hideo Kojima. Hideo Kojima created you and is also you. You are the man who created himself and there is nothing you can do about it. You’re in Kojima’s world—your world—and that’s just the breaks, pal. Stop this worksheet now. You’re Hideo Kojima. Go do the things that Hideo Kojima does.'
        ),
        new RollOptionModel([70, 100], 'You do not have this condition.'),
      ]}
    />
  </Section>
)

Section4.propTypes = {
  questionaryStore: PropTypes.instanceOf(QuestionaryStore).isRequired,
}

export default Section4
