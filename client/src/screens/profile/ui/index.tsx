import { GET_ME } from "@/entities/user"
import { globalStyles } from "@/shared/styles/global"
import { useApolloClient, useMutation, useQuery } from "@apollo/client"
import { SafeAreaView, Text, View } from "react-native"
import { Button } from "react-native-paper"
import { SIGN_OUT } from "@/entities/auth"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useRouter } from "expo-router"


export const ProfileScreen = () => {
  const router = useRouter()
  const client = useApolloClient()
  const {data} = useQuery(GET_ME)
  const [signOut] = useMutation(SIGN_OUT)

  const onSubmit = async ()=> {
    try {
      const res = await signOut()
      if(res.data?.signOut) {
        await AsyncStorage.removeItem('jwt')
         client.cache.evict({
          fieldName: 'getMe'
        })
        router.push('/')
      }
    } catch(e) {
      console.error(e)
    }
  }

  return (
    <SafeAreaView style={globalStyles.safeArea} >
        <View style={globalStyles.container} >
        <Text style={globalStyles.h1} >{data?.getMe?.login}</Text>
         <View className={'justify-center items-center mt-8'} >
            <Button onPress={onSubmit} mode='contained' >Выйти</Button>
         </View>
        </View>
    </SafeAreaView>
  )
}

