import React, { useState, useEffect } from "react";
import "../styles/ProductCard.scss"

export const ProductCard = (props) => {
  const { product: { categoryId, id, imageUrl, name, description }, getProductDetails } = props
  console.log("product")
  return <div onClick={() => { getProductDetails(id) }} className="cardContainer">
    <div >
      <img src="https://homepages.cae.wisc.edu/~ece533/images/watch.png" className="imageContainer" />
    </div>
    <div>
      {name}
    </div>
    <div>

    </div>

  </div>
}