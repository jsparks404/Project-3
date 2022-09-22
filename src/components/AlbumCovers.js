import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const AlbumCovers = () => {
    const [covers, setCovers] = useState([])
    const id = Math.floor(Math.random() * 33)
    const URL = `https://metal-band-generator-backend.herokuapp.com/albums`
    const initForm = {img: ''}
    const [newForm, setNewForm] = useState(initForm)

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

    const handleChange = (e) => {
        const data = {...newForm, [e.target.name]: e.target.value}
        setNewForm(data)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const newImage = {...newForm}
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newImage)
            }
            const response = await fetch(URL, options)
            const responseData = await response.json()
            fetchData()
            setNewForm({img: ''})
        } catch(err) {
            console.log(err)
        }
    }


    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <label>
                    <span className="addCover">Add Album Cover:  </span>
                    <input type='text' required name="img" placeholder="Enter Image URL" onChange={handleChange} value={newForm.img}></input>
                </label>
                <input type='submit'></input>
            </form>
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