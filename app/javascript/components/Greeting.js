import React from 'react'

const Greeting = (props) => {
  const {greeting} = props
  return (
    <div>
      {greeting}
    </div>
  )
}

export default Greeting
