import React, { useEffect, useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import SearchBox from '../../Shared/SearchBox/SearchBox';
import SingleServices from './SingleServices';
//import FakeData from './FakeData.json';

const Home = () => {
    const [services, setServices] = useState([]);
    // const handleAddProduct = () =>{
    //     console.log(FakeData);
    //     fetch('http://localhost:5050/addProduct',{
    //         method: 'POST',
    //         headers:{'Content-Type': 'application/json'},
    //         body: JSON.stringify(FakeData)
    //     })
    // }

    useEffect(() =>{
        fetch('http://localhost:5050/getPlaces')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    console.log(services);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <Navbar></Navbar>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-4">
                  <SearchBox></SearchBox>
                </div>

                <div className="col-md-8">
                    <div className="row d-flex">
                    
                        {
                            services.map(service => <SingleServices key={service.idHotel} service={service}></SingleServices>)
                        }
                    
                    </div>
                </div>

            </div>

            {/* <button onClick={handleAddProduct}>Add product</button> */}
        </div>
    );
};

export default Home;
