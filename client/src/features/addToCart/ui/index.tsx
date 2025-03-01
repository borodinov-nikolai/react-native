import { addCartItem } from "@/src/entities/cart"
import { useAppDispatch } from "@/src/shared/hooks/reduxToolkit"
import { FC, ReactNode } from "react"
import { GestureResponderEvent, Pressable } from "react-native"



type Props = {
    id: number
    children: ReactNode
}

export const AddToCart:FC<Props> = ({children, id}) => {
    const dispatch = useAppDispatch()

    const addToCart = (e: GestureResponderEvent)=> {
            e.stopPropagation()
            dispatch(addCartItem({id, quantity: 1}))
    }

  return (
    <Pressable onPress={(e)=> addToCart(e)} >
        {children}
    </Pressable>
  )
}
