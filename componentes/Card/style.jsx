import { StyleSheet } from "react-native";

export const estilo = StyleSheet.create({
    container :{
        marginTop: 20,
        flexDirection: 'row',
        height: 76,
        width: '100%',
        alignItems: 'center',
        backgroundColor:'#fff',
        borderRadius: 25,
    },
    texto: {
        flex: 1,
        padding: 2,
        fontSize: 50,
        color: '#000',
        marginLeft: 6,
        fontFamily: 'Alura'
    },

    perfil:{
        height: 48,
        width: 48,
        margin: 16,
    },


})