import React, { useState, useEffect } from "react";
import { Select, MenuItem, Grid } from "@material-ui/core"
import axios from 'axios'
import { ProductCard } from "./ProductCard"
import "../styles/Home.scss"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export const Home = (props) => {
  const [categories, setCategories] = useState()
  const category = useSelector(state => state);
  const [selectedCategory, setSelectedCategory] = useState(category.id ? category.id : 1)
  const [products, setProducts] = useState()
  const [selectedProduct, setSelectedProduct] = useState()
  const dispatch = useDispatch();

  useEffect(() => {
    fetchCategories()
    fetchProducts(selectedCategory)
  }, [])

  const fetchCategories = async () => {

    axios.get("http://localhost:3000/categories").then((response) => {
      setCategories(response.data)
    }).then((error) => {
      console.log("error", error)
    })
  }

  const fetchProducts = (categoryId) => {
    axios.get(`http://localhost:3000/products?categoryId=${categoryId}`).then((response) => {
      setProducts(response.data);
    }).catch((error) => {
      console.log("error", error)
    })
  }

  const handleChange = (e) => {
    fetchProducts(e.target.value)
    setSelectedCategory(e.target.value)
  }

  const getProductDetails = (id) => {
    axios.get(`http://localhost:3000/products?id=${id}`).then((response) => {
      setSelectedProduct(response.data[0])
      dispatch({
        type: "SAVE_PRODUCT_ID",
        data: {
          id: selectedCategory
        }
      })
      props.history.push(`/details/${id}`)
    }).catch((error) => {
      console.log(error)
    })

  }

  return (
    <div className="homeContainer">
      <h1 className="headerTitle">Product Listing Page</h1>
      <div className="categoryContainer">
        <div className="category">
          Catergory
        </div>
        <div>
          <Select
            value={selectedCategory}
            defaultValue={selectedCategory}
            onChange={handleChange}
          >
            {categories && categories.map((category, i) => {
              return <MenuItem value={category.id}>{category.name}</MenuItem>
            })}
          </Select>
        </div>
      </div>
      <div className="productsContainer">
        <Grid container spacing={4}>
          {products?.map((product, i) => {
            return <Grid item xs={12} sm={3} md={3} >
              {<ProductCard product={product} getProductDetails={(id) => { getProductDetails(id) }} />}
            </Grid>
          })
          }
        </Grid>
      </div>
    </div>
  )
}
