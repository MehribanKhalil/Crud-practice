import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'


const DetailPage = () => {
  const [data,setData]=useState(null)
  const {productId} = useParams()
  const getSingleProduct = async ()=>{
    const res = await axios.get(`http://localhost:5000/api/product/${productId}`)
    setData(res.data)
  }
  
  useEffect(() => { 
   getSingleProduct()
  }, [])
    

  return (
    <div>
      <h2 className=" text-2xl py-8">Detail page</h2>
        { data &&
          <div>
            <div>
              <img src={data.image} alt="" />
            </div>
          </div>
        }
    </div>
  )
}

export default DetailPage