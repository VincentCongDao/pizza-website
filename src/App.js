import React from 'react'
import RouteNav from './Components/Navbar/RouteNav';
import "./App.css"
import Home from './Components/Views/Home';

function App() {
  return (
    <div className="App">
      <RouteNav/>
      <Home/>
    </div>
  );
}

export default App;
