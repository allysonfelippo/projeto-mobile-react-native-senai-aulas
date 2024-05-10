import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import TelaContador from './src/telas/TelaContador/TelaContador';
import CORES from './src/comum/constantes/cores';
import TELAS from './src/comum/constantes/telas';
import TelaPrincipal from './src/telas/TelaPrincipal/TelaPrincipal';
import TelaFormulario from './src/telas/TelaFormulario/TelaFormulario';
import TelaListaTarefas from './src/telas/TelaListaTarefas/TelaListaTarefas';
import TelaLogin from './src/telas/TelaLogin/TelaLogin';

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
        <Stack.Navigator screenOptions={{ cardStyle: { flex: 1 } }}>
          <Stack.Screen
            name={TELAS.TELA_PRINCIPAL}
            component={TelaPrincipal}
            options={{ title: 'Tela Principal', headerLeft: null }}
          />
          <Stack.Screen name={TELAS.TELA_CONTADOR} component={TelaContador} options={{ title: 'Tela Contador' }} />
          <Stack.Screen name={TELAS.TELA_FORMULARIO} component={TelaFormulario} options={{ title: 'Tela Formulário' }} />
          <Stack.Screen name={TELAS.TELA_LISTA} component={TelaListaTarefas} options={{ title: 'Lista de tarefas' }} />
          <Stack.Group screenOptions={{ headerShown: false }}>
            <Stack.Screen name={TELAS.TELA_LOGIN} component={TelaLogin} options={{ title: 'Tela Contador' }} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>

      <StatusBar style="auto" />
    </View>
  );
}

