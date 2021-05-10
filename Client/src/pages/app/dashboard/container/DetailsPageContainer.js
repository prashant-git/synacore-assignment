import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/DetailsPageContainer.scss"

export const DetailsPageContainer = (props) => {
  const [selectedProduct, setSelectedProduct] = useState()
  const selectedProductId = props?.match?.params?.id
  useEffect(() => {
    console.log("props", props)
    fetchApi()
  }, [])

  const fetchApi = () => {
    axios.get(`http://localhost:3000/products?id=${selectedProductId}`).then((response) => {
      setSelectedProduct(response.data[0])
    }).catch((error) => {
      console.log(error)
    })
  }

  return <div className="dashBoardContainer">
    <h1 className="title">Product Details Page</h1>
    <div className="detailsContainer">
      <div>
        <img src={selectedProduct?.imageUrl} className={"image"} />
      </div>
      <div>
        <p>
          {selectedProduct?.name}
        </p>
        <p>
          {selectedProduct?.description}
        </p>
      </div>
    </div>
  </div>
}