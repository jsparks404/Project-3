import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const AlbumCovers = () => {
    const [covers, setCovers] = useState([])
    const id = Math.floor(Math.random() * 33)
    const URL = `https://metal-band-generator-backend.herokuapp.com/albums`

    const fetchData = async () => {
        try {
            const res = await fetch(URL)
            const allCovers = await res.json()
            setCovers(allCovers)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
            fetchData()
    }, [])

    // console.log(covers)

    return (
        <div>
            <div className="albumCoversDiv">
                {covers ? covers.map((cover, id) => (
                    <Link key={id} to={`/albumcovers/${id}`} >
                        <img className="albumCovers" src={cover.img} />
                    </Link>)) : null}
            </div>
            <Link to={'/'}>
                <p className="homeLink">Return home</p>
            </Link>
        </div>
    )


}


export default AlbumCovers