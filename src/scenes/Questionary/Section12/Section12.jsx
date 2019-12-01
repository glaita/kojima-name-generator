import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import Section from 'presentation/Section'
import QuestionaryStore from 'stores/QuestionaryStore'
import QuestionText from 'presentation/QuestionText'

const Section12 = observer(({ questionaryStore }) => (
  <Section
    title={'Section 12: NAME THAT LACKS SUBTEXT'}
    description={
      'Sometimes, Kojima gives up and just names a character exactly what they are. Congratulations. You are exactly what you do.'
    }
  >
    <QuestionText
      question={
        'Your Full Name is what you wrote on Section 2, Number 10 with any conditions added on Section 4:'
      }
      value={questionaryStore.getName}
      disabled
    />
  </Section>
))

Section12.propTypes = {
  questionaryStore: PropTypes.instanceOf(QuestionaryStore).isRequired,
}

export default Section12
