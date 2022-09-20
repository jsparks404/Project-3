import { useState, useEffect } from "react"
import axios from 'axios'
import { Link } from "react-router-dom"


const Bandlist = () => {

    const [data, setData] = useState(null)
    const id = Math.floor(Math.random() * 10000)
    const URL = `http://metallizer.dk/api/json/DOOM${id}`


    const bandArr = []

    function bandLoop() {
        for (let i = 1; i < 2; i++) {
            const fetchData = async () => {
                const res = await axios.get(URL)
                // console.log(res.data)
                const string = res.data.split('jsonMetallizerAlbum(')
                // console.log(testString)
                const obj = string[1].split('\n);')
                // console.log(testObj)
                const artistData = JSON.parse(obj[0])
                // console.log(artistData)
                setData(artistData)
            }
            bandArr.push(data)
        }
        console.log(data)
    }
    useEffect(() => {
        bandLoop() 
    }, [])
    console.log(data)
}


export default Bandlist