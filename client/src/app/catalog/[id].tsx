import { GET_PRODUCT } from "@/src/entities/product"
import { serverUrl } from "@/src/shared/constants"
import { globalStyles } from "@/src/shared/styles/global"
import { useQuery } from "@apollo/client"
import { useLocalSearchParams } from "expo-router"
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native"
import Swiper from 'react-native-swiper'

const product = () => {
    const {id} = useLocalSearchParams()
    const {data} = useQuery(GET_PRODUCT, {variables: {input: +id}})
    const product = data?.product
    const {name, description, images} = product || {}
    console.log(serverUrl + (images?.[0].url ?? ''))
  return (
    <SafeAreaView style={globalStyles.safeArea} >
    <ScrollView>
    <View style={globalStyles.container} >
           {images && <Swiper style={styles.swiper} >
               {
                images?.map(({id, url})=> (
                    <View style={styles.slide} key={id} >
                        <Image style={styles.image} source={{uri: serverUrl + url}} resizeMode='contain' />
                    </View>
                ))
               }
            </Swiper>}
            <View style={styles.description} >
                <Text style={globalStyles.h1} >{name}</Text>
                <Text style={[globalStyles.p, styles.text]} >{description}</Text>
            </View>
        </View>
    </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    description: {
  
    },
    text: {
        marginTop: 20
    },
    swiper: {
        height: 500
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%'
    }
})

export default product