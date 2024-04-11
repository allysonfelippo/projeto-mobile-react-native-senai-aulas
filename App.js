import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default function App() {
  const [contador, setContador] = React.useState(0)

  return (
    <View style={estilos.container}>
      <TouchableOpacity
        onPress={() => setContador(contador - 1)}
        style={estilos.btns}>
        <Text>
          -
        </Text>
      </TouchableOpacity>
      <Text style={estilos.contador}>{contador}</Text>
      <TouchableOpacity
        onPress={() => setContador(contador + 1)}
        style={estilos.btns}>
        <Text>
          +
        </Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7ff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 16
  },

  contador: {
    fontSize: 72,
    color: '#fff'
  },

  btns: {
    backgroundColor: '#fff',
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    fontSize: 64
  }
});
