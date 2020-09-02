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
        <img  src="data:image/png;base64,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" alt="award"></img>
      </div>
      <div className="container-fluid">
          <SearchMovie />
          <NominationList />
          </div>
    </div>
  );
}

export default App;
