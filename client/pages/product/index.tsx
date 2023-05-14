import { useQuery, gql } from "@apollo/client"
import { Query_ProductsQuery } from "../../src/__generated__/graphql"
import Loader from "../../components/Loader"
import Layout from "../../components/Layout"
import styles from "./product.module.scss"

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

  if (loading)
    return (
      <Layout>
        <div className={styles.container}>
          <Loader />
        </div>
      </Layout>
    )

  return (
    <Layout>
      <div>{data.allProducts[0].name}</div>
    </Layout>
  )
}
