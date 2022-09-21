import { useState, useEffect } from "react"
import axios from 'axios'

const Covers = () => {
    const [covers, setCovers] = useState(null)
    const id = Math.floor(Math.random() * 33)
    const URL = `https://metal-band-generator-backend.herokuapp.com/albums`

    const fetchData = async () => {
       try {
        const res = await fetch(URL)
        const allCovers = await res.json()
        setCovers(allCovers[id].img)
       } catch(err) {
        console.log(err)
       }
    }
    
    useEffect(() => {
        fetchData()
    }, [])
    

    return (
        <div>
            {covers ? <img className="cover" src={covers} /> : null}
        </div>
    )
}


export default Covers