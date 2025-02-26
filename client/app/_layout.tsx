import ApolloProvider from "@/shared/providers/apolloProvider";
import { Provider } from "react-native-paper";
import { Stack } from "expo-router";



export default function RootLayout() {



  return (
     <ApolloProvider>
      <Provider >
     <Stack screenOptions={{headerShown: false}} >
      <Stack.Screen name='(tabs)' />
     </Stack>
  </Provider>
  </ApolloProvider>
  )
}


