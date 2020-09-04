import React from 'react';
import './App.css';
import NominationList from './Components/NominationList'
import SearchMovie from './Components/SearchMovie'


function App() {
  return (
    <div className="App">
      <header className="App-header container-fluid">
          The Shoppies
      </header>
      <div className="section-container">
        <img  src="/award-icon.png" alt="award"></img>
      </div>
      <div className="container-fluid">
          <SearchMovie />
          <NominationList />
          </div>
    </div>
  );
}

export default App;
