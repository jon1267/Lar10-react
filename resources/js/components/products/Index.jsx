import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Index = () => {

    const navigate = useNavigate()

    const [products, setProducts] = useState([])

    const newProduct = () => {
        navigate('/product/new')
    }
    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = async () => {
        await  axios.get('/api/get-all-product')
            .then(({data}) => {
                setProducts(data.products);
            })
    }

    const editProduct = (id) => {
        navigate(`/product/edit/${id}`)
    }

    const deleteProduct = async (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: 'You cannot undo this operation !',
            icon: 'warning',
            showCancelButton: true,
            cancelButtonColor: '#d33',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                axios.get(`/api/delete-product/${id}`)
                    .then(() => {
                        toast.fire({
                            icon: 'success',
                            title: `Product with id = ${id} was deleted`
                        })
                        getProducts()
                    }).catch((error) => {})
            }
        })
    }

    return (
        <div className="container">
            <div className="products_list">
                <div className="titlebar">
                    <div className="titlebar_item">
                        <h1>Products</h1>
                    </div>
                    <div className="titlebar_item">
                        <div className="btn" onClick={()=>newProduct()}>
                            Add product
                        </div>
                    </div>
                </div>

                <div className="table">
                    <div className="list_header">
                        <p>Image</p>
                        <p>Product</p>
                        <p>Type</p>
                        <p>Quantity</p>
                        <p>Price</p>
                        <p>Actions</p>
                    </div>
                    {
                        products.length > 0 && (
                            products.map((item, key) => (
                                <div className="list_items" key={key}>
                                    <img src={`/upload/${item.photo}`} height="40px" alt="" />
                                    <a href="#">{item.name}</a>
                                    <p>{item.type}</p>
                                    <p>{item.quantity}</p>
                                    <p>{item.price}</p>
                                    <div>
                                        <button className = "btn-icon success" onClick={() => editProduct(item.id)}>
                                            <i className = "fas fa-pencil-alt"></i>
                                        </button>
                                        <button className = "btn-icon danger" onClick={() => deleteProduct(item.id)} >
                                            <i className = "fas fa-trash-alt"></i>
                                        </button>
                                    </div>
                                </div>
                            ))
                        )
                    }

                </div>
            </div>
        </div>
    )
}

export default Index
