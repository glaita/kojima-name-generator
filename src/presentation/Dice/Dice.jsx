import React from 'react'
import PropTypes from 'prop-types'

const getRandomInt = (min, max) => {
  const normMin = Math.ceil(min)
  const normMax = Math.floor(max)

  return Math.floor(Math.random() * (normMax - normMin + 1)) + normMin
}

const Dice = ({ handleChange, maxRoll }) => {
  return (
    <button
      onClick={() => {
        handleChange(getRandomInt(1, maxRoll))
      }}
    >
      Roll Dice (1-{maxRoll})
    </button>
  )
}

Dice.propTypes = {
  handleChange: PropTypes.func.isRequired,
  maxRoll: PropTypes.number.isRequired,
}

export default Dice
