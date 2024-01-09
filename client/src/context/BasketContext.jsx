import { createContext, useState } from "react";
import UseLocalStorage from "../hooks/UseLocalStorage";

export const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = UseLocalStorage('basket');

  const addBasket = (product) => {
    console.log("Product", product);
    const exist = basket.findIndex((x) => x?._id === product._id);

    if (exist === -1) {
      setBasket([...basket, { ...product, count: 1 }]) 
      return
    } 
      basket[exist].count++
    
  };

  const decCount = (id) => {
    const exist = basket.findIndex((x) => x?._id === id);
    if (exist !== -1) {
      basket[exist].count--;
       if (basket[exist].count===0) {
        deleteProduct(id)
        return
    }
      setBasket([...basket])
    
    }
  };

  const incCount = (id) => {
    const exist = basket.findIndex((x) => x?._id ===id);
    if (exist !== -1) {
    basket[exist].count++
    }
    setBasket([...basket])
  };

  const deleteProduct =(id)=>{
    setBasket(basket.filter(x=>x._id !== id))

  }

  return (
    <BasketContext.Provider value={{ basket, addBasket, decCount, incCount,deleteProduct }}>
      {children}
    </BasketContext.Provider>
  );
};
