import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminForm from "../../Components/AdminPageComponents/AdminForm";
import Loader from "../../Components/CommonComponents/Loader";

const AdminPage = () => {
  const [products, setProducts] = useState(null);
  const [isLoading,setIsLoading]=useState(true)
  const [uptdatedId, setuptdatedId] = useState(null)

  const getProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/product");
      const data = res.data;
      setProducts(data);
      setIsLoading(false)
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/product/${id}`);
    getProducts()

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <h3 className=" text-2xl py-8">AdminPage</h3>

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg py-4">New Product</h3>
          <AdminForm getProducts={getProducts} newProduct />
        </div>
      </dialog>

      <div className=" flex justify-start pb-7 px-4">
        <button
          className="btn"
          onClick={() => document.getElementById("my_modal_5").showModal()}>
          Add New
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Product image</th>
              <th>Product title</th>
              <th>Product price</th>
              <th>Actions </th>
            </tr>
          </thead>
          <tbody>
            {
              isLoading ? <Loader/>
              :
              products &&
                products.map((product) => (
                  <tr key={product._id}>
                    <td>
                      <div className=" w-[70px]">
                        <img src={product.image} alt="" />
                      </div>
                    </td>
                    <td>{product.title}</td>
                    <td>${product.price}</td>
                    <td className=" flex gap-2">
                      <button onClick={() => deleteProduct(product._id)} className="btn">
                        delete
                      </button>
                      <button className="btn" onClick={()=>{document.getElementById('my_modal_1').showModal()
                    setuptdatedId(product._id)
                  }}>update</button>
                     
                    </td>
                  </tr>
                ))
            }
             <dialog id="my_modal_1" className="modal">
                        <div className="modal-box">
                          <h3 className="font-bold text-lg ">Update Product</h3>
                          <AdminForm getProducts={getProducts} productId={uptdatedId} updatedProduct />
                        </div>
                      </dialog>

           
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminPage;
