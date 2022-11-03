import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <a
        href="https://mirror.xyz/pwoseidon.eth"
        target="_blank"
        rel="noreferrer noopener"
        className="navigation-links-link"
      >
        {props.text}
      </a>
      <a
        href="https://twitter.com/Pwoseidonn"
        target="_blank"
        rel="noreferrer noopener"
        className="navigation-links-link1"
      >
        {props.text1}
      </a>
      <a
        href="https://pwo.ar.page/"
        target="_blank"
        rel="noreferrer noopener"
        className="navigation-links-link2"
      >
        {props.text2}
      </a>
      <a
        href="https://pwoseidon.arweave.dev/"
        target="_blank"
        rel="noreferrer noopener"
        className="navigation-links-link3"
      >
        {props.text3}
      </a>
      <a
        href="https://lenster.xyz/u/pwoseidon.lens"
        target="_blank"
        rel="noreferrer noopener"
        className="navigation-links-link4"
      >
        {props.text31}
      </a>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  text3: 'Pwoseidon.arweave.dev',
  text2: 'Pwo.ar',
  text1: 'Twitter',
  rootClassName: '',
  text: 'Mirror.xyz',
  text31: 'Pwoseidon.lens',
}

NavigationLinks.propTypes = {
  text3: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text31: PropTypes.string,
}

export default NavigationLinks
