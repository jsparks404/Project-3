import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from 'axios'

const Tracklist = () => {
    const [tracklist, setTracklist] = useState(null)
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
            const TrackListData = JSON.parse(testObj[0])
            // console.log(artistData)
            setTracklist(TrackListData)
        }
        fetchData()
        console.log(tracklist)
    }, [])
}
    


  

export default Tracklist