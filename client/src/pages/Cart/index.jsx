import React, { useContext } from "react";
import { BasketContext } from "../../context/BasketContext";

const Cart = () => {
  const { basket, incCount, decCount,deleteProduct } = useContext(BasketContext);
  console.log("basket item", basket);
  return (
    <div>
      <h2>Cart Page</h2>
      <div className=" flex gap-10 py-6">
        {basket &&
          basket.map((prodcut) => (
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={prodcut.image} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">

                <h2 className="card-title">Title: {prodcut.title}</h2>
                <p>Price: ${prodcut.price}</p>

                <div className="actions flex gap-3 items-center py-3">

                  <button onClick={() => decCount(prodcut._id)}>-</button>
                  <span> {prodcut.count}</span>
                  <button onClick={() => incCount(prodcut._id)}>+</button>
                </div>
                
                <div> <button onClick={()=>deleteProduct(prodcut._id)}>delete</button> </div>

              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Cart;
