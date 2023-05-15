import React, { createContext, useState } from "react"
import { ContextType, ProductsType } from "./ProductCart.types"

const ProductCartContext = createContext<ContextType>({
  products: [],
  update: () => {
    /* void */
  }
})

type PropsType = {
  children: React.ReactNode
}

const ProductCartContextProvider: React.FunctionComponent<PropsType> = ({ children }) => {
  const [products, setProducts] = useState<ProductsType[]>([])

  return (
    <ProductCartContext.Provider
      value={{
        products,
        update: setProducts
      }}
    >
      {children}
    </ProductCartContext.Provider>
  )
}

export { ProductCartContextProvider, ProductCartContext }
