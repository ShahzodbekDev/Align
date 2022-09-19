import React from 'react';
import Rasm4 from '../Imges/IMAGE5.png';
import Rasm5 from '../Imges/IMAGE6.png';
import Rasm6 from '../Imges/IMAGE7.png';
import Rasm7 from '../Imges/IMAGE8.png';
import Rasm8 from '../Imges/IMAGE9.png';
import Rasm9 from '../Imges/IMAGE10.png';

const Compony = () => {
  return (
    <div className='comfony'>
        <div className="bloc_flex2">
           <h4>COMPANY</h4>
            <h1>Company Pages</h1>
        </div>
        <div className="maxw_one">
            <div className="bloc_flex4">
                <div className="card_2">
                    <h2>About Two</h2>
                    <img src={Rasm4} alt="404" />
                </div>
                <div className="card_2">
                    <h2>About Two</h2>
                    <img src={Rasm5} alt="404" />
                </div>
                <div className="card_2">
                    <h2>About Three</h2>
                    <img src={Rasm6} alt="404" />
                </div>
                <div className="card_2">
                    <h2>Contact One</h2>
                    <img src={Rasm7} alt="404" />
                </div>
                <div className="card_2">
                    <h2>Contact Two</h2>
                    <img src={Rasm8} alt="404" />
                </div>
                <div className="card_2">
                    <h2>Contact Three</h2>
                    <img src={Rasm9} alt="404" />
                </div>
            </div>
        </div>

    
        
    </div>
  )
}

export default Compony