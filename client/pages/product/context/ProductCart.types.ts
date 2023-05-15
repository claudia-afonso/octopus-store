import { Dispatch, SetStateAction } from "react"

export type ProductsType = {
  id: string
  amount: number
}

export type ContextType = {
  products: ProductsType[]
  update: Dispatch<SetStateAction<ProductsType[]>>
}
