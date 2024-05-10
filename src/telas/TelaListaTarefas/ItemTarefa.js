import { View, Text } from 'react-native';
import estilos from './TelaListaTarefasStyle';
import BotaoCustomizado from '../../comum/componentes/BotaoCustomizado/BotaoCustomizado';
// import AntDesign from '@expo/vector-icons/AntDesign'; 
import { CHAVES_STORAGE } from '../../comum/constantes/chaves-storage';
import { pegarItemStorage, atualizarItemStorage } from '../../comum/services/serviceStorage'; 

const ItemTarefa = (props) => {
  
  const removerItem = async () => {
    const itensDoStorage = await pegarItemStorage(CHAVES_STORAGE.LISTA_TAREFAS);
    itensDoStorage.splice(props.index, 1);
    await atualizarItemStorage(CHAVES_STORAGE.LISTA_TAREFAS, [...itensDoStorage]);
    props.setListaTarefas([...itensDoStorage]);
  };

  return (
    <View style={estilos.itemTarefa}>
      <Text style={estilos.descricaoTarefa}>{props.item.descricao}</Text>
      <BotaoCustomizado cor='secundaria' onPress={removerItem}>
        -
      </BotaoCustomizado>
      {/* <AntDesign name='delete' size={24} color={'Black'} /> */}
    </View>
  );


};

export default ItemTarefa;