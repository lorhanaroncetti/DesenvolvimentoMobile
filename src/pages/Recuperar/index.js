import { View, TextInput, Image, TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import { Link } from "@react-navigation/native";


export default function Recuperar(){
    return(
        <View style={styles.container}>
            <Image source={require('../../assets/imgs/logo.png')} style={styles.img}/>
            <TextInput
            placeholder="E-mail" style={styles.input}/>
            

            <TouchableOpacity style={styles.btn}>
                <Text> Recuperar </Text>
            </TouchableOpacity>

            <View style={styles.viewLinks}>
            <Link to={{screen: "Login"}}>
                    Voltar para a página de login</Link>
                    
                <Link to={{screen: "Cadastro"}}>
                    Registre-se</Link>

            </View>

        </View>



    )

}