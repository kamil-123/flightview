import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './Components/SearchBar.jsx'
import SearchResults from './Components/SearchResults.jsx'


const url = 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch='
const pageOffsetPrefix = '&sroffset='

function App() {
  const [selectedItemFrom, setSelectedItemFrom] = useState('Select From destination')
  const [selectedItemTo,setSelectedItemTo] = useState('Select To destination')
  const [searched, setSearched ] = useState(false)
  
  const handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      handleSearchClick()
  }
    } 
  const handleSearchClick = () => {
    setSearched(true)
    
  }

  
    return (
      <div className="App">
        <SearchBar
        handleKeyPress={handleKeyPress}
        // searchValue={searchValue}
        handleSearchClick={handleSearchClick}
        // handleInputChange={handleInputChange}
        selectedItemFrom={selectedItemFrom}
        setSelectedItemFrom={setSelectedItemFrom}
        selectedItemTo={selectedItemTo}
        setSelectedItemTo={setSelectedItemTo}
      />
      <br />
      < SearchResults searched={searched} />
    </div>
    )
  
}

export default App;
