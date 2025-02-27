import { selectCart } from "@/entities/cart"
import { useAppSelector } from "@/shared/hooks/reduxToolkit"
import { Ionicons } from "@expo/vector-icons"
import { Tabs } from "expo-router"
import { StyleSheet, View } from "react-native"
import { Badge } from "react-native-paper"


const TabsLayout = () => {

const cart = useAppSelector(selectCart)

  return (
    <Tabs screenOptions={{headerShown: false, animation: 'none'}} >
        <Tabs.Screen   
                name='index'
                options={{
                    title: 'Главная',
                    tabBarIcon: ({ focused, color }) => (
                        <Ionicons name={focused ? "home-sharp" : "home-outline"} color={color} size={24} />
                    )
                }}
            />
            <Tabs.Screen
                name='catalog'
                options={{
                    title: 'Каталог',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'list-sharp' : 'list-outline' } color={color} size={24} />
                    ),
                     popToTopOnBlur: true
                }} />

        <Tabs.Screen
                name='cart'
                options={{
                    title: 'Корзина',
                    tabBarIcon: ({ focused, color }) => (
                        <View style={styles.container} >
                      <Badge size={15} style={styles.badge} >{cart?.totalQuantity}</Badge>
                      <Ionicons name={focused ? "cart-sharp" : "cart-outline"} color={color} size={24} /> 
                      </View>
                    )
                }}
            />

<Tabs.Screen
                name='profile'
                options={{
                    title: 'Профиль',
                    tabBarIcon: ({ focused, color }) => (
                        <Ionicons name={focused ? "person-sharp" : "person-outline"} color={color} size={24} />
                    )
                }}
            />
    </Tabs>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        position: 'relative'
    },
    badge: {
        position: 'absolute',
        right: -5,
        top: -3,
        zIndex: 1
    }
})

export default TabsLayout