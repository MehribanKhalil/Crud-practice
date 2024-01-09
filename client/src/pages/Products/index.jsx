import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../Components/CommonComponents/Loader";
import { Link, useNavigate } from "react-router-dom";
import { BasketContext } from "../../context/BasketContext";
import { WishlishContext } from "../../context/WishlishContext";

const Products = () => {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const {addBasket} = useContext(BasketContext)
  const {addWishlist}=useContext(WishlishContext)
  const navigate = useNavigate();

  const getProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/product");
      const data = res.data;
      setProducts(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleBasket=(product)=>{
    addBasket(product)
    navigate('/cart')
  }

  const handleWishlist=(product)=>{
    addWishlist(product)
    navigate('/wishlist')

  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <h3 className=" text-2xl py-8">Products</h3>
      <div className=" mt-7 flex flex-col items-center justify-center gap-4 ">
        {isLoading ? (
          <Loader />
        ) : (
          products &&
          products.map((product) => (
            <div key={product._id} className="bg-white text-black">
              <Link to={product._id}>
                <div className=" w-[300px]">
                  <img src={product.image} alt="" />
                </div>
               
              </Link>
              <div className=" space-y-1 py-2">
                  <h5>Title: {product.title}</h5>
                  <p>Price: ${product.price}</p>
                  <button onClick={()=>handleBasket(product)}   className=" bg-white border-black">add basket</button>
                  <button onClick={()=>handleWishlist(product)}   className=" bg-white border-black">add wishlist</button>
                </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Products;
