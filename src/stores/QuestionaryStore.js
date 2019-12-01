import { observable, action, computed } from 'mobx'

class QuestionaryStore {
  @observable selections = new Map()

  constructor() {
    this.buildSelections()
  }

  @action
  buildSelections() {
    this.addSelection('1_1')
    this.addSelection('2_1')
    this.addSelection('2_2')
    this.addSelection('2_2a')
    this.addSelection('2_3')
    this.addSelection('2_4')
    this.addSelection('2_4a')
    this.addSelection('2_5')
    this.addSelection('2_6')
    this.addSelection('2_7')
    this.addSelection('2_8')
    this.addSelection('2_9')
    this.addSelection('2_10')
    this.addSelection('2_11')
    this.addSelection('2_12')
    this.addSelection('2_13')
    this.addSelection('2_14')
    this.addSelection('2_15')
    this.addSelection('3_16')
    this.addSelection('3_17')
    this.addSelection('3_18')
    this.addSelection('3_19')
    this.addSelection('3_20')
    this.addSelection('3_21')
    this.addSelection('3_21a')
    this.addSelection('4_1')
    this.addSelection('4_2')
    this.addSelection('4_3')
    this.addSelection('4_4')
    this.addSelection('5_5')
    // name sections
    this.addSelection('7_1')
    this.addSelection('8_1')
    this.addSelection('9_1')
    this.addSelection('10_1')
    this.addSelection('11_1')
  }

  @action
  addSelection(name) {
    this.selections.set(name, '')
  }

  @action
  setSelectionValue(key, value) {
    this.selections.set(key, value)
  }

  getSelection(key) {
    return this.json[key]
  }

  @computed
  get json() {
    return this.selections.toJSON()
  }

  buildNormalName() {
    return this.addNameCondition(this.getSelection('2_1'))
  }

  buildOccupationalName() {
    let firstName = ''
    const lastName = this.getSelection('2_2a')

    switch (this.getSelection('7_1')) {
      case 2:
        firstName = this.getSelection('2_6')
        break
      case 3:
        firstName = this.getSelection('2_13')
        break
      case 4:
        firstName = this.getSelection('2_16')
        break
      case 1:
      default:
        firstName = this.getSelection('2_15')
        break
    }

    return this.addNameCondition(`${firstName} ${lastName}`)
  }

  buildHornyName() {
    let firstName = ''
    const lastName = this.getSelection('2_3')

    switch (this.getSelection('8_1')) {
      case 2:
        firstName = 'Naked'
        break
      case 3:
        firstName = this.getSelection('2_6')
        break
      case 4:
        firstName = this.getSelection('2_14')
        break
      case 1:
      default:
        firstName = this.getSelection('2_12')
        break
    }

    return this.addNameCondition(`${firstName} ${lastName}`)
  }

  buildTheName() {
    const firstName = 'The'
    let lastName = ''

    switch (this.getSelection('9_1')) {
      case 2:
        lastName = this.getSelection('2_9')
        break
      case 3:
        lastName = this.getSelection('2_4a')
        break
      case 4:
        lastName = this.getSelection('3_20')
        break
      case 1:
      default:
        lastName = this.getSelection('2_8')
        break
    }

    return `${firstName} ${this.addNameCondition(lastName)}`
  }

  buildCoolName() {
    const firstName = this.getSelection('3_21a')
    let lastName = ''

    switch (this.getSelection('10_1')) {
      case 2:
        lastName = this.getSelection('3_18')
        break
      case 3:
        lastName = this.getSelection('3_19')
        break
      case 4:
        lastName = this.getSelection('2_6')
        break
      case 5:
        lastName = this.getSelection('2_8')
        break
      case 6:
        lastName = this.getSelection('2_13')
        break
      case 1:
      default:
        lastName = this.getSelection('3_17')
        break
    }

    return this.addNameCondition(`${firstName} ${lastName}`)
  }

  buildViolentName() {
    let firstName = ''
    const lastName = this.getSelection('2_5')

    switch (this.getSelection('11_1')) {
      case 2:
        firstName = this.getSelection('2_12')
        break
      case 3:
        firstName = this.getSelection('3_20')
        break
      case 4:
        firstName = this.getSelection('2_9')
        break
      case 1:
      default:
        firstName = this.getSelection('3_19')
        break
    }

    return `${firstName} ${lastName}`
  }

  buildSubtextLackName() {
    return this.addNameCondition(this.getSelection('2_10'))
  }

  @computed
  get getName() {
    const category = this.getSelection('5_1')

    if (category === 1) {
      // normal name
      return this.buildNormalName()
    }

    if (category >= 2 && category <= 6) {
      // occupational name
      return this.buildOccupationalName()
    }

    if (category >= 7 && category <= 10) {
      // horny name
      return this.buildHornyName()
    }

    if (category >= 11 && category <= 13) {
      // THE name
      return this.buildTheName()
    }

    if (category >= 14 && category <= 17) {
      // cool name
      return this.buildCoolName()
    }

    if (category >= 18 && category <= 19) {
      // violent name
      return this.buildViolentName()
    }

    if (category === 20) {
      // name that lacks subtext
      return this.buildSubtextLackName()
    }
  }

  addNameCondition(originalName) {
    let conditionName = originalName
    const manCondition = this.getSelection('4_1')
    const conditionCondition = this.getSelection('4_2')
    const kojimaCondition = this.getSelection('4_4')

    if (manCondition === 4) {
      conditionName = `${conditionName}-man`
    }

    switch (conditionCondition) {
      case 6:
        conditionName = `Big ${conditionName}`
        break

      case 7:
        conditionName = `Old ${conditionName}`
        break

      case 8:
        conditionName = `${this.getSelection('2_11')} ${conditionName}`
        break

      default:
        break
    }

    if (kojimaCondition === 69) {
      conditionName = 'Hideo Kojima'
    }

    return conditionName
  }

  /* @observable sectionOne = null
  @observable sectionTwo1 = null
  @observable sectionTwo2 = null
  @observable sectionTwo2a = null
  @observable sectionTwo3 = null
  @observable sectionTwo4 = null
  @observable sectionTwo4a = null
  @observable sectionTwo5 = null
  @observable sectionTwo6 = null
  @observable sectionTwo7 = null
  @observable sectionTwo8 = null
  @observable sectionTwo9 = null
  @observable sectionTwo10 = null
  @observable sectionTwo11 = null
  @observable sectionTwo12 = null
  @observable sectionTwo13 = null
  @observable sectionTwo14 = null
  @observable sectionTwo15 = null
  @observable sectionThree16 = null
  @observable sectionThree17 = null
  @observable sectionThree18 = null
  @observable sectionThree19 = null
  @observable sectionThree20 = null
  @observable sectionThree21 = null
  @observable sectionThree21a = null
  @observable sectionFour1 = null
  @observable sectionFour2 = null
  @observable sectionFour3 = null
  @observable sectionFour4 = null
  @observable sectionFive5 = null

  @action
  setSectionOne(value) {
    this.sectionOne = value
  }

  @action
  setSectionTwo1(value) {
    this.sectionTwo1 = value
  }

  @action
  setSectionTwo2(value) {
    this.sectionTwo2 = value
  }

  @action
  setSectionTwo2a(value) {
    this.sectionTwo2a = value
  }

  @action
  setSectionTwo3(value) {
    this.sectionTwo3 = value
  }

  @action
  setSectionTwo4(value) {
    this.sectionTwo4 = value
  }

  @action
  setSectionTwo4a(value) {
    this.sectionTwo4a = value
  }

  @action
  setSectionTwo5(value) {
    this.sectionTwo5 = value
  }

  @action
  setSectionTwo6(value) {
    this.sectionTwo6 = value
  }

  @action
  setSectionTwo7(value) {
    this.sectionTwo7 = value
  }

  @action
  setSectionTwo8(value) {
    this.sectionTwo8 = value
  }

  @action
  setSectionTwo9(value) {
    this.sectionTwo9 = value
  }

  @action
  setSectionTwo10(value) {
    this.sectionTwo10 = value
  }

  @action
  setSectionTwo11(value) {
    this.sectionTwo11 = value
  }

  @action
  setSectionTwo12(value) {
    this.sectionTwo12 = value
  }

  @action
  setSectionTwo13(value) {
    this.sectionTwo13 = value
  }

  @action
  setSectionTwo14(value) {
    this.sectionTwo14 = value
  }

  @action
  setSectionTwo15(value) {
    this.sectionTwo15 = value
  }

  @action
  setSectionThree16(value) {
    this.sectionThree16 = value
  }

  @action
  setSectionThree17(value) {
    this.sectionThree17 = value
  }

  @action
  setSectionThree18(value) {
    this.sectionThree18 = value
  }

  @action
  setSectionThree19(value) {
    this.sectionThree19 = value
  }

  @action
  setSectionThree20(value) {
    this.sectionThree20 = value
  }

  @action
  setSectionThree21(value) {
    this.sectionThree21 = value
  }

  @action
  setSectionThree21a(value) {
    this.sectionThree21a = value
  }

  @action
  setSectionFour1(value) {
    this.sectionFour1 = value
  }

  @action
  setSectionFour2(value) {
    this.sectionFour2 = value
  }

  @action
  setSectionFour3(value) {
    this.sectionFour3 = value
  }

  @action
  setSectionFour4(value) {
    this.sectionFour4 = value
  }

  @action
  setSectionFive5(value) {
    this.sectionFive5 = value
  } */
}

export default QuestionaryStore
