import { useState, useEffect } from "react"
import axios from 'axios'

const Covers = () => {
    
    const [covers, setCovers] = useState([])
    const id = Math.floor(Math.random() * 20)
    const URL = `http://localhost:4000/albums`
    // console.log(URL) 

    const fetchData = async () => {
       try {
        const res = await fetch(URL)
        const allCovers = await res.json()
        // console.log(allCovers)
        setCovers(allCovers[id].img)
        console.log(covers)
       } catch(err) {
        console.log(err)
       }
    }
    
    useEffect(() => {
        fetchData()
    }, [])
    console.log(covers)

    return (
        <div>
            {covers ? <img className="cover" src={covers} /> : null}
        </div>
    )

}

    



export default Covers