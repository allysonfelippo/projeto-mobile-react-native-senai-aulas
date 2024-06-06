import { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import ListagemVazia from '../../comum/componentes/ListagemVazia/ListagemVazia';;
import SeparadorListagem from '../../comum/componentes/SeparadorListagem/SeparadorListagem';
import api from '../../comum/services/api'
import ItemListagemUsuarios from './ItemListagemUsuarios';

const TelaListagemUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const pegarUsauariosViaAPI = async () => {
      const response = await api.get('/usuarios');
      setUsuarios(response.data);
    };

    pegarUsauariosViaAPI();
  }, []);

  return (
    <View>
      <FlatList
        data={usuarios}
        // renderItem={ItemListagemUsuarios}
        renderItem={(props) => {<ItemListagemUsuarios {...props}/> }}
        ListEmptyComponent={ListagemVazia}
        ItemSeparatorComponent={SeparadorListagem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default TelaListagemUsuarios;