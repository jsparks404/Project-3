import { useState, useEffect } from "react"
import axios from 'axios'
import { Link } from "react-router-dom"
import Covers from "./Covers"


const Artist = () => {
    const [data, setData] = useState(null)
    const id = Math.floor(Math.random() * 10000)
    const URL = `http://metallizer.dk/api/json/DOOM${id}`

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(URL)
            const string = res.data.split('jsonMetallizerAlbum(')
            const obj = string[1].split('\n);')
            const artistData = JSON.parse(obj[0])
            setData(artistData)
        }
        fetchData()
    }, [])


    return (
        <div className="artistDiv" key={id}>
            <Covers />
            {data ? <h1 className="artist">{data.artist}</h1> : <h3>Loading...</h3>}
            <Link to={`/album/${id}`}>
                <h3 className="albumLink">Album</h3>
            </Link>
            <Link to={'/'}>
                <p className="homeLink">Return home</p>
            </Link>
        </div>
    )
}


export default Artist 