import { GET_ME } from "@/src/entities/user"
import { ProfileScreen } from "@/src/screens/profile"
import { useQuery } from "@apollo/client"
import { router, useFocusEffect, useRouter } from "expo-router"
import { useCallback } from "react"



const Profile = () => {
  const {data, error} = useQuery(GET_ME)

  if(error) {
    console.log(error)
  }

  useFocusEffect(
    useCallback(()=> {
      if(!data) {
        router.replace('/profile/auth')
      }
    }, [data]
  )
  )

  if(!data) {
    return null
  }

    return <ProfileScreen/>
   
  
}

export default Profile