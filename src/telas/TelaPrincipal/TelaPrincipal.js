import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import { View, Text } from 'react-native';
import TELAS from "../../comum/constantes/telas";


const TelaPrincipal = (props) => {
    return (
        <View>
            <BotaoCustomizado cor='primaria' onPress={() => props.navigation.navigate(TELAS.TELA_CONTADOR)}>
                <Text>Tela Contador</Text>
            </BotaoCustomizado>
            <BotaoCustomizado cor='secundaria' onPress={() => props.navigation.navigate(TELAS.TELA_FORMULARIO)}>
                <Text>Tela Formulário</Text>
            </BotaoCustomizado>
        </View>
    )
};

export default TelaPrincipal;