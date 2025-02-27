import { serverUrl } from "@/shared/constants"
import { Product } from "@/shared/gql/graphql"
import { useRouter } from "expo-router"
import { FC } from "react"
import { Image, Pressable, Text} from "react-native"
import { Button } from "react-native-paper"
import { styles } from "./styles"
import { AddToCart } from "@/features/addToCart"


type Props = {
    product: Product
}

const ProductCard: FC<Props> = ({product}) => {
    const {id, name, catalogPreview, price} = product
    const router = useRouter()
  return (

      <Pressable onPress={()=> router.push(`/catalog/${id}`)} style={styles.item} >
              {catalogPreview?.url && (
                <Image
                  width={100}
                  height={100}
                  source={{ uri: serverUrl + catalogPreview.url }}
                  onError={(e) => console.log('Ошибка загрузки изображения:', e.nativeEvent.error)}
                />
              )}
            <Text>{name}</Text>
            <Text style={styles.price} >{price} ₽</Text>
            <AddToCart id={id} ><Button style={styles.btn} mode='contained' >В корзину</Button></AddToCart>
          </Pressable>

  )
}

export default ProductCard