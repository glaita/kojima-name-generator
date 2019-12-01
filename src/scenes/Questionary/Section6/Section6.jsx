import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import Section from 'presentation/Section'
import QuestionaryStore from 'stores/QuestionaryStore'
import QuestionText from 'presentation/QuestionText'

const Section6 = observer(({ questionaryStore }) => (
  <Section
    title={'Section 6: NORMAL NAME'}
    description={
      'Kojima’s early work includes lots of characters that have names that are widely considered to be “normal”. Was this just because, in the early years, he didn’t have the power to say, “I’m Hideo Kojima,I can name someone Die-Hardman if I want to” without people questioning him? Probably.'
    }
  >
    <QuestionText
      question={
        'Your name is what you wrote on Section 2 Number 1 with any conditions added on Section 4:'
      }
      value={questionaryStore.hasNormalName ? questionaryStore.getName : ''}
      disabled
    />
  </Section>
))

Section6.propTypes = {
  questionaryStore: PropTypes.instanceOf(QuestionaryStore).isRequired,
}

export default Section6
