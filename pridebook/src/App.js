import React from 'react';
import './App.css';
import LoginPage from './components/LoginPage/LoginPage';
import { Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      {/* <LoginPage/> */}
      <Route exact path="/" component={LoginPage}/>
      {/* <Route path="/contact" component={Contact}/>
      <Route path="/about" component={About}/> */}
      </div>
  );
}

export default App;
