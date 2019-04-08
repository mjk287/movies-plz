import React from 'react'

const Nav = (props) => {
  return (
    <nav>
      <p onClick={props.handleClick}>Home</p>
    </nav>
  )
}

export default Nav
