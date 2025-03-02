import { GET_CARTITEMS, selectCart } from '@/entities/cart'
import { useAppSelector } from '@/shared/hooks/reduxToolkit'
import { globalStyles } from '@/shared/styles/global'
import { useQuery } from '@apollo/client'
import { FlatList, SafeAreaView, Text, View } from 'react-native'


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
            <View><Text className={'text-white'} >{item.name}</Text></View>
           )}
          />
        </View>
    </SafeAreaView>
  )
}

