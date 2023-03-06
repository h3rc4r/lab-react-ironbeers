import axios from "axios"
import { useEffect, useState } from "react";
import Header from "./Header.jsx"
import { Link } from 'react-router-dom'
import Footer from "./Footer";


const apiEndpoint = "https://ih-beers-api2.herokuapp.com/beers"


const AllBeers = () => {
    const [beers, setBeers] = useState ([]) 
    useEffect(() =>{
        const apiCall = async () => {
            const res = await axios.get(apiEndpoint)
            setBeers(res.data)            
        }
        apiCall()
    }, [])
    const oneBeer = beers.map((beer) => { 
        return (
            <div key={beer._id}>
                <ul>
                <Link to={`/beers/${beer._id}`} ><img src={beer.image_url} alt="Beer" /></Link>
                    <h1>{beer.name}</h1>
                    <h2>{beer.tagline}</h2>
                    <p>Created by: {beer.contributed_by}</p>
                </ul>
            </div>
        )
    })
    return(
        <div>
            <Header></Header>
            <h1>List</h1>
            {oneBeer}    
            <Footer></Footer> 
        </div>
    )
}

export default AllBeers;