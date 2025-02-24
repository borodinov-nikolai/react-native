import { Catalog } from '@/screens/catalog'
import { globalStyles } from '@/shared/styles/global'
import { SafeAreaView} from 'react-native'

const screen = () => {

  return (
    <SafeAreaView style={globalStyles.safeArea} >
     <Catalog/>
    </SafeAreaView>
  )
}



export default screen