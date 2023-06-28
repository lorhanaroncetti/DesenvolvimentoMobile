import { View, TextInput, Image, TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import { Link } from "@react-navigation/native";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";


export default function Login(){

    const {signIn} = useContext(AuthContext);

    return(
        <View style={styles.containerLogo}>
            <Image source={require('../../assets/imgs/logo.png')} style={styles.imgLogo}/>
            <TextInput
            placeholder="E-mail" style={styles.inputLogo}/>
            <TextInput
            placeholder="Senha" style={styles.inputLogo}/>

            <TouchableOpacity style={styles.btnLogo} onPress={() => signIn()}>
                <Text> Login </Text>
            </TouchableOpacity>

            <View style={styles.viewLinks}>
                <Link to={{screen: "Cadastro"}}>
                    Registre-se</Link>

                <Link to={{screen: "Recuperar"}}>
                    Recuperar Senha</Link>
            </View>

        </View>



    )

}