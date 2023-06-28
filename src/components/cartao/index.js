import { View, Button, Image, Text} from "react-native";
import styles from "./style";

//Atribuindo de forma dinâmica filmes
export default function Item(props){
    return (
        <View style={styles.container}>
            <View style = {styles.viewImgItem}>
                <Image style={styles.imgitem} 
                source={{uri: props.item.urlImgItem}}/>
            </View>

            <View style = {styles.viewInformacoesItens}>
                <Text style={styles.nomeItem}>{props.item.nomeItem}</Text>
                <Text style={styles.descricao}>{props.item.descricao}</Text>
                <Button style={styles.btnTroca} title="Trocar Item"/>
            </View>
        </View>
    );
}