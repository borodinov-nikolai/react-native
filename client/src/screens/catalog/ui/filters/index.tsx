import { globalStyles } from "@/src/shared/styles/global"
import { Dispatch, FC, SetStateAction, useState } from "react"
import { ScrollView, Text, TextInput, View } from "react-native"
import { Chip, Menu } from "react-native-paper"
import { styles } from "./styles"

type Props = {
    search: string
    setSearch: Dispatch<SetStateAction<string>>
    sort: string
    setSort: Dispatch<SetStateAction<string>>
    category?: string
    setCategory: Dispatch<SetStateAction<string>>
}

const cartegories = ['Comics', 'Games', 'Movies', 'Anime', 'Music', 'Sport', 'Animation', 'SCIFI', 'Retro Toys']

const Filters: FC<Props> = ({search, setSearch, sort, setSort, category, setCategory}) => {
      const [visible, setVisible] = useState<boolean>(false)
    
      const onItemChange = (value: string)=> {
        setSort(value)
        setVisible(false)
      }

  return (
    <View> 
    <TextInput placeholderTextColor={'rgb(121, 114, 122)'} style={styles.search} onChangeText={(value)=> setSearch(value)} value={search} placeholder="Поиск" />
      <ScrollView
       contentContainerStyle={styles.categoriesList}
       horizontal
       pagingEnabled
       showsHorizontalScrollIndicator={false}
       >
          {cartegories.map((item)=> (
            <Text onPress={()=> setCategory(item)} key={item} style={[globalStyles.p, category === item && styles.checkedCategory]} >{item}</Text>
          ))}
       
      </ScrollView>
    <View style={styles.selectHolder} >
      <Menu visible={visible}
      onDismiss={()=> setVisible(false)}
      anchor={<Chip onPress={()=> setVisible(true)} >{sort === 'price:asc' ? 'Цена (По возрастанию)' : 'Цена (По убыванию)'}</Chip>}          
      >
        <Menu.Item title='Цена (По возрастанию)' onPress={()=> onItemChange('price:asc')} />
        <Menu.Item title='Цена (По убыванию)' onPress={()=> onItemChange('price:desc')} />
      </Menu>
    </View>
     </View>
  )
}


export default Filters