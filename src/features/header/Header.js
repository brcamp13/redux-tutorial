import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const Header = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const handleChange = (e) => setText(e.target.value)

  const handleKeyDown = e => {
    const trimmedText = e.target.value.trim()

    // If the user pressed the enter key:
    if (e.key === 'Enter' && trimmedText) {
      dispatch({ type: 'todos/todoAdded', payload: trimmedText })
      // and clear out the text input
      setText('')
    }
  }

  return (
    <input
      type="text"
      placeholder="What needs to be done?"
      autofocus={true}
      value={text}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  )
}

export default Header
