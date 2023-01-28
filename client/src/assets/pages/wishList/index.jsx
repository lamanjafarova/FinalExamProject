import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./index.scss"

const WishList = ({wishList, setWishList}) => {
    const navigate = useNavigate()
    const handleRemoveAll = () => {
        setWishList([])
        navigate("/")
    }
    const handleRemove = (_id) => {
        let removed = wishList.filter((q) => q._id !== _id)
        setWishList(removed)
    }
  return (
    <div id='wishList'>
        <div className="container">
            <div className="wish-list">
            <button className='all-btn' onClick={() => handleRemoveAll()}>Remove All</button>
                <div className="card">
                {wishList.map((elem) => {
                    return <div className="wish-card">
                          <h1 className='detail-h1'>{elem.name}</h1>
                            <p className='detail-price'>${elem.price}</p>
                            <h3 className='detail-h3'>{elem.title}</h3>
                            <p className='detail-p'>{elem.description}</p>
                        <div className="btns">
                            <button className='remove-btn' onClick={() => handleRemove(elem._id)}>Remove</button>
                        </div>
                    </div>
                })}
                </div>
            </div>
        </div>


    </div>
  )
}

export default WishList