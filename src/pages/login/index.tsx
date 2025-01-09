import React from "react";
import { 
    Text, 
    View,
    Image,
    TextInput,
    TouchableOpacity
 } from "react-native"
import { style } from "./styles";
import Logo from "../../assets/logo.png"
import {MaterialIcons} from '@expo/vector-icons'
import { themas } from "../../global/themes";


export default function Login (){
    return(

        <View style={style.container}>
            
            <View style={style.boxTop}>
                <Image
                source={Logo}
                style={style.logo}
                resizeMode= "contain"
                />
            <Text style={style.text}>Seja bem vindo novamente!!!!</Text>

            </View>

            <View style={style.boxMid}>
                <Text style={style.titleInput}>Endereço de Email</Text>
                <View style={style.boxInput}>
                    <TextInput
                        style={style.input}
                     />
                    <MaterialIcons
                        name = 'email'
                        size = {20}
                        color = {themas.Colors.gray}
                    />
                </View>
                
                <Text style={style.titleInput}>Senha</Text>
                <View style={style.boxInput}>
                    <TextInput
                        style={style.input}
                     />
                    <MaterialIcons
                        name = 'remove-red-eye'
                        size = {20}
                        color = {themas.Colors.gray}
                    />
                </View>
            </View>

            <View style={style.boxBottom}>
                <TouchableOpacity style={style.button}>
                    <Text style={style.textButton}>Entrar</Text>
                </TouchableOpacity>
            </View>
            <Text style={style.textBottom}>Não tem conta? Crie agora</Text>


        </View>


    )
}

