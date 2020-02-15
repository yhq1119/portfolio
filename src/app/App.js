import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Main from '../pages/main/Main'
import NavBar from '../components/navbar/NavBar'
import Footer from '../components/footer/Footer'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
