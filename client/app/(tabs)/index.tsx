import { globalStyles } from '@/shared/styles/global'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

const Index = () => {
  return (
    <SafeAreaView style={globalStyles.safeArea} >
      <View style={globalStyles.container} >
      <Text style={globalStyles.h1} >Home</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

})
export default Index 