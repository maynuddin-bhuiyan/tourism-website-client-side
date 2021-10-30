import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddTourism.css';
import images from '../../images/images.png';


const AddTourism = () => {

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {

    axios.post('https://hidden-sea-62694.herokuapp.com/tourist', data)
      .then(res => {
        if (res.data.insertedId) {
          alert('Included A Data, Successfully....Added A New Tourism Place');
          reset();
        }


      })


  };

  return (
    <div className='Add-Itam'>
      <h1>Create A New Tourism To Display  </h1>

      <div className="itam">
        <div className='input_fild'>

          <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true, maxLength: 20 })} placeholder='Name' />
            <input {...register("title")} placeholder='Title' />

            <textarea {...register("degeneration")} placeholder='Degeneration' />
            <input type="number" {...register("price", { min: 100, max: 999 })} placeholder='Price Min 100+' />
            <input {...register("img")} placeholder='img Url' />

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