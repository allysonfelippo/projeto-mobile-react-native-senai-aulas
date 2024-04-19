import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import TelaContador from './src/telas/TelaContador/TelaContador';
import CORES from './src/comum/constantes/cores';
import TELAS from './src/comum/constantes/telas';
import TelaPrincipal from './src/TelaPrincipal/TelaPrincipal';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const estilos = StyleSheet.create({
  todoApp: {
    flex: 1,
    backgroundColor: CORES.FUNDO_PADRAO
  }
})

export default function App() {
  return (
    <View style={estilos.todoApp}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={TELAS.TELA_PRINCIPAL} component={TelaPrincipal}/>
          <Stack.Screen name={TELAS.TELA_CONTADOR} component={TelaContador}/>
        </Stack.Navigator>
      </NavigationContainer>

      <StatusBar style="auto" />
    </View>
  );
}

