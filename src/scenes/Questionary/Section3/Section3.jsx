import React from 'react'
import PropTypes from 'prop-types'
import Section from 'presentation/Section'
import QuestionaryStore from 'stores/QuestionaryStore'
import QuestionTextHandler from '../QuestionTextHandler'

const Section3 = ({ questionaryStore }) => (
  <Section
    title={'Section 3: Kojima Information'}
    description={'Kojima character names reflect his own idiosyncrasies. He can’t help himself.'}
  >
    <QuestionTextHandler
      question={'16. Who is your favorite film character? (NOTE: must be played by Kurt Russell)'}
      keyName={'3_16'}
      questionaryStore={questionaryStore}
    />
    <QuestionTextHandler
      question={'17. What is the last word of the title of your favorite Kubrick film?'}
      keyName={'3_17'}
      questionaryStore={questionaryStore}
    />
    <QuestionTextHandler
      question={'18. What is the first word in the title of your favorite Joy Division album?'}
      keyName={'3_18'}
      questionaryStore={questionaryStore}
    />
    <QuestionTextHandler
      question={'19. What is a scientific term you picked up from listening to NPR once?'}
      keyName={'3_19'}
      questionaryStore={questionaryStore}
    />
    <QuestionTextHandler
      question={
        '20. What is a piece of military hardware you think looks cool even though war is bad?'
      }
      keyName={'3_20'}
      questionaryStore={questionaryStore}
    />
    <QuestionTextHandler
      question={'21. What is something you’d enjoy watching Mads Mikkelsen do?'}
      keyName={'3_21'}
      questionaryStore={questionaryStore}
    />
    <QuestionTextHandler
      question={'21a. Please condense into one word.'}
      keyName={'3_21a'}
      questionaryStore={questionaryStore}
    />
  </Section>
)

Section3.propTypes = {
  questionaryStore: PropTypes.instanceOf(QuestionaryStore).isRequired,
}

export default Section3
