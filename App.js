import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import BotaoCustomizado from './comum/componentes/BotaoCustomizado/BotaoCustomizado';
import CORES from './comum/constantes/cores';


export default function App() {
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

      <StatusBar style="auto" />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CORES.FUNDO_PADRAO,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 16
  },

  contador: {
    fontSize: 72,
    color: CORES.TEXTO_PADRAO
  }
});
