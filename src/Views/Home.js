import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import Loader from '../Components/Loader'
import ProductCard from '../Components/ProductCard'
import useAxiosGet from '../Hooks/HttpRequests'

function Home(){


    const url = `http://5fc7d5b3f3c77600165d8de2.mockapi.io/api/v1/products?page=1&limit=10`

    let products = useAxiosGet(url)

    let content = null

    if(products.error){
        content = <p> There was an error </p>
    }

    if(products.loading){
        content = <Loader/>
    }


    if(products.data){
        content =    
        products.data.map((product, key) => 
            <div>
                <ProductCard 
                    product = {product}/>
            </div>
        )
    }

    return(
        <div>
        <h1 className="font-bold text-2xl mb-3">
            <p>
                Products List
            </p>
        </h1>
        {content}
    </div>
    )
}


export default Home