import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MenuScreen from './screens/MenuScreen';
import AgendamentoScreen from './screens/AgendamentoScreen';
import AdicionarParceiroScreen from './screens/AdicionarParceiroScreen';
import CadastroFornecedorScreen from './screens/CadastroFornecedorScreen';
import AdicionarEstoque from './screens/AdicionarEstoque';
import EstoqueScreen from './screens/EstoqueScreen'
import ListagemClientesScreen from './screens/ListagemClientesScreen';
import ListagemUsuariosScreen from './screens/ListagemUsuariosScreen';
import ListagemFornecedorScreen from './screens/ListagemFornecedorScreen';
import PedidoVendaScreen from './screens/PedidoVendaScreen';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login"> 
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="CadastroProdutos" component={AgendamentoScreen} />
        <Stack.Screen name="CadastroClientes" component={AdicionarParceiroScreen} />
        <Stack.Screen name="CadastroFornecedor" component={CadastroFornecedorScreen} />
        <Stack.Screen name="ReposicaoProduto" component={AdicionarEstoque} />
        <Stack.Screen name="Estoque" component={EstoqueScreen} />
        <Stack.Screen name="ListagemCliente" component={ListagemClientesScreen} />
        <Stack.Screen name="ListagemUsuarios" component={ListagemUsuariosScreen} />
        <Stack.Screen name="ListagemFornecedores" component={ListagemFornecedorScreen} />
        <Stack.Screen name="PedidoVenda" component={PedidoVendaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


