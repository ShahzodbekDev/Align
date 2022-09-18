import React from 'react';
import Banner from './Components/Banner';
import Header from './Components/Header';
import Lpage from './Components/Lpage';
import Navbar from './Components/Navbar';
import Webflow from './Components/Webflow';

const App = () => {
  return (
    <div className='App'>
      <Header/>
      <Navbar/>
      <Webflow/>
      <Banner/>
      <Lpage/>
    </div>
  )
}

export default App
