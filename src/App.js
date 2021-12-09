import React from 'react';
import Banner from './components/Banner';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
        <Header/>
        <Banner/>
        <Cards/>
        <Footer/>
    </div>
  );
}

export default App;
