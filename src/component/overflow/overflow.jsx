import Airjordan1 from "../../asset/airjordan1.avif";
import Blazer from "../../asset/blazer.png";
import Cortex from "../../asset/cortex.webp";
import Dunk from "../../asset/dunk.png";
import Airforce1 from "../../asset/nike airforce1.png";
import Blazer2 from "../../asset/nike blazer2.jpg";
import Jordan2 from "../../asset/nike jordan.webp";
import Blazer3 from "../../asset/second2.png";
import Airmax from "../../asset/NIKEAIRMAX.jpg";
import Vomero from "../../asset/nike vomero.jpg";
import './overflow.scss';


let Overflow = ()=>{
    
    
    return(

        <div id="p-ovr">

            <div id="ovr">

                <div className='ovr-cont'>

                    <img src={Airjordan1} alt="Airjordan1"/>

                    <h3>Air Jordan 1</h3>

                </div>

                <div className='ovr-cont'>

                    <img src={Blazer} alt="Blazer"/>

                    <h3>Blazer</h3>

                </div>

                
                <div className='ovr-cont'>

                    <img src={Cortex} alt="Cortex"/>

                    <h3>Cortex</h3>

                </div>

                <div className='ovr-cont'>

                    <img src={Dunk} alt="Dunk"/>

                    <h3>Dunk</h3>

                </div> 

                <div className='ovr-cont'>

                    <img src={Airforce1} alt="Airforce1"/>

                    <h3>Airforce 1</h3>

                </div>
                
                <div className='ovr-cont'>

                    <img src={Vomero} alt="Vomero"/>

                    <h3>Vomero</h3>

                </div> 

                <div className='ovr-cont'>

                    <img src={Dunk} alt="Dunk"/>

                    <h3>Dunk</h3>

                </div> 

                <div className='ovr-cont'>

                    <img src={Blazer3} alt="Blazer3"/>

                    <h3>Blazer 3</h3>

                </div>
                
                <div className='ovr-cont'>

                    <img src={Airmax} alt="Airmax"/>

                    <h3>Airmax</h3>

                </div>

                 <div className='ovr-cont'>

                    <img src={Vomero} alt="Vomero"/>

                    <h3>Vomero</h3>

                </div>  


            </div>
        </div>
    ) 
}

export default Overflow;