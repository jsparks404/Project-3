import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from 'axios'


const Tracklist = () => {
    const [data, setData] = useState(null)
    const {id} = useParams()
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
        <div className="tracklist">
            {data ? data.tracks.map((track) => (
                <p className="track" key={track}>{track}</p>
            )) : <h3>Loading...</h3>}
        </div>
    )
}


export default Tracklist