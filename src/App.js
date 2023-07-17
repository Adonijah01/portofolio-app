import React from 'react';
import './App.Scss';
import Header from './components/Header';
import Main from "./components/Main"
import Section from "./components/Section"
import Contact from "./components/Contact"
function App() {
  return (
    <div className="App">
<Header/>
<Main/>
<Section/>
<Contact/>
    </div>
  );
}

export default App;