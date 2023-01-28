import React, { useEffect, useState } from 'react'
import axios from "axios"
import Logo from "../../images/divider2.png"
import { Link } from 'react-router-dom'
import "./index.scss"
const Cards = ({wishList, setWishList}) => {
    const [cardsData, setCardsData] = useState([])
    const [toggle, setToggle] = useState([])
    let getData = async() => {
        let response = await axios.get("http://localhost:8080/swan")
        setCardsData(response.data)
    }
    useEffect(() => {
        getData()
    }, [])
    const handleSearch = (e) => {
        axios.get("http://localhost:8080/swan")
        .then((response) => {
            let searchName = response.data.filter((q) => q.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
            setCardsData(searchName)
        })
    }
    const handleSort = () => {
        setToggle(!toggle)
        if(!toggle){
        let sortedData = cardsData.sort((a, b) => a.price - b.price)
        setCardsData([...sortedData])
        } else {
            getData()
        }
    }
    const handleDelete = (_id) => {
        axios.delete(`http://localhost:8080/swan/${_id}`)
        let delData = cardsData.filter((a) => a._id !== _id)
        setCardsData(delData)  
    }
    const handleAdd = (obj) => {
        if(!wishList.find((q) => q._id === obj._id)){
            setWishList([...wishList, obj])
        } else{
            window.alert("Add Already")
        }
    }
  return (
    <div id='card'>
        <div className="background">
        <div className="container">
            <div className="cards">
             <div className="sort-search">
             <input className='search-input' type="text" placeholder='Search by Name' onChange={(e) => handleSearch(e)} />
                <button className='sort-btn' onClick={() => handleSort()}>Sort by Price</button>
             </div>
             <div className="card-detail">
             {cardsData.map((element) => {
                    return <div className="card">
                        <h5 className='card-h5'>{element.name}</h5>
                        <p className='card-price'>${element.price} <span className='card-span'>/ Month</span></p>
                        <h6 className='card-h6'>Best package for single people</h6>
                        <h3 className='card-h3'>{element.title}</h3>
                        <img src={Logo} alt="" className='card-img'/>
                        <p className='card-p'>{element.description}</p>
                        <button className='card-btn'><Link to={`/home/${element._id}`}>ORDER NOW...</Link></button>
                        <div className="del-add">
                            <button className='del-btn' onClick={() => handleDelete(element._id)}><i className="fa-solid fa-trash"></i></button>
                            <button className={(wishList.find((a) => a._id === element._id)) ? "add" : "not-add"} onClick={() => handleAdd(element)}>
                                {(wishList.find((q) => q._id === element._id)) ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i> }
                            </button>
                        </div>
                    </div>
                })}
             </div>
            </div>
        </div>
        </div>


    </div>
  )
}

export default Cards