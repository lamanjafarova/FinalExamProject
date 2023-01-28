import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import "./index.scss"

const AddSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  price: Yup.number()
    .min(2, 'Too Short!')
    .max(1000, 'Too Long!')
    .required('Required'),
  title: Yup.string()
    .min(2, 'Too Short!')
    .max(1000, 'Too Long!')
    .required('Required'),
  description: Yup.string()
    .min(2, 'Too Short!')
    .max(1000, 'Too Long!')
    .required('Required'),
});

const AddPage = () => {
  const navigate = useNavigate()
  return (
    <div id='add'>
      <div className="container">
      <div>
     <h1 className='add-h1'>Add New Swan</h1>
     <Formik
       initialValues={{
         name: '',
         price: '',
         title: '',
         description: '',
       }}
       validationSchema={AddSchema}
       onSubmit={values => {
         axios.post("http://localhost:8080/swan", values)
         navigate("/")
       }}
     >
       {({ errors, touched }) => (
         <Form className='form'>
          <div className="input">
          <Field name="name" placeholder='Name'/>
          </div>
           {errors.name && touched.name ? (
             <div>{errors.name}</div>
           ) : null}
          <div className="input">
          <Field name="price" placeholder='Price'/>
          </div>
           {errors.price && touched.price ? (
             <div>{errors.price}</div>
           ) : null}
          <div className="input" >
          <Field name="title" placeholder='Title'/>
          </div>
           {errors.title && touched.title ? <div>{errors.title}</div> : null}
           <div className="input" >
          <Field name="description" placeholder='description'/>
          </div>
           {errors.description && touched.description ? <div>{errors.description}</div> : null}
           <button className='add-btn' type="submit">Submit</button>
         </Form>
       )}
     </Formik>
   </div>
      </div>
      


    </div>
  )
}

export default AddPage