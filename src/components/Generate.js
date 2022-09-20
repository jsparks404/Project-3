import { useState } from "react"
import { Link } from "react-router-dom"
import Bandlist from "./BandList"


const Generate = () => {
    

    return(
        <div className="generateDiv">
            <h1 className="title">Metal Band Generator</h1>
            <Link to={`/artist`}>
                <button className="button">Generate Random Metal Band</button>
            </Link>
        </div>
    )
}

export default Generate