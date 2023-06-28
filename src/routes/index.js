import AppRoutes from "./AppRoutes";
import AuthRoutes from "./AuthRoutes";
import { useAuth } from "../contexts/AuthContext";
import { View } from "react-native";
import { ActivityIndicator } from "react-native";

export default function Routes(){

    const {logado, loading} = useAuth();

    if(loading){
        return(
            <View>
                <ActivityIndicator size={'large'}/>
            </View>
        )
    }

    return(
        logado == true ? <AppRoutes/> : <AuthRoutes/>
    )
}