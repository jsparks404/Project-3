import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from 'axios'
import { Link } from "react-router-dom";
import Tracklist from "./Tracklist";

const Album = () => {
    const [data, setData] = useState(null)
    const {id} = useParams()
    const URL = `http://metallizer.dk/api/json/DOOM${id}`

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(URL)
            // console.log(res.data)
            const testString = res.data.split('jsonMetallizerAlbum(')
            // console.log(testString)
            const testObj = testString[1].split('\n);')
            // console.log(testObj)
            const artistData = JSON.parse(testObj[0])
            // console.log(artistData)
            setData(artistData)
        }
        fetchData()
    }, [])

    


  


    return(
            <div>
                {data ? <h3>Label: {data.label}</h3>  : <h2>Loading...</h2> }
                {data ? <h1>{data.album}</h1>  : <h2>Loading...</h2> }
                {data ? <p>Year Released: {data.year}</p>  : <h2>Loading...</h2> }
                
                <Tracklist />
                <Link to={'/'}><p>Return Home</p></Link>
                
            </div>

        
    )
}

export default Album


// create componenets for tracklist
