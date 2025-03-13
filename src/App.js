import Nav from "./route/navigation/navigation";
import Home from "./route/home/home";
import {Routes, Route} from 'react-router-dom';

let App = ()=>{

    return(


        <div>

                 <Routes>

                    <Route path='/' element={<Nav/>}>

                    <Route index element={<Home/>}/>
                    
                    </Route>
                 </Routes>

            
        </div>

    )
}

export default App;