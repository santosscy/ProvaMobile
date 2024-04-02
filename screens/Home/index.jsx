import { View, Text, TextInput, Image, TouchableOpacity, FlatList } from "react-native"
import { estilo } from "./styles"
import Card from "../../componentes/Card"

export default function Home(){

    const lista = ['Elvira', 'lari', 'Valta', 'Joao']
    return(

        <View style={estilo.tela}>

        <Image source={require('../../assets/cp.png')} style={estilo.imgPaisagem}/>

            <View style={estilo.header}>
                
                <TextInput style={estilo.pesquisa} />

                <TouchableOpacity style={estilo.btn_lupa} >

                <Image source={require('../../assets/lupa.png')} style={estilo.lupa}/> 

                </TouchableOpacity>
            </View>

                <View style={estilo.tela2}>
            
            <View style={estilo.form}>

                <TextInput style={estilo.input_text}/>

                <TouchableOpacity style={estilo.botao} >
                    <Text style={estilo.texto_botao}>+</Text>
                </TouchableOpacity>
                
            </View>
            <FlatList
            data={lista}
            keyExtractor={item => item}
            renderItem={({item}) =>(
                <Card key = {item} name = {item}/>
            )}
            showsVerticalScrollIndicator={false}
            />
                </View>
        </View>
    )
}