import React from 'react'

const ProductthruApi = ({productData}:any) => {
  return (
    <div>{productData[0].title}</div>
  )
}

export default ProductthruApi