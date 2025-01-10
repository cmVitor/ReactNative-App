import React from "react";
import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
    ActivityIndicator
} from "react-native"
import { style } from "./styles";
import Logo from "../../assets/logo.png"
import { MaterialIcons } from '@expo/vector-icons'
import { themas } from "../../global/themes";


export default function Login() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [loading, setLoading] = React.useState(false)

    async function getLogin() {
        try{
            setLoading(true)
            if(!email || !password){
                return Alert.alert('Atenção', 'Preencha todos os campos')
            }

            setTimeout(()=>{
                Alert.alert('Logado com sucesso')
                setLoading(false)
            },1500)



        }catch(error){
            Alert.alert('Erro ao fazer login')
        }
    }

    return (

        <View style={style.container}>

            <View style={style.boxTop}>
                <Image
                    source={Logo}
                    style={style.logo}
                    resizeMode="contain"
                />
                <Text style={style.text}>Seja bem vindo novamente!!!!</Text>

            </View>

            <View style={style.boxMid}>
                <Text style={style.titleInput}>Endereço de Email</Text>
                <View style={style.boxInput}>
                    <TextInput
                        style={style.input}
                        value= {email}
                        onChangeText={setEmail}
                    />
                    <MaterialIcons
                        name='email'
                        size={20}
                        color={themas.Colors.gray}
                    />
                </View>

                <Text style={style.titleInput}>Senha</Text>
                <View style={style.boxInput}>
                    <TextInput
                        secureTextEntry={true}
                        style={style.input}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <MaterialIcons
                        name='remove-red-eye'
                        size={20}
                        color={themas.Colors.gray}
                    />
                </View>
            </View>

            <View style={style.boxBottom}>
                <TouchableOpacity style={style.button} onPress={getLogin}>
                    {loading ? 
                        <ActivityIndicator color={'white'} size={'small'}/>
                    :
                        <Text style={style.textButton}>Entrar</Text> 
                    }
                </TouchableOpacity>
            </View>
            <Text style={style.textBottom}>Não tem conta?
                <Text style={{ color: themas.Colors.primary, fontWeight: 'bold' }}>Crie agora</Text>
            </Text>

        </View>


    )
}

