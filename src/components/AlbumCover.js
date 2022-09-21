import { useState, useEffect } from "react"
import { useParams } from "react-router"

const AlbumCover = () => {
    const [cover, setCover] = useState(null)
    const {id} = useParams()
    const URL = `https://metal-band-generator-backend.herokuapp.com/albums`

    const fetchData = async () => {
        try{
            const res = await fetch(URL)
            const image = await res.json()
            setCover(image[id])
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])
    console.log(id) 
    return (
        <>
          {cover ?  <img src={cover.img} /> : null}
        </>
    )



}


export default AlbumCover