import { GET_PRODUCTS } from "@/entities/product";
import { globalStyles } from "@/shared/styles/global";
import { useQuery } from "@apollo/client";
import { FlatList, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { useState } from "react";
import ProductCard from "../productCard";
import { styles } from "./styles";
import { Picker } from "@react-native-picker/picker";

export const Catalog = () => {
  const [visible, setVisible] = useState<boolean>(false)
  const [search, setSearch] = useState<string>('')
  const [selected, setSelected] = useState<string>("1")
  const {data, loading} = useQuery(GET_PRODUCTS, { 
    variables: { input: { pagination: { page: 1, pageSize: 10}, search: search } }
  });




  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.h1}>Catalog</Text>
      <View> 
        <Searchbar style={styles.search} onChangeText={(value)=> setSearch(value)} value={search} placeholder="Поиск" />
        <View style={styles.selectHolder} >
          <Text>Сортировка</Text>
          <Picker
                  selectedValue={selected}
                  onValueChange={(itemValue) => setSelected(itemValue)}
                  style={{ height: 50, width: 200}}
          >
             <Picker.Item label="Выберите вариант" value="1"  />
            <Picker.Item value='price:asc' label='Цена (По возврастанию)' />
            <Picker.Item value='price:desc' label='Цена (По убыванию)' />
          </Picker>
        </View>
         </View>
     { !loading && data?.products?.data && 
        <FlatList 
        style={styles.list}
        data={data.products.data}
        keyExtractor={(item)=> item.id.toString()}
        numColumns={2}
        renderItem={({item})=> {
          return <ProductCard product={item} />
        }}
      />}
    </View>
  );
}

