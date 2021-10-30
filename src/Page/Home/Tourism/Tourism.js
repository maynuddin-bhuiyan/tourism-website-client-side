import React from 'react';
import { useState, useEffect } from 'react';
import Tourist from '../Tourist/Tourist';
import './Tourism.css'

const Tourism = () => {
    const [tourist, setTourist] = useState([]);
   
    useEffect(() => {
        fetch(`http://localhost:9000/tourist`)
            .then(res => res.json())
            .then(data => {
                setTourist(data);
                
                
            });
    }, []);
    
    return (
        <>
            <h1>Most Popular Tours</h1>
<div className="Tourist">
{
                tourist.map(tourist => <Tourist
                    key={tourist._id}
                    touris={tourist}
                    
                    
                    />)
            }
</div>
            
        </>
    );
};

export default Tourism;





       

      