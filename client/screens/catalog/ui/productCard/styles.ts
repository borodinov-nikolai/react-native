import { Dimensions, StyleSheet } from "react-native";


const width = (Dimensions.get('window').width - 30) / 2


export const styles = StyleSheet.create({
    item: {
        display: 'flex',
        width: width,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        borderRadius: 10,
        padding: 10,
    },
    price: {
        marginTop: 5,
        fontWeight: 600
    },
    btn: {
        marginTop: 10
    }
})