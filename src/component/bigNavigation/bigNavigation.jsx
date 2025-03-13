import './bigNavigation.scss';
import {ReactComponent as Air} from '../../asset/icons8-air-jordan.svg';
import {ReactComponent as Nike} from '../../asset/icons8-nike.svg';
import Search from '../../asset/icons8-search.gif';
import Heart from '../../asset/icons8-heart.gif';
import Shop from '../../asset/icons8-shopping-cart.gif';
import Dropmenu from '../dropmenu/dropmenu';
import {useState, useContext} from 'react';
import Searchmenu from '../searchmenu/searchmenu';
import { SearchContext } from '../../context/searchcontext';

let Big = ()=>{

    let arr = ["nodrop","drop", "removedrop"];

    let searchmenu = ["defaultsearch", "showsearch", "hidesearch"];

    let [Id, setId]=useState(0);

    let {search, setSearch} = useContext(SearchContext);

    let mouseHandler = ()=>{
        if(Id==2){
            setId(0)
        }
        else{
            setId(Id+1)

        }
    }

    let searchHandler = ()=>{
        setSearch(1);
    }
  

    return(

        <div>


           <div id='topmenu'>
                <div id='fix'>
                    <Air id='air'/>

                    <div id='menus'>
                        <p>Find a Store</p>
                        <p>Help</p>
                        <p>Join Us</p>
                        <p>Sign In</p>
                    </div>
 
                </div>

            </div>

            <div id='downmenu'>
                <div id='down-fix'>

                    <Nike id='nikee'/>

                    <div id='collection'>

                        <h1 onClick={mouseHandler}>COLLECTIONS</h1>


                    </div>

                    <div id='down-menus'>

                       

                        <div id='srch' onClick={searchHandler}>

                            <img src={Search} alt='search' id='searchicon'/>

                            <span id='shift'>Search</span>
                            
                        </div>

                        <img src={Heart} alt='Heart' id='hearticon'/>
                        <img src={Shop} alt='Heart' id='shopicon'/>



                    </div>

                </div>
            </div>

            <Dropmenu ClassName={arr[Id]}/>

            <div dir='rtl'>

            <Searchmenu ClassName={searchmenu[search]}/>
            </div>

           
      </div>
    )
}

export default Big;