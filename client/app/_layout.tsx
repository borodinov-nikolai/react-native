import ApolloProvider from "@/shared/providers/apolloProvider";
import { Provider } from "react-native-paper";
import { Stack } from "expo-router";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/shared/store";


export default function RootLayout() {

  return (
     <ApolloProvider>
      <ReduxProvider store={store} > 
      <Provider >
     <Stack screenOptions={{headerShown: false}} >
      <Stack.Screen name='(tabs)' />
     </Stack>
  </Provider>
  </ReduxProvider>
  </ApolloProvider>
  )
}


