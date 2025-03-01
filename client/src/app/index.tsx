import { globalStyles } from '@/src/shared/styles/global'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

const Home = () => {
  return (
    <SafeAreaView style={globalStyles.safeArea} >
      <View style={globalStyles.container} >
        <Text className={'color-white text-4xl'} >Welcome</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

})
export default Home