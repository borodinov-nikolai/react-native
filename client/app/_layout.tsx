import ApolloProvider from "@/shared/providers/apolloProvider";
import { Navbar } from "@/widgets/navbar";
import { Stack } from "expo-router";
import { Provider } from "react-native-paper";



export default function RootLayout() {
  return (
     <>
     <ApolloProvider>
      <Provider>
    <Stack
    screenOptions={{
      headerShown: false
    }}
    >
    <Stack.Screen name="(tabs)" />
  </Stack>
  <Navbar/>
  </Provider>
  </ApolloProvider>
  </>
  )
}


