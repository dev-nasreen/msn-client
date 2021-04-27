import React from 'react';
import FakeData from './FakeData.json';

const Home = () => {
    const handleAddProduct = () =>{
        console.log(FakeData);
        fetch('http://localhost:5050/addProduct',{
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(FakeData)
        })
       
        
    }
    return (
        <div>
            <button onClick={handleAddProduct}>Add product</button>
        </div>
    );
};

export default Home;
