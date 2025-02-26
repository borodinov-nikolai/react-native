import { GET_PRODUCT } from "@/entities/product"
import { globalStyles } from "@/shared/styles/global"
import { useQuery } from "@apollo/client"
import { useLocalSearchParams } from "expo-router"
import { SafeAreaView, StyleSheet, Text, View } from "react-native"


const screen = () => {
    const {id} = useLocalSearchParams()
    const {data} = useQuery(GET_PRODUCT, {variables: {input: +id}})
    const product = data?.product
  return (
    <SafeAreaView style={globalStyles.safeArea} >
        <View style={globalStyles.container} >
            <Text style={globalStyles.h1} >{product?.name}</Text>
            <Text style={[globalStyles.p, styles.text]} >{product?.description}</Text>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    text: {
        marginTop: 20
    }
})

export default screen