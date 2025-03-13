import './home.scss';
import Commercial from '../../asset/Win.mp4';
import Run from '../../asset/RUN.webp';
import Retro from '../../asset/retro.avif';
import Cade from '../../asset/CADE.jpg';
import Bra from '../../asset/Bra.jpg';
import Category from '../../component/category/category';
import Air from '../../asset/max.webp';
import Vomero1 from '../../asset/vomero181.jpg';
import Vomero2 from '../../asset/eighteen.jpeg';
import Blazer from "../../asset/blazer.png";
import {ReactComponent as Nike} from '../../asset/icons8-nike.svg'; 
import { useState, useEffect } from 'react';
import Overflow from '../../component/overflow/overflow';






let Home = ()=>{

    let info = [
    {id:"1", imageUrl:Cade, fText:"Style by Cade Cunningham", sText:"Fresh Fit, Fresh Game"}, 
    {id:"2", imageUrl:Run, fText:"Run in the Mud", sText:"Nike Pegasus Trail 5 GTX"},
    {id:"3", imageUrl:Bra, fText:"Get Comfortable with Winning", sText:"Nike Bras"},
    {id:"4", imageUrl:Retro, fText:"Disruptive By Design", sText:"Retro Runners"}

]

let img = [Vomero1, Air, Vomero2]; 

let text = ["Vomero 18", "Airmax Pro", "Vomero 16"]

let para = ["Max cushioning for the ultimate ride", "Airmax knows it's place, it is First", "Dress Clean, cause you're the game Changer"];


//TO STORE INFORMATION IN YOUR STATE, YOU HAVE TO WRITE THIS CODE BELOW;


let [carousel, setCarousel] = useState(0);

let myIncre = ()=>{
    setCarousel((carousel+1)%img.length)
}

useEffect(()=>{
    let hold = setInterval(myIncre, 5000);

    return ()=>clearInterval(hold);
})





   return(

        <div>

            <video src={Commercial} id="vid" muted autoplay="true" loop/>

            <div id='jet'>

                <h4> CAITLIN CLARK</h4>
                <h1> GREETINGS FROM</h1>
                <h1> HALF-COURT.</h1>
                <h5> When it comes to wining, Caitlin Clark plays.</h5>
                <button id='heat'>Shop</button>

            </div>


            <div id='p-category'>

                {
                    info.map((myInfo)=>{

                        return(

                            <Category grab={myInfo}/>
                        )

                    })



                }


        </div>

        
        <div id='je'>

            <h4> JOSEPH WEAVER</h4>
            <h1> MAKING WAVES </h1>
            <h1> IN NIKE </h1>
            <h5> When it comes to wining, JOSEPH WEAVER delivers.</h5>
            

        </div>


        <div id='img-carousel'>

            <img src={img[carousel]} alt='vomero'/>

            <div id="ovr">

                <h3>Just In</h3>

                <h1>{text[carousel]}</h1>

                <h2>{para[carousel]}</h2>

               
            </div>
        </div>

        <div id='wet'>
            <h1>SHOP BY CLASSICS</h1>

        </div>
        

        <Overflow/>

        <div id='real'>

            <Nike id="logo"/>
            
        </div>


        <div id='hood'>
            <h3 className='fly'> Find a Store</h3>
            <h3>Help</h3>
            <h3>Join Us</h3>
            <h3>Sign In</h3>

        </div>



        </div>

    )
}

export default Home;