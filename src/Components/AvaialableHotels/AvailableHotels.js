import React, { useContext, useEffect, useState } from 'react';
import { searchContext } from '../../App';
import { AiTwotoneStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';


const AvailableHotels = () => {
    const [search, setSearch] = useContext(searchContext);
    const [availablePlace, setAvailablePlace] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5050/search/${search.location}`)
            .then(res => res.json())
            .then(data => setAvailablePlace(data[0]))
    }, [search.location])

    console.log(search)

    const { hotelImg, title, price, baths, bedrooms, beds, facilities1, facilities2, guests, ratings, idHotel } = availablePlace;
 
    let totalGuest = 0;
    if(search.location){
        totalGuest = search.addult + search.child;
    }
    return (
        <>

            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-12">
                       <p><span><strong>Stays</strong> {search.checkIn} to {search.checkOut}</span> <span> <strong>Guests</strong> {totalGuest}</span></p>
                       <h3>Stay in {search.location} Division</h3> 
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8 mb-3">
                        <div className="card mb-3">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src={hotelImg} className="card-img-top" alt="service" />

                                </div>
                                <div class="col-md-8">
                                    <div className="card-body">
                                       <Link to={`/hotelDetails/${idHotel}`} ><h5 className="card-title">{title}</h5></Link>
                                        <div className="card-text d-flex">
                                            <p >{guests} guests</p>
                                            <p className="mx-2">{bedrooms} bedrooms</p>
                                            <p className="mx-2">{beds} beds</p>
                                            <p>{baths} baths</p>
                                        </div>
                                        <p>{facilities1}</p>
                                        <p>{facilities2}</p>
                                        <div className="card-bottom d-flex">
                                            <p><AiTwotoneStar /> {ratings}(20)</p>
                                            <p className="ms-auto">${price}/Night <br/> <small className="text-muted">$250 Total</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AvailableHotels;