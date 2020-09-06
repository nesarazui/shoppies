import React from 'react';
import './App.css';
import NominationList from './Components/NominationList'
import SearchMovie from './Components/SearchMovie'
import Toasts from "./Components/Toast";

class App extends React.Component {
  constructor(){
    super()
    this.state={displayAlert: false}
    this.updateDisplayAlert = this.updateDisplayAlert.bind(this);
  }

  updateDisplayAlert(show = true) {
    this.setState((state) => ({ displayAlert: show }));
  }

  render() {
    return (
      <div className="App">
        {this.state.displayAlert ? <Toasts updateDisplayAlert={this.updateDisplayAlert} /> : null}
        <header className="App-header container-fluid">
            The Shoppies
        </header>
        <div className="section-container">
          <img  src="/award-icon.png" alt="award"></img>
        </div>
        <div className="container-fluid">
            <SearchMovie updateDisplayAlert={this.updateDisplayAlert}/>
            <NominationList updateDisplayAlert={this.updateDisplayAlert}/>
        </div>
      </div>
    );
  }
}

export default App;
