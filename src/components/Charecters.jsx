import Character from "./Character";
import React from "react";
import store from "../store";
import {observer} from "mobx-react-lite";


const Characters = observer(() =>{
    React.useEffect(()=>{
        store.fetchCharracters()
    },[])

    return(
        <div className="characters">
            {
                store.characters.length > 0 &&
                store.characters.map(i => <Character key={i.id} character={i} />)
            }
        </div>
    )
})

export default Characters