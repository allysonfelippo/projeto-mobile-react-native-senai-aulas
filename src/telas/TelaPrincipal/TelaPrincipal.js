import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import { View, Text } from 'react-native';
import TELAS from "../../comum/constantes/telas";


const TelaPrincipal = (props) => {
    return (
        <View style={{ padding: 16, gap: 16 }}>
            <BotaoCustomizado cor='primaria' onPress={() => props.navigation.navigate(TELAS.TELA_CONTADOR)}>
                <Text>Tela Contador</Text>
            </BotaoCustomizado>
            <BotaoCustomizado cor='secundaria' onPress={() => props.navigation.navigate(TELAS.TELA_FORMULARIO)}>
                <Text>Tela Formulário</Text>
            </BotaoCustomizado>
            <BotaoCustomizado cor='primaria' onPress={() => props.navigation.navigate(TELAS.TELA_LISTA)}>
                <Text>Lista de Tarefas</Text>
            </BotaoCustomizado>
        </View>
    )
};

export default TelaPrincipal;