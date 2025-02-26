import { selectCart } from '@/entities/cart'
import { useAppSelector } from '@/shared/hooks/reduxToolkit'
import { globalStyles } from '@/shared/styles/global'
import { SafeAreaView, Text, View } from 'react-native'

export const CartScreen = () => {
  const cart = useAppSelector(selectCart)
  console.log(cart)
  return (
    <SafeAreaView style={globalStyles.safeArea} >
        <View style={globalStyles.container} >
          <Text>{cart.totalQuantity}</Text>
        </View>
    </SafeAreaView>
  )
}

