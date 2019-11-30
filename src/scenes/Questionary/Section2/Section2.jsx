import React from 'react'
import PropTypes from 'prop-types'
import Section from 'presentation/Section'
import QuestionaryStore from 'stores/QuestionaryStore'
import QuestionTextHandler from '../QuestionTextHandler'

const Section2 = ({ questionaryStore }) => (
  <Section
    title={'Section 2: Personal Information'}
    description={
      'Kojima’s characters have names that are directly related to their own character traits. This information will make sure your name fits your personality.'
    }
  >
    <QuestionTextHandler
      question={'1. What is your full name?'}
      keyName={'2_1'}
      questionaryStore={questionaryStore}
    />
    <QuestionTextHandler
      question={'2. What do you do at your occupation?'}
      keyName={'2_2'}
      questionaryStore={questionaryStore}
    />
    <QuestionTextHandler
      question={
        '2a. Condense the verb in your answer into a single -er noun. (e.g. if youare a sheep farmer, your answer will be “farmer”)'
      }
      keyName={'2_2a'}
      questionaryStore={questionaryStore}
    />
    <QuestionTextHandler
      question={
        '3. What was your first pet’s specific species/breed? If you never had a pet,please answer with an animal you wish you owned.'
      }
      keyName={'2_3'}
      questionaryStore={questionaryStore}
    />
    <QuestionTextHandler
      question={'4. What’s your most embarrassing childhood memory? Be specific.'}
      keyName={'2_4'}
      questionaryStore={questionaryStore}
    />
    <QuestionTextHandler
      question={'4a. Condense this story into two words.'}
      keyName={'2_4a'}
      questionaryStore={questionaryStore}
    />
    <QuestionTextHandler
      question={'5. What is the object you’d least like to be stabbed by?'}
      keyName={'2_5'}
      questionaryStore={questionaryStore}
    />
    <QuestionTextHandler
      question={'6. What is something you are good at? (Verb ending in -ing)'}
      keyName={'2_6'}
      questionaryStore={questionaryStore}
    />
    <QuestionTextHandler
      question={
        '7. How many carrots do you believe you could eat in one sitting, if someone, like, forced you to eat as many carrots as possible?'
      }
      keyName={'2_7'}
      questionaryStore={questionaryStore}
    />
    <QuestionTextHandler
      question={'8. What is your greatest intangible fear? (e.g. death, loneliness, fear itself)'}
      keyName={'2_8'}
      questionaryStore={questionaryStore}
    />
    <QuestionTextHandler
      question={'9. What is your greatest tangible fear? (e.g. horses)'}
      keyName={'2_9'}
      questionaryStore={questionaryStore}
    />
    <QuestionTextHandler
      question={'10. What is the last thing you did before starting this worksheet?'}
      keyName={'2_10'}
      questionaryStore={questionaryStore}
    />
    <QuestionTextHandler
      question={'11. What condition is your body currently in? (single word answer)'}
      keyName={'2_11'}
      questionaryStore={questionaryStore}
    />
    <QuestionTextHandler
      question={'12. Favorite state of matter?'}
      keyName={'2_12'}
      questionaryStore={questionaryStore}
    />
    <QuestionTextHandler
      question={'13. A word your name kind of sounds like? (e.g. Brian -> Brain)'}
      keyName={'2_13'}
      questionaryStore={questionaryStore}
    />
    <QuestionTextHandler
      question={'14. What is your Zodiac sign?'}
      keyName={'2_14'}
      questionaryStore={questionaryStore}
    />
    <QuestionTextHandler
      question={'15. If you had to define your personality in one word, what would it be?'}
      keyName={'2_15'}
      questionaryStore={questionaryStore}
    />
  </Section>
)

Section2.propTypes = {
  questionaryStore: PropTypes.instanceOf(QuestionaryStore).isRequired,
}

export default Section2
