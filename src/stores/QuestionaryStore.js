import { observable, action } from 'mobx'

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
    return this.selections.get(key)
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
