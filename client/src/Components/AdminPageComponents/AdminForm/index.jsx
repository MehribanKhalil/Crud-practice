import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const AdminForm = ({ getProducts, productId, newProduct, updatedProduct }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const createProduct = async (data) => {
    const res = await axios.post("http://localhost:5000/api/product", data);
    getProducts();
  };

  const getProductsById = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/product/${productId}`
      );
      const data = res.data;
      setSelectedValue(data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateProduct = async (productId,data) => {
    try {
      const res = await axios.put(
        `http://localhost:5000/api/product/${productId}`,
        data
      );
      console.log("this data", selectedValue);
      getProducts()
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
      productId && getProductsById();
  }, [productId]);

  return (
    <>
    <Formik
      enableReinitialize={true}
      initialValues={{
        image: selectedValue?.image || "",
        title: selectedValue?.title || "",
        price: selectedValue?.price || "",
      }}
      validationSchema={Yup.object({
        image: Yup.string().required("Required"),
        title: Yup.string().required("Required"),
        price: Yup.number().required("Required"),
      })}
      onSubmit={(values, { resetForm }) => {
        if (newProduct) {
          createProduct(values);
        resetForm()
        } else {
          updateProduct(productId, values);
        }
      }}
    >
      <Form className="w-full space-y-3">
        <div className="flex flex-col">
          <label htmlFor="image">Product Image</label>
          <Field name="image" type="text" className="py-1" />
          <ErrorMessage name="image" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="title">Product Title</label>
          <Field name="title" type="text" className="py-1" />
          <ErrorMessage name="title" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="price">Product Price</label>
          <Field name="price" type="number" className="py-1" />
          <ErrorMessage name="price" />
        </div>
        {newProduct && (
          <div className=" flex gap-2 justify-end mt-4">
            <button type="submit" className="btn" >
              Save
            </button>
            <form method="dialog" className="">
              <button className="btn">Close</button>
            </form>
          </div>
        )}
        {updatedProduct && (
          <div className="modal-action">
            <button className="btn">
              save changes
            </button>
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        )}
      </Form>
      
    </Formik>
    
    
    </>
  );
};

export default AdminForm;
