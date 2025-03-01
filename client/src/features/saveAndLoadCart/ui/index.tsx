import { GET_CARTITEMS, removeCartItem, selectCart, setCart } from '@/src/entities/cart'
import { GET_ME, UPDATE_ME } from '@/src/entities/user'
import { useAppDispatch, useAppSelector } from '@/src/shared/hooks/reduxToolkit'
import { useMutation, useQuery } from '@apollo/client'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ReactNode, useEffect } from 'react'




export const SaveAndLoadCart = () => {
  const { data: userData, loading } = useQuery(GET_ME)
  const userId = userData?.getMe?.id
  const dispatch = useAppDispatch()
  const cart = useAppSelector(selectCart)
  const [updateUser] = useMutation(UPDATE_ME)
  const { data: cartItemsData } = useQuery(GET_CARTITEMS, { variables: { input: { ids: cart?.cartItems?.map((item) => item.id) } } })

  useEffect(() => {

    const func = async ()=> {

      const savedCardString = await AsyncStorage.getItem('cart')
      const savedCart = savedCardString && JSON.parse(savedCardString)
  
      if (!loading && userId && userData?.getMe?.cart) {
        dispatch(setCart(userData.getMe.cart))
        const cartString = JSON.stringify(userData.getMe.cart)
        await AsyncStorage.setItem('cart', cartString)
      } else if (!loading && !userId && savedCart) {
        dispatch(setCart(savedCart))
      }
    }

    func()

  }, [userId, loading])

  useEffect(() => {
    const updateCart = async () => {
      if (userId && cart) {
        await updateUser({ variables: { input: { cart: cart } } })
      }
    }
    updateCart()
  }, [cart])

  useEffect(() => {
    if (cart?.cartItems?.length > 0 && cartItemsData?.cartItems && (cartItemsData?.cartItems.length !== cart.cartItems.length)) {
      const removingItems = cart?.cartItems?.filter((item) => !cartItemsData?.cartItems?.some(({ id }) => id === item.id))?.map((item) => item.id)
      removingItems?.forEach((id) => dispatch(removeCartItem({ id })))
    }
  }, [cartItemsData, cart])

  return null
}
