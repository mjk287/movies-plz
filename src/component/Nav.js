import React from 'react'

const Nav = (props) => {
  return (
    <nav>
      <a onClick={props.handleClick}>Home</a>
    </nav>
  )
}

export default Nav
