import { useContext } from "react"
import { ContextType } from "./ProductCart.types"
import { ProductCartContext } from "./ProductCartContext"

export const useProductCartContext = (): ContextType => {
  const context = useContext(ProductCartContext)

  if (context === undefined) {
    console.log("no context")
  }

  const { products, update } = context
  return { products, update }
}
