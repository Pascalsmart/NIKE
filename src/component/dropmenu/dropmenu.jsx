import './dropmenu.scss';
import {useState} from 'react';

let Dropmenu = ({ClassName})=>{


    let [mremove, setMRemove] = useState(0);

    let removeHandler = ()=>{
       setMRemove(1);
    }



    return(

        <div className={ClassName}>
            <div id='shoes'>

                <div className='shoe'>
                    <h3>All Shoes</h3>
                    <h3>Basketball</h3>
                    <h3>Lifestyle</h3>

                </div>

                <div className='shoe'>
                    <h3>Jordan</h3>
                    <h3>Retro Running</h3>
                    <h3>Running</h3>

                </div>

                <div className='shoe'>
                    <h3>Sandals</h3>
                    <h3>Slides</h3>
                    <h3>Shoes Under 100$</h3>

                </div>


            </div>
        </div>
    )

}
export default Dropmenu;