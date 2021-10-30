import { useState, useEffect } from "react";

const useData = () => {
    //State Declare
    const [services, setservices] = useState([]);


    //Loaed Data
    useEffect(() => {
        fetch('https://hidden-sea-62694.herokuapp.com/tourist')
            .then(res => res.json())
            .then(data => setservices(data))
    },
        []);

    return [services, setservices]
}

export default useData;