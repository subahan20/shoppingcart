import React from "react";
import Header from "./components/Header";
import CardsDetails from "./components/CardsDetails";
import Cards from './components/Cards';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path="/" element={<Cards/>}/>
      <Route path="/cart/:id" element={<CardsDetails/>} />
      </Routes>
    </div>
  );
};

export default App;
