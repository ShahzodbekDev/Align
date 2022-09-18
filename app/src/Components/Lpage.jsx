import React from 'react';
import Lone from '../Imges/IMAGE2.png';
import Ltwo from '../Imges/IMAGE3.png';
import Ltree from '../Imges/IMAGE4.png';


const Lpage = () => {
  return (
    <div className='lpage'>
        <div className="maxw_one">
           <div className="bloc_flex2">
           <h4>LANDING PAGES</h4>
            <h1>Discover all the pages</h1>
            <h1> that you can use over </h1>
            <h1>over again.</h1>
           </div>

           <div className="cards">
            <div className="bloc_flex3">
                <div className="card1">
                    <h2>Landing One</h2>
                    <img src={Lone} alt="404" />
                </div>
                <div className="card1">
                    <h2>Landing Two</h2>
                    <img src={Ltwo} alt="404" />
                </div>
                <div className="card1">
                    <h2>Landing Three</h2>
                    <img src={Ltree} alt="404" />

                </div>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Lpage