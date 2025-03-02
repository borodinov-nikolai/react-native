import { serverUrl } from "@/shared/constants"
import { Product } from "@/shared/gql/graphql"
import { useRouter } from "expo-router"
import { FC } from "react"
import { Dimensions, Image, Pressable, Text} from "react-native"
import { Button } from "react-native-paper"
import { styles } from "./styles"
import { AddToCart } from "@/features/addToCart"


type Props = {
    product: Product
}

const ProductCard: FC<Props> = ({product}) => {
    const {id, name, catalogPreview, price} = product
    const router = useRouter()
    const width = (Dimensions.get('window').width - 30) / 2



  return (

      <Pressable style={{width}} className={`flex justify-center items-center bg-['#f0f0f0'] p-[10px] rounded-[10px]`} onPress={()=> router.push(`/catalog/${id}`)} >
              {catalogPreview?.url && (
                <Image
                  width={100}
                  height={100}
                  source={{ uri: serverUrl + catalogPreview.url }}
                  onError={(e) => console.log('Ошибка загрузки изображения:', e.nativeEvent.error)}
                />
              )}
            <Text >{name}</Text>
            <Text style={styles.price} >{price} ₽</Text>
            <AddToCart id={id} ><Button style={styles.btn} mode='contained' >В корзину</Button></AddToCart>
          </Pressable>

  )
}

export default ProductCard