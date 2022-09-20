import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from 'axios'
import { Link } from "react-router-dom";
import Tracklist from "./Tracklist";

const Album = () => {
    const [artist, setArtist] = useState(null)
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
            setArtist(artistData)
        }
        fetchData()
    }, [])

    // console.log(artist)


    const loaded = () => {
        return (
            <div>
                <h3>{artist.label}</h3>
                <h1>{artist.album}</h1>
                <Tracklist />
                <Link to={'/'}><p>Return Home</p></Link>
            </div>
        )
    }


    return(

        <h3>{artist ? loaded() : 'Loading'}</h3>
    )
}

export default Album


// create componenets for tracklist
