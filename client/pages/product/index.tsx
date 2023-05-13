import { useQuery, gql } from "@apollo/client"

const QUERY_PRODUCTS = gql`
  query query_products {
    allProducts {
      id
      name
      description
      price
    }
  }
`

export default function Product() {
  const { data, loading, error } = useQuery(QUERY_PRODUCTS)

  return <div>Product page</div>
}
