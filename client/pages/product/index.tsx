import { useQuery, gql } from "@apollo/client"
import { Query_ProductsQuery, Product } from "../../src/__generated__/graphql"
import Loader from "../../components/Loader"
import Layout from "../../components/Layout"
import ProductCard from "../../components/Product"
import { ProductCartContextProvider } from "../../components/context/ProductCartContext"
import Head from "next/head"

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
        <Head>
          <title>Products: Octopus Energy store</title>
        </Head>
        {data.allProducts.map((product: Product, index: number) => (
          <ProductCard data={product} key={index} />
        ))}
      </Layout>
    </ProductCartContextProvider>
  )
}
