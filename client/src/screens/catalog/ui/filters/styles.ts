import { StyleSheet } from "react-native";




export const styles = StyleSheet.create({
    categoriesList: {
        marginTop: 10,
        flexDirection: 'row',
        gap: 10
    },
    search: {
        marginTop: 10,
        borderWidth: 1,
        borderColor: 'rgb(121, 114, 122)',
        padding: 10,
        borderRadius: 6,
        color: '#fff'
       },
       selectHolder: {
         marginTop: 10,
         flexDirection: 'row',
         justifyContent: 'flex-end'
       },
       checkedCategory: {
        color: 'blue'
       }
})