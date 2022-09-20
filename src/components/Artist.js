import { useState, useEffect } from "react"
import axios from 'axios'
import { Link } from "react-router-dom"

const Artist = () => {

    // get random artist out of 10000 or so. Math.floor(Math.random() * 10000)
    // set that random number to the url id.
    const id = Math.floor(Math.random() * 10000)
    const URL = `http://metallizer.dk/api/json/DOOM${id}`
    const [artist, setArtist] = useState(null)

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

    // console.log(artist.id)


    return (
        <div key={id}>
            <h1>{artist ? artist.artist : 'loading'}</h1>
            <Link to={`/album/${id}`}>
            <h3>Album</h3>
            </Link>


            <Link to={'/'}>
                <p>Return home</p>
            </Link>
        </div>
    )
}


export default Artist 