import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from "axios"
import {Helmet} from "react-helmet";
import "./index.scss"

const Details = () => {
  const [detail, setDetail] = useState([])
  const { _id } = useParams()
  const navigate = useNavigate()
  let getData = async() => {
    let response = await axios.get(`http://localhost:8080/swan/${_id}`)
    setDetail(response.data)
  }
  useEffect(() => {  
  getData()
  }, [])
  const handleDelete = (_id) => {
    axios.delete(`http://localhost:8080/swan/${_id}`)
    navigate("/")
  }
  return (
    <div id='detail'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{detail.name}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="container">
        <div className="detail-cards">
            <h1 className='detail-h1'>{detail.name}</h1>
            <p className='detail-price'>${detail.price}</p>
            <h3 className='detail-h3'>{detail.title}</h3>
            <p className='detail-p'>{detail.description}</p>
            <div className="btns">
              <button className='back-btn' onClick={() => navigate("/")}>GO BACK</button>
              <button className='del-btn' onClick={() => handleDelete(detail._id)}>Delete</button>
            </div>
        </div>
      </div>


    </div>
  )
}

export default Details