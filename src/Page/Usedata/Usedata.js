import { useState, useEffect } from "react";

const useData = () => {
    //State Declare
    const [services, setservices] = useState([]);


    //Loaed Data
    useEffect(() => {
        fetch('http://localhost:9000/tourist')
            .then(res => res.json())
            .then(data => setservices(data))
    },
        []);

    return [services, setservices]
}

export default useData;