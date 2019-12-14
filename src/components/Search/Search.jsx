import React, { useState } from 'react'

function Search () {
  const [text, setText] = useState('')
  const onChange = (e) => {
    console.log(e.target.value)
    setText(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    
    console.log(text)
    const [textInput] = e.target.elements
    console.log(textInput.value)
  }

  return (
    <>
      <h3 className="shop-title">Search by</h3>
      <form className="shop-search" onSubmit={onSubmit}>
        <input name="textInput" type="text" placeholder="Your keyword...." onChange={onChange}/>
        <button><i className="fa fa-search" /></button>
      </form>
    </>
  )
}

export default Search