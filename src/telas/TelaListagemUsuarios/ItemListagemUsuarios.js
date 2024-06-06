import { Pressable, StyleSheet, Text, View } from 'react-native';
import CORES from '../../comum/constantes/cores';
import TELAS from '../../comum/constantes/telas';

const estilos = StyleSheet.create({
    container: {
        height: 48,
        backgroundColor: CORES.CINZA,
    },
});

const ItemListagemUsuarios = (props) => {
    const navigation = useNavigation()


    return (
        <Pressable onPress={() => navigation.navigate(TELAS.TELA_DETALHES_USUARIO)}>
            <View style={estilos.container}>
                <Text>{props.item.nome}</Text>
            </View>
        </Pressable>
    );
};

export default ItemListagemUsuarios;