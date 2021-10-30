import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddTourism.css';
import images from '../../images/images.png';

const AddTourism = () => {

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {

    axios.post('http://localhost:9000/tourist', data)
      .then(res => {
        if (res.data.insertedId) {
          alert('Included A Data, Successfully');
          reset();
        }


      })


  };

  return (
    <div className='Add-Itam'>
      <h1>Included New Tourist Places</h1>

      <div className="itam">
        <div className='input_fild'>

          <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("Name", { required: true, maxLength: 20 })} placeholder='Name' />
            <input {...register("Title")} placeholder='Title' />
            <input type="number" {...register("Price", { min: 100, max: 999 })} placeholder='Price Min 100+' />
            <input {...register("image url")} placeholder='img Url' />

            <input type="submit" />
          </form>
        </div>
        <div className="images">

          <img src={images} alt="" />

        </div>

      </div>



    </div>
  );
};

export default AddTourism;