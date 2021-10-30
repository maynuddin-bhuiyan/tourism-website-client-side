import { useState, useEffect } from 'react';
import { getStoredCart } from './fackdb';


const useOrder = tourist => {
    const [touris, setTour] = useState([]);

    useEffect(() => {

        if (touris.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const key in savedCart) {
                const addedProduct = touris.find(touris => touris._id === key);
                if (addedProduct) {
                    // set quantity
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
            }
            setTour(storedCart);
        }

    }, [touris]);

    return [touris, setTour];
}

export default useOrder;