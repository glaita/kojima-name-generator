import React, { Fragment } from 'react'
import { observer } from 'mobx-react'
import QuestionaryStore from 'stores/QuestionaryStore'
import Section from 'presentation/Section'
import Question from 'presentation/Question'
import RollOption from 'presentation/RollOption'
import RollOptionModel from 'models/RollOptionModel'
import Section2 from './Section2'
import Section3 from './Section3'
import QuestionRollHandler from './QuestionRollHandler'

@observer
class Questionary extends React.Component {
  constructor(props) {
    super(props)

    this.questionaryStore = new QuestionaryStore()
  }

  render() {
    return (
      <Fragment>
        <Section
          title={'Section 1: Determining How Many Names You Have'}
          description={
            'Kojima often creates characters that have many alternate names, so we must first figure out how many names you will have.'
          }
        >
          <QuestionRollHandler
            question={'1. Roll a d6. Use this table to determine how many names you have:'}
            keyName={'1_1'}
            questionaryStore={this.questionaryStore}
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
        <Section2 questionaryStore={this.questionaryStore} />
        <Section3 questionaryStore={this.questionaryStore} />
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
            questionaryStore={this.questionaryStore}
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
            questionaryStore={this.questionaryStore}
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
            questionaryStore={this.questionaryStore}
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
            questionaryStore={this.questionaryStore}
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
            questionaryStore={this.questionaryStore}
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
      </Fragment>
    )
  }
}

Questionary.propTypes = {}

export default Questionary
