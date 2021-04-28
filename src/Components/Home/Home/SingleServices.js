import React from 'react';
import { Link } from 'react-router-dom';


const SingleServices = ({service}) => {
    const {hotelImg, price, title} = service;
    return (
        <div className="col-md-4 mb-3">
  <div className="card">
        <img src={hotelImg} className="card-img-top" alt="service" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <h5>$35/night</h5>
          <Link href="" className="btn btn-primary">Details</Link>
        </div>
      </div>
        </div>
      
    );
};

export default SingleServices;