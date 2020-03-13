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
  const [destTo,setDestTo] = useState('')
  const [destFrom,setDestFrom] = useState('')
  
  const handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      handleSearchClick()
  }
    } 

  const destinatios = {
    'Prague':'PRG',
    'Berlin':'BER',
    'Warsaw':'WAW',
    'Pardubice':'PED',
    'Valencia':'VLC',
    'Barcelona':'BCN',
    'Madrid':'MAD',
    'Milano':'MXP',
    'Athens':'AHN',
  }

  const handleSearchClick = () => {
    setDestFrom(destinatios[selectedItemFrom])
    setDestTo(destinatios[selectedItemTo])
    // console.log(destFrom)
    // console.log(destTo)
    
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
      < SearchResults searched={searched} destFrom={destFrom} destTo={destTo} />
    </div>
    )
  
}

export default App;
