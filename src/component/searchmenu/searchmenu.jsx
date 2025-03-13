import './searchmenu.scss';
import {ReactComponent as Nikelogo} from '../../asset/icons8-nike.svg';
import Search from '../../asset/icons8-search.gif';
import { useContext } from 'react';
import { SearchContext } from '../../context/searchcontext';


let Searchmenu = ({ClassName})=>{

    let {setSearch} = useContext(SearchContext);

    let cancelHandler = ()=>{
        setSearch(2)
    }

    return(

        <div className = {ClassName} >

            <div className='s-search' dir='ltr'>

                <div id='p-search'>

                    <Nikelogo id='nl'/>

                    <div id='searchs'>
                        <img src={Search} alt='searchicon'/>
                        <input type='search' placeholder='Search' name='srch' id='srch'/>

                    </div>

                    <div id='cancel' onClick={cancelHandler}>
                        Cancel
                    </div>

                </div>


                <div id='others'>
                    

                    <h3>Popular Search Terms</h3>

                    <div id='popular'>

                        <h4>airmax</h4>
                        <h4>jordan</h4>
                        <h4>dunks</h4>
                        <h4>jordan 4</h4>
                        <h4>airforces</h4>
                        <h4>jordan 1</h4>
                        <h4>basket shoes</h4>
                        <h4>jordan 5</h4>

                    </div>

                    

                </div>
                

            </div>
        </div>

     
    )


}
export default Searchmenu;
