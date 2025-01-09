import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },

    boxTop: {
        height: Dimensions.get('window').height / 3,
        width: '100%',
        //backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    },

    boxMid: {
        height: Dimensions.get('window').height / 4,
        width: '100%',
        //backgroundColor: 'blue',
        paddingHorizontal: 37

    },

    boxBottom: {
        height: Dimensions.get('window').height / 3,
        width: '100%',
        //backgroundColor: 'green',
        alignItems: 'center',
        //justifyContent: 'center'

    },
    logo: {
        width: 80,
        height: 80,

    },
    text: {
        fontWeight: 'bold',
        marginTop: 40,
        fontSize: 18
    },
    titleInput: {
        marginLeft: 5,
        color: themas.Colors.gray,
        marginTop: 20
    },
    boxInput: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderRadius: 40,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5,
        backgroundColor: themas.Colors.lightGray,
        borderColor: themas.Colors.lightGray
    },
    input: {
        height: '100%',
        width: '90%',
        borderRadius: 40,
        paddingLeft: 5
        //backgroundColor: 'red'
    },
    button: {
        width: 225,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themas.Colors.primary,
        borderRadius: 40,
        marginTop: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,

    },
    textButton: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold'
    },
    textBottom:{
        fontSize: 16,
        color: themas.Colors.gray,
    }

})