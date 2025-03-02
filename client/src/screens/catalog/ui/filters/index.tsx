import { globalStyles } from "@/shared/styles/global"
import { Dispatch, FC, SetStateAction, useState } from "react"
import { ScrollView, Text, TextInput, View } from "react-native"
import { Chip, Menu } from "react-native-paper"


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
    <TextInput className={'mt-[10px] border border-color border-slate-400 p-[10px] rounded-[10px] text-white'} placeholderTextColor={'rgb(121, 114, 122)'} onChangeText={(value)=> setSearch(value)} value={search} placeholder="Поиск" />
      <ScrollView
       className={'mt-[10px]'}
       contentContainerStyle={{gap: 10}}
       horizontal
       pagingEnabled
       showsHorizontalScrollIndicator={false}
       >
          {cartegories.map((item)=> (
            <Text onPress={()=> setCategory(item)} key={item} style={[globalStyles.p, category === item && {color: 'blue'}]} >{item}</Text>
          ))}
       
      </ScrollView>
    <View className={'mt-[10px] flex-row justify-end'} >
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