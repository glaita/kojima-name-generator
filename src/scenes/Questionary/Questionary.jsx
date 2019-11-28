import React, { Fragment } from 'react'
import QuestionaryStore from 'stores/QuestionaryStore'
import QuestionRoll from 'presentation/QuestionRoll'
import Section from 'presentation/Section'
import Question from 'presentation/Question'
import QuestionText from 'presentation/QuestionText'
import RollOption from 'presentation/RollOption'

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
          <QuestionRoll
            question={'1. Roll a d6. Use this table to determine how many names you have:'}
          >
            <RollOption values={'1,5'} description={'You have 1 name.'} />
            <RollOption values={'6'} description={'You have 1 name + 6 other alternate names.'} />
          </QuestionRoll>
          <Question
            question={
              '2. If you rolled a 6, you must do this worksheet 6 more times. You do not need to complete Sections 1-3 on subsequent name generations.'
            }
          />
        </Section>
        <Section
          title={'Section 2: Personal Information'}
          description={
            'Kojima’s characters have names that are directly related to their own character traits. This information will make sure your name fits your personality.'
          }
        >
          <QuestionText question={'1. What is your full name?'} />
          <QuestionText question={'2. What do you do at your occupation?'} />
          <QuestionText
            question={
              '2a. Condense the verb in your answer into a single -er noun. (e.g. if youare a sheep farmer, your answer will be “farmer”)'
            }
          />
          <QuestionText
            question={
              '3. What was your first pet’s specific species/breed? If you never had a pet,please answer with an animal you wish you owned.'
            }
          />
          <QuestionText
            question={'4. What’s your most embarrassing childhood memory? Be specific.'}
          />
          <QuestionText question={'4a. Condense this story into two words.'} />
          <QuestionText question={'5. What is the object you’d least like to be stabbed by?'} />
          <QuestionText question={'6. What is something you are good at? (Verb ending in -ing)'} />
          <QuestionText
            question={
              '7. How many carrots do you believe you could eat in one sitting, if someone, like, forced you to eat as many carrots as possible?'
            }
          />
          <QuestionText
            question={
              '8. What is your greatest intangible fear? (e.g. death, loneliness, fear itself)'
            }
          />
          <QuestionText question={'9. What is your greatest tangible fear? (e.g. horses)'} />
          <QuestionText
            question={'10. What is the last thing you did before starting this worksheet?'}
          />
          <QuestionText
            question={'11. What condition is your body currently in? (single word answer)'}
          />
          <QuestionText question={'12. Favorite state of matter?'} />
          <QuestionText
            question={'13. A word your name kind of sounds like? (e.g. Brian -> Brain)'}
          />
          <QuestionText question={'14. What is your Zodiac sign?'} />
          <QuestionText
            question={'15. If you had to define your personality in one word, what would it be?'}
          />
        </Section>
        <Section
          title={'Section 3: Kojima Information'}
          description={
            'Kojima character names reflect his own idiosyncrasies. He can’t help himself.'
          }
        >
          <QuestionText
            question={
              '16. Who is your favorite film character? (NOTE: must be played by Kurt Russell)'
            }
          />
          <QuestionText
            question={'17. What is the last word of the title of your favorite Kubrick film?'}
          />
          <QuestionText
            question={
              '18. What is the first word in the title of your favorite Joy Division album?'
            }
          />
          <QuestionText
            question={'19.What is a scientific term you picked up from listening to NPR once?'}
          />
          <QuestionText
            question={
              '20. What is a piece of military hardware you think looks cool even though war is bad?'
            }
          />
          <QuestionText
            question={'21. What is something you’d enjoy watching Mads Mikkelsen do?'}
          />
          <QuestionText question={'21a. Please condense into one word.'} />
        </Section>
        <Section
          title={'Section 4: Determining Your Name Conditions'}
          description={
            'Sometimes, a character will have a plot-based condition that affects their name. You, too, might have a condition that affects your name. Conditions can stack, so please make note of how many your name has.'
          }
        >
          <QuestionRoll
            question={
              '1. THE -MAN CONDITION: Roll a d4. Use this table to determine whether you have this condition:'
            }
          >
            <RollOption values={'1-3'} description={'You do not have this condition.'} />
            <RollOption
              values={'4'}
              description={
                'You have this condition. Your last name will include the suffix-man. If your name already has -man at the end of it, I guess you’re just going to have -manman at the end of your name.'
              }
            />
          </QuestionRoll>
          <QuestionRoll
            question={
              '2. THE CONDITION CONDITION: Roll a d8. Use this table to determine your what this condition will do to you:'
            }
          >
            <RollOption values={'1-5'} description={'You do not have this condition.'} />
            <RollOption
              values={'6'}
              description={'You’re big. Your name must have “Big” at the beginning of it.'}
            />
            <RollOption
              values={'7'}
              description={
                'You are older than you once were. Your name must have “Old” at the beginning of it.'
              }
            />
            <RollOption
              values={'8'}
              description={
                'You are how you currently are. Please add your answer from Section2, Number 11 to the beginning of your name.'
              }
            />
          </QuestionRoll>
          <QuestionRoll
            question={
              'THE CLONE CONDITION: Roll a d12. Use this table to determine if you have this condition'
            }
          >
            <RollOption values={'1-11'} description={'You do not have this condition.'} />
            <RollOption
              values={'12'}
              description={
                'You are a clone of someone else, or you have been brainwashed into becoming a mental doppelganger of someone else. Find someone who has completed this worksheet and replace 50% of your Kojima name with 50% of their Kojima name.'
              }
            />
          </QuestionRoll>
          <QuestionRoll
            question={
              '4. THE KOJIMA CONDITION: Roll a d100 (or two d10s, using one as the 1s place and the other as the 10s place.) Use this table to determine if you have this condition'
            }
          >
            <RollOption values={'1-68 70-100'} description={'You do not have this condition.'} />
            <RollOption
              values={'69'}
              description={
                'Oh no. You are Hideo Kojima. Hideo Kojima created you and is also you. You are the man who created himself and there is nothing you can do about it. You’re in Kojima’s world—your world—and that’s just the breaks, pal. Stop this worksheet now. You’re Hideo Kojima. Go do the things that Hideo Kojima does.'
              }
            />
          </QuestionRoll>
        </Section>
        <Section
          title={'Section 5: Determining Your Name Category'}
          description={
            'Kojima names fall into a finite number of categories. This section will determine the category in which your name belongs. NOTE: If you have a name +6 alternate names, you will do this section once to find your true name, and then you will have an alternate name in every other category.'
          }
        >
          <QuestionRoll
            question={
              '5. Roll a d20. Use this table to determine your name category. Once you have figured out your name category, you can skip ahead to the section that outlines the rules of your name.'
            }
          >
            <RollOption values={'1'} description={'You have a NORMAL NAME (See Section 6)'} />
            <RollOption
              values={'2-6'}
              description={'You have an OCCUPATIONAL NAME (See Section 7)'}
            />
            <RollOption values={'7-10'} description={'You have a HORNY NAME (See Section 8)'} />
            <RollOption values={'11-13'} description={'You have a THE NAME (See Section 9)'} />
            <RollOption values={'14-17'} description={'You have a COOL NAME (See Section 10)'} />
            <RollOption values={'18-19'} description={'You have a VIOLENT NAME (See Section 11)'} />
            <RollOption
              values={'20'}
              description={'You have a NAME THAT LACKS SUBTEXT (See Section 12)'}
            />
          </QuestionRoll>
        </Section>
      </Fragment>
    )
  }
}

Questionary.propTypes = {}

export default Questionary
