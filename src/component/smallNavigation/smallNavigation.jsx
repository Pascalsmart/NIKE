import './smallNavigation.scss';
import { ReactComponent as Nike } from '../../asset/icons8-nike.svg';
import Search from '../../asset/icons8-search.gif';
import User from '../../asset/icons8-user-icon.gif';
import Shopping from '../../asset/icons8-shopping-cart.gif';
import { ReactComponent as Menu} from '../../asset/icons8-menu.svg';

let Small = ()=>{

    return(

        <div>

          <div id='headmenu'>
            <div id='stick'>
                 <Nike id='sky'/>

                    <div id='skit'>
                      <img src={Search} alt='search' className='heat'/>
                      <img src={User} alt='User' className='heat'/>
                      <img src={Shopping} alt='User' className='heat'/>
                      <Menu className='heat'/>


                

              </div>
          </div>
     </div>

 </div>
    )
}
export default Small;