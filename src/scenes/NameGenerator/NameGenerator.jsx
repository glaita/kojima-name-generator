import React, { Fragment } from 'react'
import PageTitle from 'presentation/PageTitle'
import Questionary from 'scenes/Questionary'

class NameGenerator extends React.Component {
  render() {
    return (
      <Fragment>
        <PageTitle />
        <Questionary />
      </Fragment>
    )
  }
}

export default NameGenerator
