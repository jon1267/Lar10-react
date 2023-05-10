import React from 'react'
import { Routes, Route } from 'react-router-dom'

import IndexProduct from '../components/products/Index'
import NotFound from '../components/NotFound'

const Router = () => {
    return (
        <div>
            <Routes>
                <Route path="/*" element={ <NotFound /> } />
                <Route path="/"  element={ <IndexProduct /> } />
            </Routes>
        </div>
    )
}

export default Router
