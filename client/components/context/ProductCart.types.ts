import { Dispatch, SetStateAction } from "react"
import { Product } from "../../src/__generated__/graphql"

export type ProductsType = {
  product: Product
  amount: number
}

export type ContextType = {
  products: ProductsType[]
  update: Dispatch<SetStateAction<ProductsType[]>>
}
