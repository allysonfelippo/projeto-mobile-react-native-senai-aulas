import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import CORES from '../../comum/constantes/cores';

const estilos = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: CORES.FUNDO_PADRAO,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      gap: 16
  }});

const TelaContador = () => {
    const [contador, setContador] = React.useState(0)

    return (
        <View style={estilos.container}>
            <BotaoCustomizado
                cor='primaria'
                onPress={() => setContador(contador - 1)}>
                -
            </BotaoCustomizado>

            <Text style={estilos.contador}>{contador}</Text>

            <BotaoCustomizado
                cor='secundaria'
                onPress={() => setContador(contador + 1)}>
                +
            </BotaoCustomizado>
        </View>
    );
};

export default TelaContador;


