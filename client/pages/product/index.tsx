import { useQuery, gql } from "@apollo/client"
import { Query_ProductsQuery } from "../../src/__generated__/graphql"

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
  const { data, loading, error } = useQuery<Query_ProductsQuery>(QUERY_PRODUCTS)

  return <div>Product page</div>
}
