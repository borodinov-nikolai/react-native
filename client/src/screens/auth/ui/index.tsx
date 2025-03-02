import { globalStyles } from '@/shared/styles/global'
import { SafeAreaView, Text, View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useMutation, useQuery } from '@apollo/client'
import { SIGN_IN } from '@/entities/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { GET_ME } from '@/entities/user'
import { useRouter } from 'expo-router'

type FormValues = {
  login?: string,
  password?: string
}

export const AuthScreen = () => {
  const router = useRouter()
  const {data, refetch} = useQuery(GET_ME)
   const [signIn] = useMutation(SIGN_IN)
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      login: undefined,
      password: undefined
    }
  })

   const onSubmit: SubmitHandler<FormValues> = async (data)=> {
    const {login, password} = data
      if(login && password) {
    try {
      const res = await signIn({variables: {input: {login: `FDS-${login}`, password, remember: true}}})
      const jwt = res.data?.signIn.jwt
      if(jwt) {
        await AsyncStorage.setItem('jwt', jwt)
        await refetch()
        router.replace('/profile')
      }
    } catch(e) {
      console.error(e)
    }
      }
   }


  return (
    <SafeAreaView style={globalStyles.safeArea} >
      <View style={globalStyles.container} >
        <Text style={globalStyles.h1} >Авторизация</Text>
        <View className={'flex-1 justify-center items-center'} >
          <View className={'mt-[40px] h-auto w-[80%] bg-white rounded-[20px] px-[20px] py-[40px] gap-[20px] flex flex-col'}  >
            <Controller
              name='login'
              control={control}
              render={({ field: { onChange } }) => (
                <TextInput onChangeText={onChange} label={'Логин'} mode='outlined' />
              )}
            />
            <Controller
              name='password'
              control={control}
              render={({ field: { onChange } }) => (
                <TextInput onChangeText={onChange} label={'Пароль'} mode='outlined' />
              )}
            />
             <Button onPress={handleSubmit(onSubmit)} mode='contained' >Автризоваться</Button>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}
