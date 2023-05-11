import React from 'react'

const Index = () => {
    return (
        <div className="container">
            <div className="products_list">
                <div className="titlebar">
                    <div className="titlebar_item">
                        <h1>Products</h1>
                    </div>
                    <div className="titlebar_item">
                        <div className="btn">
                            Add product
                        </div>
                    </div>
                </div>

                <div className="table">
                    <div className="list_header">
                        <p>Image</p>
                        <p>Product</p>
                        <p>Type</p>
                        <p>Inventory</p>
                        <p>Price</p>
                        <p>Actions</p>
                    </div>
                    <div className="list_items">
                        <img src="" height="40px" />
                        <a href="#">Product name</a>
                        <p>Category</p>
                        <p>50</p>
                        <p>750</p>
                        <div>
                            <button className = "btn-icon success">
                                <i className = "fas fa-pencil-alt"></i>
                            </button>
                            <button className = "btn-icon danger">
                                <i className = "fas fa-trash-alt"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index
