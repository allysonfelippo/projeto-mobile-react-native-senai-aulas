import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import CORES from '../../comum/constantes/cores';

const estilos = StyleSheet.create({
    telaContador: {
        flex: 1,
        backgroundColor: CORES.FUNDO_PADRAO,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 16,
    },
    contador: {
        fontSize: 32
    }
});

const TelaContador = () => {
    const [contador, setContador] = React.useState(0)

    return (
        <View style={estilos.telaContador}>
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


