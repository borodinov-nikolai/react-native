import { GET_CARTITEMS, selectCart } from '@/src/entities/cart'
import { useAppSelector } from '@/src/shared/hooks/reduxToolkit'
import { globalStyles } from '@/src/shared/styles/global'
import { useQuery } from '@apollo/client'
import { FlatList, SafeAreaView, Text, View } from 'react-native'
import { styles } from './styles'

export const CartScreen = () => {
  const cart = useAppSelector(selectCart)
 const {data: cartItems} = useQuery(GET_CARTITEMS, {variables: {input: {ids: cart.cartItems.map(({id})=> id)}}})
  return (
    <SafeAreaView style={globalStyles.safeArea} >
        <View style={globalStyles.container} >
          <Text>{cart.totalQuantity}</Text>
          <FlatList
           data={cartItems?.cartItems}
           keyExtractor={(item)=> item.id.toString()}
           renderItem={({item})=> (
            <View><Text style={styles.text} >{item.name}</Text></View>
           )}
          />
        </View>
    </SafeAreaView>
  )
}

