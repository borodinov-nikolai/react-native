import ApolloProvider from "@/shared/providers/apolloProvider";
import { Navbar } from "@/widgets/navbar";
import { Stack } from "expo-router";



export default function RootLayout() {
  return (
     <>
     <ApolloProvider>
    <Stack
    screenOptions={{
      headerShown: false
    }}
    >
    <Stack.Screen name="(tabs)" />
  </Stack>
  <Navbar/>
  </ApolloProvider>
  </>
  )
}


