import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom"

const AlbumCover = () => {
    const [cover, setCover] = useState(null)
    const { id } = useParams()
    const URL = `https://metal-band-generator-backend.herokuapp.com/albums`

    const fetchData = async () => {
        try {
            const res = await fetch(URL)
            const image = await res.json()
            setCover(image[id])
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <div>
            <>
                {cover ? <img className="albumCover" src={cover.img} /> : null}
            </>
            <Link to={'/'}>
                <p className="homeLink">Return home</p>
            </Link>
        </div>
    )
}


export default AlbumCover