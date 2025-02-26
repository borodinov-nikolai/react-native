import { Ionicons } from "@expo/vector-icons"
import { Link, RelativePathString } from "expo-router"
import { StyleSheet, Text, View } from "react-native"


const tabs = [
  {
    id: 1,
    icon: <Ionicons color={'#fff'} name='home' size={24} />,
    href: '/'
  },
  {
    id: 2,
    icon: <Ionicons color={'#fff'} name='list' size={24} />,
    href: '/catalog'
  },
  {
    id: 3,
    icon: <Ionicons color={'#fff'} name='cart' size={24} />,
    href: '/cart'
  },
  {
    id: 4,
    icon: <Ionicons color={'#fff'} name='settings' size={24} />,
    href: '/'
  }
]

export const Navbar = () => {
  return (
    <View style={styles.container} >
      {
        tabs.map(({id, icon, href})=> (
          <Link style={styles.navItem} key={id} href={href as RelativePathString} >{icon}</Link>
        ))
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      height: 50,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      borderTopWidth: 1,
      borderTopColor: '#ddd',
      backgroundColor: "rgba(36, 32, 61, 1)"
  },
  navItem: {

  }
})

