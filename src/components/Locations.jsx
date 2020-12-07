import store from "../store";
import Location from "./Location";
import React from "react";
import {observer} from "mobx-react-lite";


const Locations = observer(({locations}) =>{
    React.useEffect(()=>{

    })
    return(
        <div className="characters">
            {
                store.locations.length > 0 &&
                store.locations.map(i => <Location key={i.id} location={i} />)
            }
        </div>
    )
})

export default Locations