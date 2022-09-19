import { useState } from "react"
import { Link } from "react-router-dom"



const Generate = () => {
    
    const id = Math.floor(Math.random() * 10000 )
    const URL = `http://metallizer.dk/api/json/DOOM${id}`
    

    return(
        <div>
            <Link to={`/artist`}>
                <h2>Generate Random Metal Band</h2>
            </Link>
        </div>
    )
}

export default Generate