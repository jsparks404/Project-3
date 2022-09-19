import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from 'axios'


const Album = () => {
    const [artist, setArtist] = useState(null)
    const {id} = useParams()
    const URL = `http://metallizer.dk/api/json/DOOM${{id}}`

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

    console.log(artist)


    const loaded = () => {
        return (
            <div>
                <h3>{artist.artist}</h3>
                <h1>{artist.album}</h1>
            </div>
        )
    }


    return(

        <h1>{artist ? loaded() : 'Loading'}</h1>
    )
}

export default Album