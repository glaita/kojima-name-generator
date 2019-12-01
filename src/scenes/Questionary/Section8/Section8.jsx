import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import Section from 'presentation/Section'
import QuestionaryStore from 'stores/QuestionaryStore'
import QuestionText from 'presentation/QuestionText'
import RollOptionModel from 'models/RollOptionModel'
import QuestionRollHandler from '../QuestionRollHandler'

const Section8 = observer(({ questionaryStore }) => (
  <Section
    title={'Section 8: HORNY NAME'}
    description={
      'Kojima’s characters and stories are irrevocably horny. Weirdly horny, sure, but horny nonetheless.'
    }
  >
    <QuestionRollHandler
      question={'1: Roll a d4. Use this table to determine your first name:'}
      keyName={'8_1'}
      questionaryStore={questionaryStore}
      maxRoll={4}
      rollOptionModels={[
        new RollOptionModel([1, 1], 'Your answer to Section 2, Number 12.'),
        new RollOptionModel([2, 2], 'Your first name is “Naked.”'),
        new RollOptionModel([3, 3], 'Your answer is Section 2, Number 6.'),
        new RollOptionModel([4, 4], 'Your answer to Section 2, Number 14.'),
      ]}
    />
    <QuestionText
      question={
        'Your First Name is define by your last roll, your Last Name is what you wrote on Section 2 Number 3 with any conditions added on Section 4: (you can add "Lickable" as a Middle Name, i won\'t stop you)'
      }
      value={questionaryStore.hasHornyName ? questionaryStore.getName : ''}
      disabled
    />
  </Section>
))

Section8.propTypes = {
  questionaryStore: PropTypes.instanceOf(QuestionaryStore).isRequired,
}

export default Section8
