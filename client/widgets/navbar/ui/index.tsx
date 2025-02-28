import { Feather, Ionicons } from "@expo/vector-icons"
import { useNavigationState } from "@react-navigation/native"
import { Link, RelativePathString } from "expo-router"
import { useState } from "react"
import { StyleSheet, View } from "react-native"


type Tabs = {
  id: number,
  icon: keyof typeof Ionicons.glyphMap,
  href: string
}

const tabs: Tabs[] = [
  {
    id: 1,
    icon: 'home',
    href: '/'
  },
  {
    id: 2,
    icon: 'list',
    href: '/catalog'
  },
  {
    id: 3,
    icon: 'cart',
    href: '/cart'
  },
  {
    id: 4,
    icon: 'person',
    href: '/profile'
  }
]

export const Navbar = () => {
  const state = useNavigationState((state)=> state)
  let current = state.routes[state.index]?.name.split('/')[0]
  current = current === 'index' ? '' : current
  console.log(current)
  return (
    <View style={styles.container} >
      {
        tabs.map(({id, icon, href})=> (
          <Link key={id} href={href as RelativePathString} ><Ionicons color={`/${current}` === href ? 'rgb(59, 117, 211)' : '#fff'} name={icon} size={28} /></Link>
        ))
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      height: 70,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      borderTopWidth: 1,
      borderTopColor: '#ddd',
      backgroundColor: "rgba(36, 32, 61, 1)"
  }
})

