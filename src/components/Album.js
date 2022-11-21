import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Tracklist from "./Tracklist";


const Album = () => {
    const [data, setData] = useState(null)
    const { id } = useParams()
    const URL = 'https://metal-band-generator-backend.herokuapp.com/artists'

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(URL)
            const artistData = await res.json()
            setData(artistData[id])
        }
        console.log(data)
        fetchData()
    }, [])


    return (
        <div className="albumDiv">
            {data ? <h3 className="label">Label: {data.label}</h3> : <h3>Loading...</h3>}
            {data ? <h1 className="album">{data.album}</h1> : <h3>Loading...</h3>}
            {data ? <p className="year">Year Released: {data.year}</p> : <h3>Loading...</h3>}
            <Tracklist />
            <div>
                <Link to={'/'}><p className="homeLink">Return Home</p></Link>
            </div>
        </div>
    )
}


export default Album



