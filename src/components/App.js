import React, { useState } from "react";
import axios from 'axios';
import './styles/style.css';


const App = () => {
    const [term, setTerm] = useState('')
    const [price,setPrice] = useState('')
    const onformsubmit = async (e) => {

        e.preventDefault();
        try {
            const resposnse = await axios.get(`https://rest.coinapi.io/v1/assets/${term}?apikey=3B097C38-59FE-40C2-B1BA-60017574E519`);
            
            setPrice(resposnse.data[0].price_usd)
        }
        catch (err) {
            console.log(err);
            setPrice('Check Abbreviations')
        }
    }

    return (
        <div id="app">
            <form onSubmit={onformsubmit}>
                <label><h1>Search for price</h1></label>
                <input type='text' placeholder='Use Abbreviations' value={term} onChange={(e) => setTerm(e.target.value)}></input>
                <button>Get Prices</button>
            </form>
            <div id="price">
            <div><h2>Current Price :</h2></div> <div><h2>{price}</h2></div>
            </div>
        </div>
    )
}


export default App;