import React from 'react';
import TelaContador from './src/telas/TelaContador/TelaContador';
import CORES from './src/comum/constantes/cores';
import TELAS from './src/comum/constantes/telas';
import TelaPrincipal from './src/telas/TelaPrincipal/TelaPrincipal';
import TelaFormulario from './src/telas/TelaFormulario/TelaFormulario';
import TelaListaTarefas from './src/telas/TelaListaTarefas/TelaListaTarefas';
import TelaLogin from './src/telas/TelaLogin/TelaLogin';
import TelaNovoUsuario from './src/telas/TelaNovoUsuario/TelaNovoUsuario';

import { StyleSheet, View } from 'react-native';
import { CHAVES_STORAGE } from './src/comum/constantes/chaves-storage';
import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { pegarItemStorage } from './src/comum/services/serviceStorage';

const Stack = createStackNavigator();

const estilos = StyleSheet.create({
  todoApp: {
    flex: 1,
    backgroundColor: CORES.FUNDO_PADRAO
  }
})

export default function App() {
  const [usuarioLogado, setUsuarioLogado] = useState();

  useEffect(() => {
    const verificarSeUsuarioEstaLogado = async () => {
      const usuarioQueEstaNoStorage = await pegarItemStorage(CHAVES_STORAGE.USUARIO_LOGADO);
      setUsuarioLogado(usuarioQueEstaNoStorage);
    };

    verificarSeUsuarioEstaLogado();
  }, []);

  if (usuarioLogado === undefined) {
    return <></>;
  }
  return (
    <View style={estilos.todoApp}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={usuarioLogado ? TELAS.TELA_PRINCIPAL : TELAS.TELA_LOGIN}
          screenOptions={{ cardStyle: { flex: 1 } }}
        >
          <Stack.Group screenOptions={{ headerShown: false }}>
            <Stack.Screen name={TELAS.TELA_LOGIN} component={TelaLogin} options={{ title: 'Tela Contador' }} />
            <Stack.Screen name={TELAS.TELA_NOVO_USUARIO} component={TelaNovoUsuario} />
          </Stack.Group>
          <Stack.Screen
            name={TELAS.TELA_PRINCIPAL}
            component={TelaPrincipal}
            options={{ title: 'Tela Principal', headerLeft: null }}
          />
          <Stack.Screen name={TELAS.TELA_CONTADOR} component={TelaContador} options={{ title: 'Tela Contador' }} />
          <Stack.Screen name={TELAS.TELA_FORMULARIO} component={TelaFormulario} options={{ title: 'Tela Formulário' }} />
          <Stack.Screen name={TELAS.TELA_LISTA} component={TelaListaTarefas} options={{ title: 'Lista de tarefas' }} />
        </Stack.Navigator>
      </NavigationContainer>

      <StatusBar style="auto" />
    </View>
  );
}

