import { View, TextInput, Image, TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import { Link } from "@react-navigation/native";


export default function Cadastro(){
    return(
        <View style={styles.container}>
            <Image source={require('../../assets/imgs/logo.png')} style={styles.img}/>
            <TextInput
            placeholder="User" style={styles.input}/>
            <TextInput
            placeholder="E-mail" style={styles.input}/>
            <TextInput
            placeholder="Senha" style={styles.input}/>

            <TouchableOpacity style={styles.btn}>
                <Text> Cadastrar </Text>
            </TouchableOpacity>

            <View style={styles.viewLinks}>
                <Link to={{screen: "Login"}}>
                    Voltar para a página de login</Link>

                <Link to={{screen: "Recuperar"}}>
                    Recuperar Senha</Link>
            </View>

        </View>



    )

}