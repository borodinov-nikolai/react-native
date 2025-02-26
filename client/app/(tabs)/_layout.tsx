import { Ionicons } from "@expo/vector-icons"
import { Tabs } from "expo-router"


const TabsLayout = () => {



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
                        <Ionicons name={focused ? "cart-sharp" : "cart-outline"} color={color} size={24} />
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

export default TabsLayout