import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ReviewItem.css';


const ReviewItem = () => {
    const {id} = useParams();
    const [tourist, setTourist] = useState([]);

    const [specialItam, setspecialItam] = useState([]);
   
    useEffect(() => {
        fetch(`http://localhost:9000/tourist`)
            .then(res => res.json())
            .then(data => {
                setTourist(data);
            });




    }, []);



    useEffect( () => {

        if(tourist.length>0){
            const matchItam = tourist.find(tourist => tourist._id == id)
            setspecialItam(matchItam);
        }

        

    }, [tourist]);




   
    return (
        <div>
             <h1>Your Packages</h1>
            <div className="product">
               
            <div>
              <h3>{specialItam.name} </h3>
              <h4>{specialItam.title}</h4>
              <img src={specialItam.img} alt="" />

              <Link to="/ManageOrders" className='Button'>Packages</Link>
                
               
            </div>
        </div>
        </div>
    );
};

export default ReviewItem;