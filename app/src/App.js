import React from 'react';
import AlignIs from './Components/AlignIs';
import Banner from './Components/Banner';
import Blog from './Components/Blog';
import Compony from './Components/Compony';
import Header from './Components/Header';
import Lpage from './Components/Lpage';
import Navbar from './Components/Navbar';
import Other from './Components/Other';
import PRICING from './Components/PRICING';
import Webflow from './Components/Webflow';

const App = () => {
  return (
    <div className='App'>
      <Header/>
      <Navbar/>
      <Webflow/>
      <Banner/>
      <Lpage/>
      <Compony/>
      <Blog/>
      <PRICING/>
      <Other/>
      <AlignIs/>
    </div>
  )
}

export default App
