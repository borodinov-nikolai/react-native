import { cartSlice } from '@/entities/cart'
import { configureStore } from '@reduxjs/toolkit'



export const store = configureStore({
    reducer: {
      cart: cartSlice
    }
  })
  


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch