import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        height: 150,
        backgroundColor: '#FFFFFF'
    },
        
    viewImgItem: {
        width: '30%',
        padding: 5,
    },

    viewInformacoesItens:{
        width: '70%',
        padding: 20,
        color: '#FFFFFF'
    },

    imgitem: {
        width: '100%',
        height: '100%',
    },

    nomeItem: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    descricao: {
        marginBottom: 10
    },

    btnTroca: {
        borderRadius: 15,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default styles;