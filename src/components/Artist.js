import { useState, useEffect } from "react"
import axios from 'axios'
import { Link } from "react-router-dom"
import Covers from "./Covers"


const Artist = () => {
    const [data, setData] = useState(null)
    const id = Math.floor(Math.random() * 31)
    const URL = 'https://metal-band-generator-backend.herokuapp.com/artists'

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(URL)
            const artistData = await res.json()
            setData(artistData[id])
        }
        fetchData()
    }, [])


    return (
        <div className="artistDiv" key={id}>
            <Covers />
            {data ? <h1 className="artist">{data.artist}</h1> : <h3>Loading...</h3>}
            <Link key={id} to={`/album/${id}`}>
            <h3 className="albumLink">Album</h3>
            </Link>
            <Link to={'/'}>
                <p className="homeLink">Return home</p>
            </Link>
        </div>
    )
}


export default Artist 