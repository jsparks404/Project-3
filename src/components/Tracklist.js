import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from 'axios'

const Tracklist = () => {
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
    
    

    return (
        <div>
            {data ?
            data.tracks.map((track) => (
                <p>{track}</p>
            )) : <h3>Loading...</h3>}
        </div>
    )
}
    


  

export default Tracklist