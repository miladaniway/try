import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header'; 
import Navbar from './components/navbar/Navbar';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import List from './components/list/List';


function App() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <List/>
      <Content/>
      <Footer/>

    
    </div>
  );
}

export default App;
