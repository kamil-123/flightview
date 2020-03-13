import React, { useState, useEffect } from 'react';

// import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Dropdown from './Dropdown.jsx'


const sbContainer = {
  display: 'flex',
  flexDirection: 'row',
  
}

function SearchBar(props) {

  const {handleSearchClick, selectedItemFrom, setSelectedItemFrom, selectedItemTo, setSelectedItemTo} = props

  const listItemsFrom = [
    <p key={0}>Valencia</p>,
    <p key={1}>Barcelona</p>,
    <p key={3}>Madrid</p>,
    <p key={4}>Milano</p>,
    <p key={5}>Athens</p>,
  ]

  const listItemsTo = [
    <p key={0}>Prague</p>,
    <p key={1}>Berlin</p>,
    <p key={3}>Warsaw</p>,
    <p key={4}>Pardubice</p>,
  
  ]


  return (
    <div className='searchBar-container' style={sbContainer}>
      <Dropdown 
        selectedItem={selectedItemFrom}
        setSelectedItem={setSelectedItemFrom}
        >
        {listItemsFrom}  
      </Dropdown>
      <Dropdown 
        selectedItem={selectedItemTo}
        setSelectedItem={setSelectedItemTo}
        >
        {listItemsTo}  
      </Dropdown>
      
      <button className='searchBar-Button' onClick={handleSearchClick}>Search</button>

      
    </div>
  )
}

export default SearchBar