import ApolloProvider from "@/shared/providers/apolloProvider";
import { Provider } from "react-native-paper";
import { Stack } from "expo-router";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/shared/store";
import { SaveAndLoadCart } from "@/features/saveAndLoadCart";
import { Navbar } from "@/widgets/navbar";
import '../shared/styles/global.css'





export default function RootLayout() {

  return (
    <ApolloProvider>
      <ReduxProvider store={store} > 
      <Provider >
       <>
       <SaveAndLoadCart/>
       <Stack screenOptions={{headerShown: false, contentStyle: {backgroundColor: "rgba(36, 32, 61, 1)"}, animation: 'none' }} >
        <Stack.Screen name='index'/>
        <Stack.Screen name='catalog/[id]'/>
        <Stack.Screen name='catalog/index'/>
        <Stack.Screen name='profile/index'/>
        <Stack.Screen name='profile/auth/index'/>
        <Stack.Screen name='cart/index'/>
        <Stack.Screen name='+not-found'/>
       </Stack>
       <Navbar/>
       </>

  </Provider>
  </ReduxProvider>
  </ApolloProvider>
  )
}


