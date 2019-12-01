import React, { Fragment } from 'react'
import QuestionaryStore from 'stores/QuestionaryStore'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'
import Section7 from './Section7'
import Section8 from './Section8'
import Section9 from './Section9'
import Section10 from './Section10'
import Section11 from './Section11'
import Section12 from './Section12'

class Questionary extends React.Component {
  constructor(props) {
    super(props)

    this.questionaryStore = new QuestionaryStore()
  }

  render() {
    return (
      <Fragment>
        <Section1 questionaryStore={this.questionaryStore} />
        <Section2 questionaryStore={this.questionaryStore} />
        <Section3 questionaryStore={this.questionaryStore} />
        <Section4 questionaryStore={this.questionaryStore} />
        <Section5 questionaryStore={this.questionaryStore} />
        <Section6 questionaryStore={this.questionaryStore} />
        <Section7 questionaryStore={this.questionaryStore} />
        <Section8 questionaryStore={this.questionaryStore} />
        <Section9 questionaryStore={this.questionaryStore} />
        <Section10 questionaryStore={this.questionaryStore} />
        <Section11 questionaryStore={this.questionaryStore} />
        <Section12 questionaryStore={this.questionaryStore} />
      </Fragment>
    )
  }
}

Questionary.propTypes = {}

export default Questionary
