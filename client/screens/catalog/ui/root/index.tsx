import { GET_PRODUCTS } from "@/entities/product";
import { serverUrl } from "@/shared/constants";
import { globalStyles } from "@/shared/styles/global";
import { useQuery } from "@apollo/client";
import { FlatList, Image, Text, View } from "react-native";
import { styles } from "./styles";

export const Catalog = () => {
  const {data, loading} = useQuery(GET_PRODUCTS, { 
    variables: { input: { pagination: { page: 1, pageSize: 10 } } }
  });




  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.h1}>Catalog</Text>
     { !loading && data?.products?.data && 
        <FlatList 
        data={data.products.data}
        keyExtractor={(item)=> item.id.toString()}
        numColumns={2}
        renderItem={({item})=> {
          const {name, catalogPreview} = item
          return <View style={styles.item} >
          <View>
            {catalogPreview?.url && (
              <Image 
                width={100} 
                height={100} 
                source={{ uri: serverUrl + catalogPreview.url }} 
                onError={(e) => console.log('Ошибка загрузки изображения:', e.nativeEvent.error)}
              />
            )}
          </View>
          <Text>{name}</Text>
        </View>
        }}
      />}
    </View>
  );
}

