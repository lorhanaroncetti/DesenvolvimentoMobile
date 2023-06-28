import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Recuperar from "../pages/Recuperar";

const Stack = createNativeStackNavigator();


export default function AuthRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name="Login" 
            component={Login}
            options={{
            title: 'Página de Login'
            }}/>

            <Stack.Screen 
            name="Cadastro" 
            component={Cadastro}
            options={{
            title: 'Realizar cadastro'
            }} />

            <Stack.Screen 
            name="Recuperar" 
            component={Recuperar}
            options={{
            title: 'Recuperar senha'
            }}/>


        </Stack.Navigator>
    );
}