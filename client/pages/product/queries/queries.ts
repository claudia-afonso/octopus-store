import { gql } from "@apollo/client"

export const QUERY_PRODUCTS = gql`
  query query_products {
    allProducts {
      id
      name
      power
      description
      price
      quantity
      brand
      weight
      height
      width
      length
      model_code
      colour
      img_url
    }
  }
`
