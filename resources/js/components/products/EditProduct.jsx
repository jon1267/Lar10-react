import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {

    const navigate = useNavigate()
    const { id } = useParams()

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [photo, setPhoto] = useState(null)
    const [type, setType] = useState('')
    const [quantity, setQuantity] = useState('')
    const [price, setPrice] = useState('')

    useEffect(() => {
        getProduct()
    }, [])

    const getProduct = async () => {}

    return (
        <div className="container">
            <div className="product_edit">

                <div className="titlebar">
                    <div className="titlebar_item">
                        <h1>Edit Product</h1>
                    </div>
                    <div className="titlebar_item">
                        <button className="btn"  >
                            Save
                        </button>
                    </div>
                </div>

                <div className="card_wrapper">
                    <div className="wrapper_left">
                        <div className="card">
                            <p>Name</p>
                            <input type="text"  />

                            <p>Description (Optional)</p>
                            <textarea cols="10" rows="5"  ></textarea>

                            <div className="media">
                                <ul className="images_list">
                                    <li className="image_item">
                                        <div className="image_item-img">
                                            <img src='' width="117" height="100"/>
                                        </div>
                                    </li>

                                    <li className="image_item">
                                        <form className="image_item-form">
                                            <label className="image_item-form--label">Add Image</label>
                                            <input type="file" className="image_item-form--input"  />
                                        </form>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper_right">
                        <div className="card">
                            <p>Product Type</p>
                            <input type="text"  />

                            <hr className="hr" />

                            <p>Quantity</p>
                            <input type="text"  />

                            <hr className="hr" />

                            <p>Price</p>
                            <input type="text" />

                            <div className="br"></div>
                        </div>
                    </div>
                </div>

                <div className="titlebar">
                    <div className="titlebar_item">
                    </div>
                    <div className="titlebar_item">
                        <button className="btn"  >
                            Save
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Edit
