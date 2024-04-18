import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import CORES from './src/comum/constantes/cores';
import TelaContador from './src/telas/TelaContador/TelaContador';

const estilos = StyleSheet.create({
 telaContador: {
    flex: 1,
    backgroundColor: CORES.FUNDO_PADRAO,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 16
}});

export default function App() {
  return (
    <View style={estilos.telaContador}>

      <TelaContador/>
      <StatusBar style="auto" />
    </View>
  );
}

