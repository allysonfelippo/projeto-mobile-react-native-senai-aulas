import { View } from "react-native";
import CampoTextoCustomizado from "../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado";
import estilos from "./TelaFormularioStyle";
import React from "react";
import BotaoCustomizado from '../../comum/componentes/BotaoCustomizado/BotaoCustomizado'

const TelaFormulario = () => {
    const [campoNome, setCampoNome] = React.useState('')
    const [campoSobrenome, setCampoSobrenome] = React.useState('')
    const [campoCPF, setCampoCPF] = React.useState('')

    const salvar = () => {
        console.log('Salvar:', { campoNome, campoSobrenome, campoCPF } );
    }


    return (
        <View style={estilos.container}>
            <CampoTextoCustomizado label='Nome' value={campoNome} onChangeText={setCampoNome} />
            <CampoTextoCustomizado label='Sobrenome' value={campoSobrenome} onChangeText={setCampoSobrenome} />
            <CampoTextoCustomizado label='CPF' value={campoCPF} onChangeText={setCampoCPF} />
            <BotaoCustomizado onPress={salvar}>Salvar</BotaoCustomizado>
        </View>
    )
}

export default TelaFormulario;