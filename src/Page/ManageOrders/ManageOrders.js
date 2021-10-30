import React from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './ManageOrders.css';
import images from '../../images/imagesa.png';


const ManageOrders = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        alert('Thanks')
    };

    return (
        <div className='From-Full'>

            <h1>Verify Your Identity</h1>

<div className="From-full">
            <div className="From">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Form>
                    <Form.Control placeholder="First name" />
                    <Form.Control placeholder="Last name" />

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Control type="password" placeholder="Password" />
                        <Form.Text className="text">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Control placeholder="City" />
                    <Form.Control placeholder="State" />

                    <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>

                    <select {...register("gender")}>
                        <option value="female">District of bangladesh</option>
                        <option value="male">Sylhet</option>
                        <option value="male">Bandarban</option>
                        <option value="other">Khulna</option>
                        <option value="other">Rajshahi </option>
                        <option value="other">kukata</option>
                        <option value="other">Comilla</option>
                        <option value="other">Chattogram</option>
                        <option value="other">Rangpur</option>
                        <option value="other">Rangpur</option>
                    </select>




                </Form>
                <input type="submit" />
            </form>
            </div>
            

            <div className="image">
                <img src={images} alt="" />
            </div>


            </div>
        </div>
    );
};

export default ManageOrders;