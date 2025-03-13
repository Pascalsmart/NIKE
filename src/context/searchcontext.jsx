import { createContext, useState } from "react";


export let SearchContext = createContext({
    search:0,
    setSearch:()=>{
        return 0;

    } 
})

export let SearchContextProvider = ({children})=>{

  
    let [search, setSearch] = useState(0);
    const value = {search, setSearch};



    return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>

}