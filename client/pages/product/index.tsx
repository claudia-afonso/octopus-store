import { useQuery } from "@apollo/client"
import { Query_ProductsQuery, Product } from "../../src/__generated__/graphql"
import Loader from "../../components/Loader"
import Layout from "../../components/Layout"
import ProductCard from "../../components/Product"
import { QUERY_PRODUCTS } from "./queries/queries"
import { ProductCartContextProvider } from "./context/ProductCartContext"

export default function ProductPage() {
  const { data, loading, error } = useQuery<Query_ProductsQuery>(QUERY_PRODUCTS)

  if (loading) {
    return (
      <Layout>
        <Loader />
      </Layout>
    )
  }

  if (error) console.error(error)

  return (
    <ProductCartContextProvider>
      <Layout>
        {data.allProducts.map((product: Product, index: number) => (
          <ProductCard data={product} key={index} />
        ))}
      </Layout>
    </ProductCartContextProvider>
  )
}
