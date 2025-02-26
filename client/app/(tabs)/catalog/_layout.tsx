import { Stack } from 'expo-router'


const CatalogLayout = () => {
  return (
    <Stack screenOptions={{headerShown: false, animation: 'none'}} >
        <Stack.Screen name='index' />
        <Stack.Screen name='[id]' />
    </Stack>
  )
}

export default CatalogLayout