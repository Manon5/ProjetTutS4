import React from 'react';
import './App.css';
import Navigation from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes';
import ReactNotification from 'react-notifications-component';


function App() {
  return (
    <div className="App">
      <Navigation />
      <ReactNotification />
      <Routes />
    </div>
  );
}

export default App;
