import { serverUrl } from "@/shared/constants"
import { Product } from "@/shared/gql/graphql"
import { Link } from "expo-router"
import { FC } from "react"
import { Image, Text, View } from "react-native"
import { Button } from "react-native-paper"
import { styles } from "./styles"


type Props = {
    product: Product
}

const ProductCard: FC<Props> = ({product}) => {
    const {id, name, catalogPreview, price} = product
  return (
    <Link href={{pathname: '/catalog/[id]', params: {id}}}   >
      <View style={styles.item} >
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
            <Button style={styles.btn} mode='contained' >В корзину</Button>
          </View>
    </Link>
  )
}

export default ProductCard