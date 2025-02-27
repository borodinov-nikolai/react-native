import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";




type CartItem = {
    id: number
    quantity: number
}

interface ICartState {
    cartItems: CartItem[]
    boxQuantity: number
    totalQuantity: number
}



const initialState: ICartState = {
    cartItems: [],
    boxQuantity: 0,
    totalQuantity: 0,
}



const _cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCart: (state, action:PayloadAction<ICartState> )=> {
                const {cartItems, boxQuantity, totalQuantity} = action.payload
                state.cartItems = cartItems
                state.boxQuantity = boxQuantity
                state.totalQuantity = totalQuantity
        },
        clearCart: (state)=> {
              state.cartItems = []
              state.totalQuantity = 0
              state.boxQuantity = 0
              AsyncStorage.removeItem('cart')
        },
        addCartItem: (state, action: PayloadAction<CartItem>) => {
                const cartItem = action.payload
                const findedItem = state.cartItems.find((item) => item.id === cartItem.id)

                if (!findedItem) {
                        state.cartItems = [...state.cartItems, cartItem]
                } else {
                        const newArray = state.cartItems.map((item) => {
                                if (item.id === cartItem.id) {
                                        item.quantity += cartItem.quantity
                                }
                                return item
                        })
                        state.cartItems = newArray

                }
                state.totalQuantity = state.cartItems.reduce((sum, item) => sum + item.quantity, 0)
                const cartString = JSON.stringify(state)
                AsyncStorage.setItem('cart', cartString)
        },
   
        removeCartItem: (state, action: PayloadAction<{id: number}>)=> {
                const filteredArray = state.cartItems.filter((item)=> item.id !== action.payload.id)
                state.cartItems = filteredArray
                state.totalQuantity = state.cartItems.reduce((sum, item) => sum + item.quantity, 0)

                const cartString = JSON.stringify(state)
                AsyncStorage.setItem('cart', cartString)
        },

        setCartItemQuantity:(state, action: PayloadAction<{id: number, quantity: number}>)=> {
                const {id, quantity} = action.payload
               const newArray = state.cartItems.map((item)=> {
                if(item.id === id) {
                     item.quantity = quantity
                }
                return item
               }).filter((item)=> item.quantity > 0)
               state.cartItems = newArray
               state.totalQuantity = state.cartItems.reduce((sum, item) => sum + item.quantity, 0)
               const cartString = JSON.stringify(state)
               AsyncStorage.setItem('cart', cartString)
        },

        setBoxQuantity:( state, action: PayloadAction<number> )=> {
                state.boxQuantity = action.payload
                const cartString = JSON.stringify(state)
                AsyncStorage.setItem('cart', cartString)
        }
}
})

export const {setCart, clearCart, addCartItem, removeCartItem, setCartItemQuantity, setBoxQuantity} = _cartSlice.actions
export const cartSlice = _cartSlice.reducer