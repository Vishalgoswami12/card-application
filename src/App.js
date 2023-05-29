// import logo from './logo.svg';
import './App.css';
import React from "react"
import CardItem from './components/CardItem';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import CardDetail from './components/CardDetail';



function App() {
  return (
    <div className="App">
      <Router>
      <header className="App-header">
      <h1>Card Dispaly</h1>
      </header>
      <Routes>
      <Route path="/" element={<CardItem/>} ></Route>
      <Route path="/card/:id" element={<CardDetail/>} ></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
