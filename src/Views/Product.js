import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import {useParams} from 'react-router-dom'
import Loader from '../Components/Loader'
import useAxiosGet from '../Hooks/HttpRequests'

function Product(){

    const {id} = useParams()

    const url = `http://5fc7d5b3f3c77600165d8de2.mockapi.io/api/v1/products/${id}`

    let product = useAxiosGet(url)

    let content = null

    if(product.error){
        content = <p> There was an error </p>
    }


    if(product.loading){
        content = <Loader/>
    }

    if(product.data)
    {
        content = 
        <div>
            <h1 className = "text-2xl font-bold mb-3">
                {product.data.name}
            </h1>

            <div>
                <img 
                    src= {product.data.images}
                    alt = {product.data.name}
                />
            </div>

            <div className = "font-bold text-xl mb-3">
               price: $ {product.data.price}
            </div>

        </div>      
    }

    return(
        <div>
            {content}
        </div>
    )
    
} 

export default Product