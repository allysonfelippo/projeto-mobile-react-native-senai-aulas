import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import { View, Text } from 'react-native';
import TELAS from "../../comum/constantes/telas";

const TelaPrincipal = (props) => {
    return (
        <View>
            <BotaoCustomizado onPress={() => props.navigation.navigate(TELAS.TELA_CONTADOR)}>
                <Text>Tela Contador</Text>
            </BotaoCustomizado>
        </View>
    )
};

export default TelaPrincipal;