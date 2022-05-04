import React, { useEffect, useState } from 'react'
import Navigation from '../Navigation/Navigation'
import axios from 'axios'
import { Spinner } from 'react-bootstrap'
import Coin from './Coin'
export default function Crypto() {
    const [coins, setCoins] = useState([])
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState('');
    console.log(coins);
    useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
            .then(res => {
                setCoins(res.data)
                setLoading(false)
            })
            .catch(error => console.log(error))
    }, [])

    if (loading) {
        <>
            <div className="" style={{ marginTop: '400px' }}>
                <Spinner animation="border" variant="dark" />
                <Spinner animation="border" variant="dark" />
                <Spinner animation="border" variant="dark" />
                <Spinner animation="border" variant="dark" />
                <Spinner animation="border" variant="dark" />
                <Spinner animation="border" variant="dark" />
                <Spinner animation="border" variant="dark" />
                <Spinner animation="border" variant="dark" />
                <Spinner animation="border" variant="dark" />
            </div>
        </>
    }

    const handleChange = e => {
        setSearch(e.target.value);
    };

    const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <>
            <Navigation />
            <div className='container'>
                <div className='w-50 h-50 mx-auto text-start my-5'>
                    <label for="exampleInputEmail1" class="form-label fs-5">Search A Currency</label>
                    <input onChange={handleChange} placeholder='Search A Currency' type="text" class="form-control"  />
                </div>
                <div className="row gx-4 gy-5">

                    {filteredCoins.map(coin => {
                        return (
                            <Coin
                                key={coin.id}
                                name={coin.name}
                                price={coin.current_price}
                                symbol={coin.symbol}
                                marketcap={coin.total_volume}
                                volume={coin.market_cap}
                                image={coin.image}
                                priceChange={coin.price_change_percentage_24h}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    )
}
