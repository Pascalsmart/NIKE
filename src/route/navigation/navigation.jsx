import './navigation.scss';
import Big from '../../component/bigNavigation/bigNavigation';
import Small from '../../component/smallNavigation/smallNavigation';
import { Outlet } from 'react-router-dom';


let Nav = ()=>{

    return(

        <div>
            <Big/>
            <Small/>

            <Outlet/>

        </div>


    )
}

export default Nav;