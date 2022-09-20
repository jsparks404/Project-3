import { useState } from "react"
import { Link } from "react-router-dom"



const Generate = () => {
    

    return(
        <div>
            <h1 className="title">Metal Band Generator</h1>
            <Link to={`/artist`}>
                <button className="button">Generate Random Metal Band</button>
            </Link>
        </div>
    )
}

export default Generate