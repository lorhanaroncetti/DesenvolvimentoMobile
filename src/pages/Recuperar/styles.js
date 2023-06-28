import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C0C0C0',
        alignItems: 'center',
        justifyContent: 'center',
    },

    img: {
        height: '150px',
        width: '150px',
        marginBottom: 15
    },

    input: {
        border: '1px solid black',
        width: '70%',
        right: 40,
        padding: 5,
        marginBottom: 10,
        backgroundColor: 'gray',
        borderRadius: 5
    },

    btn: {
        border: '2px solid black',
        width: '70%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: 'lightgray'
    },

    viewLinks: {
        marginTop: 10,
        flexDirection: 'row',
        width: '70%',
        justifyContent: 'space-between'
    }
})

export default styles;