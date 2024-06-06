import { StyleSheet, View } from 'react-native';
import CORES from '../../constantes/cores';

const estilos = StyleSheet.create({
  container: {
    height: 1,
    backgroundColor: CORES.CINZA,
    margin: 8,
  },
});

const SeparadorListagem = () => {
  return <View style={estilos.container}></View>;
};

export default SeparadorListagem;