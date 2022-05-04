import React from 'react'
import { Card } from 'react-bootstrap'
import './crpto.css'
export default function Coin({
    name,
    price,
    symbol,
    marketcap,
    volume,
    image,
    priceChange
}) {
    return (
        <div className='col-lg-4 col-md-4 '>
            <Card className='rounded-3 cryptocard my-1' style={{ width: 'auto' ,padding:'5px'}}>
                <Card.Body>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <Card.Title className='fs-4'>{name}</Card.Title>
                        <img className='' style={{ width: 'auto', height: '50px' }} src={image} alt="" />
                    </div>
                    <div className="text-start">
                        <p  className='fw-light'  style={{fontSize:'18px'}}>
                            Price: ${price}
                        </p>
                        <p className='fw-light'  style={{fontSize:'18px'}}>
                            Market Cap: ${marketcap}
                 
                        </p>
                        <p  className='fw-light' style={{fontSize:'18px'}}>
                            Symbol: ${symbol}
                 
                        </p>
                        <p className='fw-light' style={{fontSize:'18px'}}>
                            Daily Change: ${priceChange}
                        </p>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}
