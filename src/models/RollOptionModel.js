class RollOptionModel {
  constructor(values, description) {
    this.values = values
    this.description = description
  }

  get valuesString() {
    if (this.values[0] === this.values[1]) {
      return this.values[0].toString()
    }

    return this.values.join('-')
  }
}

export default RollOptionModel
