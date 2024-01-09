import React, { createContext } from "react";
import UseLocalStorage from "../hooks/UseLocalStorage";

export const WishlishContext = createContext();

export const WishlishProvider = ({ children }) => {
  const [wishlist, setWishlist] = UseLocalStorage("wishlist");

  const addWishlist = (product) => {
    const selectProduct = wishlist.findIndex(x=> x._id === product._id);
    if (selectProduct) {
      setWishlist([...wishlist,{...product}]);
      return
    }
  };

  const deleteFromWishlist=(id)=>{
    setWishlist(wishlist.filter(x=>x._id !== id))
  }

  return (
    <WishlishContext.Provider value={{wishlist, addWishlist,deleteFromWishlist }}>
      {children}
    </WishlishContext.Provider>
  );
};
