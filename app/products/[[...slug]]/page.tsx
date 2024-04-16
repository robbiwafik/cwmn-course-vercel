import React from 'react'


interface Props {
    params: { slug: string[] },
    searchParams: { sortOrder: string }
}

const ProductPage = ({ 
  params: { slug }, 
  searchParams: { sortOrder } 
}: Props ) => {
  return (
    <h1>Product Page</h1>
  )
}

export default ProductPage