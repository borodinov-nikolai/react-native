import { GET_PRODUCTS } from "@/entities/product";
import { globalStyles } from "@/shared/styles/global";
import { useQuery } from "@apollo/client";
import { FlatList, SafeAreaView, ScrollView, Text, TextInput, View } from "react-native";
import { Chip, Menu } from "react-native-paper";
import { useState } from "react";
import ProductCard from "../productCard";
import { styles } from "./styles";
import { Sort } from "@/shared/gql/graphql";
import Filters from "../filters";

export const CatalogScreen = () => {
  const [search, setSearch] = useState<string>('')
  const [sort, setSort] = useState<string>('price:asc')
  const [category, setCategory] = useState<string>('Comics')
  const {data, loading} = useQuery(GET_PRODUCTS, { 
    variables: { input: { pagination: { page: 1, pageSize: 10}, search: search, orderBy: {field: sort.split(':')[0], value: sort.split(':')[1] as Sort},
    category
  } }
  });




  return (
    <SafeAreaView style={globalStyles.safeArea} >
    <View style={globalStyles.container}>
    <Filters category={category} setCategory={setCategory} search={search} setSearch={setSearch} sort={sort} setSort={setSort} />
     { !loading && data?.products?.data && 
        <FlatList 
        style={styles.list}
        data={data.products.data}
        keyExtractor={(item)=> item.id.toString()}
        numColumns={2}
        contentContainerStyle={{gap: 10}}
        columnWrapperStyle={{gap: 10}}
        renderItem={({item})=> {
          return <ProductCard product={item} />
        }}
      />}
    </View>
    </SafeAreaView>
  );
}

