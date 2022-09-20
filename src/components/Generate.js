import { useState } from "react"
import { Link } from "react-router-dom"



const Generate = () => {
    

    return(
        <div>
            <h1>Metal Band Generator</h1>
            <Link to={`/artist`}>
                <h2>Generate Random Metal Band</h2>
            </Link>
        </div>
    )
}

export default Generate