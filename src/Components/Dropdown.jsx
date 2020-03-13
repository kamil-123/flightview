import React, { useState, useEffect } from 'react';

const ddContainer = {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  width: '200px'
 
}

const ddHeader = {
  padding: '2px',
  border: '1px solid black',
  borderRadius: '5px',
  backgroundColor: 'lightGray',
  
  
}

const getListStyles = (open) => {
  return {
      ...ddContainer,
      display: open ? 'block' : 'none',
      position: 'fixed',
      top: '50px',
      backgroundColor: 'white',
      border: '1px solid black',
      padding: '5px 10px 5px 5px',
      width: '100px'
  }
}

function Dropdown({ openByDefault, selectedItem, setSelectedItem, children }) {
  const [isOpen, setIsOpen] = useState(!!openByDefault)

  const handleDropDownClick = () => {
      setIsOpen(!isOpen)
  }

  const handleItemClick = (e) => {
      setSelectedItem(e.target.innerText)
      handleDropDownClick()
  }

  const listItems = children.map(getClickableChildren(handleItemClick))
  return (
      <div style={ddContainer}>
          <div onClick={handleDropDownClick} style={ddHeader}>
              {selectedItem}
          </div>
          <div style={getListStyles(isOpen)}>
              {listItems}
          </div>
      </div>
  )
}

export default Dropdown

function getClickableChildren(clickHandler) {
  return function (child, index) {
      return (
          <div onClick={clickHandler} key={index}>
              {child}
          </div>
      )
  }
}