import React from 'react'

import PropTypes from 'prop-types'

import './outline-blue-button.css'

const OutlineBlueButton = (props) => {
  return (
    <div className="outline-blue-button-container">
      <a
        href="https://twitter.com/Pwoseidonn"
        target="_blank"
        rel="noreferrer noopener"
        className="outline-blue-button-link button buttonSmall"
      >
        {props.button}
      </a>
    </div>
  )
}

OutlineBlueButton.defaultProps = {
  button: 'Button',
}

OutlineBlueButton.propTypes = {
  button: PropTypes.string,
}

export default OutlineBlueButton
