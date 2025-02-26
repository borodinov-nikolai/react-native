import { GET_PRODUCTS } from "@/entities/product";
import { globalStyles } from "@/shared/styles/global";
import { useQuery } from "@apollo/client";
import { FlatList, SafeAreaView, Text, TextInput, View } from "react-native";
import { Chip, Menu } from "react-native-paper";
import { useState } from "react";
import ProductCard from "../productCard";
import { styles } from "./styles";
import { Sort } from "@/shared/gql/graphql";

export const Catalog = () => {
  const [visible, setVisible] = useState<boolean>(false)
  const [search, setSearch] = useState<string>('')
  const [selected, setSelected] = useState<string>('price:asc')
  const {data, loading} = useQuery(GET_PRODUCTS, { 
    variables: { input: { pagination: { page: 1, pageSize: 10}, search: search, orderBy: {field: selected.split(':')[0], value: selected.split(':')[1] as Sort} } }
  });


  const onItemChange = (value: string)=> {
    setSelected(value)
    setVisible(false)
  }



  return (
    <SafeAreaView style={globalStyles.safeArea} >
    <View style={globalStyles.container}>
      <View> 
        <TextInput placeholderTextColor={'rgb(121, 114, 122)'} style={styles.search} onChangeText={(value)=> setSearch(value)} value={search} placeholder="Поиск" />
        <View style={styles.selectHolder} >
          <Menu
          visible={visible}
          onDismiss={()=> setVisible(false)}
          anchor={<Chip onPress={()=> setVisible(true)} >{selected === 'price:asc' ? 'Цена (По возрастанию)' : 'Цена (По убыванию)'}</Chip>}          
          >
            <Menu.Item title='Цена (По возрастанию)' onPress={()=> onItemChange('price:asc')} />
            <Menu.Item title='Цена (По убыванию)' onPress={()=> onItemChange('price:desc')} />
          </Menu>
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
    </SafeAreaView>
  );
}

