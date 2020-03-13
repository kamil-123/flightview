import React, { Component } from 'react';
import './App.css';
import SearchBar from './Components/SearchBar.jsx'
import SearchResults from './Components/SearchResults'

class App extends Component {
  render() {
    return (
      <div className="App">
        < SearchBar />
        < SearchResults />
    </div>
    );
  }
}

export default App;
