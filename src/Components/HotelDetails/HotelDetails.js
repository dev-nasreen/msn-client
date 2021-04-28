import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { searchContext } from '../../App';





const HotelDetails = () => {

    const {id} = useParams();
    const [search, setSearch] = useContext(searchContext);
    const [hotelDetails, setHotelDtetails] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5050/details/${id}`)
            .then(res => res.json())
            .then(data => setHotelDtetails(data))
    }, [id])

    console.log(hotelDetails);
    console.log(id)
    return (
        <div>
            <h3>{id}</h3>
        </div>
    );
};

export default HotelDetails;