import React from 'react'
import PropTypes from 'prop-types'
import Section from 'presentation/Section'
import QuestionaryStore from 'stores/QuestionaryStore'
import RollOptionModel from 'models/RollOptionModel'
import QuestionRollHandler from '../QuestionRollHandler'

const Section5 = ({ questionaryStore }) => (
  <Section
    title={'Section 5: Determining Your Name Category'}
    description={
      'Kojima names fall into a finite number of categories. This section will determine the category in which your name belongs. NOTE: If you have a name +6 alternate names, you will do this section once to find your true name, and then you will have an alternate name in every other category.'
    }
  >
    <QuestionRollHandler
      question={
        '5. Roll a d20. Use this table to determine your name category. Once you have figured out your name category, you can skip ahead to the section that outlines the rules of your name.'
      }
      keyName={'5_1'}
      questionaryStore={questionaryStore}
      maxRoll={20}
      rollOptionModels={[
        new RollOptionModel([1, 1], 'You have a NORMAL NAME (See Section 6)'),
        new RollOptionModel([2, 6], 'You have an OCCUPATIONAL NAME (See Section 7)'),
        new RollOptionModel([7, 10], 'You have a HORNY NAME (See Section 8)'),
        new RollOptionModel([11, 13], 'You have a THE NAME (See Section 9)'),
        new RollOptionModel([14, 17], 'You have a COOL NAME (See Section 10)'),
        new RollOptionModel([18, 19], 'You have a VIOLENT NAME (See Section 11)'),
        new RollOptionModel([20, 20], 'You have a NAME THAT LACKS SUBTEXT (See Section 12)'),
      ]}
    />
  </Section>
)

Section5.propTypes = {
  questionaryStore: PropTypes.instanceOf(QuestionaryStore).isRequired,
}

export default Section5
