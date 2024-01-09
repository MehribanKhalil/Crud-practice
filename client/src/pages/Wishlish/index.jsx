import React, { useContext } from "react";
import { WishlishContext } from "../../context/WishlishContext";

const WishList = () => {
  const { wishlist, deleteFromWishlist } = useContext(WishlishContext);
  console.log("this is wishlist", wishlist);
  return (
    <div>
      {wishlist &&
        wishlist.map((product) => (
          <div key={product._id} className="card card-side bg-base-100 shadow-xl">
            <figure>
              <img src={product.image} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Title: {product.title}</h2>
              <p> Price: {product.price}</p>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-primary"
                  onClick={() => deleteFromWishlist(product._id)}
                >
                  delete
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default WishList;
