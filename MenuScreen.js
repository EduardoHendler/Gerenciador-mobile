import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const MenuScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logoacai.jfif')} />
      <View style={styles.containerButton}>
        <Pressable style={styles.button, styles.buttonVenda} onPress={() => navigation.navigate('PedidoVenda')}>
          <Image style={styles.icone} source={require('../assets/icons/carrinho-de-compras.png')} />
          <Text style={styles.buttonVendaLabel}>Pedidos agendados</Text>
        </Pressable>
        <Pressable style={styles.button}  onPress={() => navigation.navigate('CadastroProdutos')}>
          <Image style={styles.icone} source={require('../assets/icons/novo-produto.png')} />
          <Text style={styles.buttonLabel}>Agendar pedido</Text>
        </Pressable>
        <Pressable style={styles.button}  onPress={() => navigation.navigate('Estoque')}>
          <Image style={styles.icone} source={require('../assets/icons/estoque.png')} />
          <Text style={styles.buttonLabel}>Consultar estoque</Text>
        </Pressable>
          <Pressable style={styles.button}  onPress={() => navigation.navigate('ReposicaoProduto')}>
          <Image style={styles.icone} source={require('../assets/icons/estoque1.png')} />
          <Text style={styles.buttonLabel}>Atualizar estoque</Text>
        </Pressable>
        <Pressable style={styles.button}  onPress={() => navigation.navigate('CadastroClientes')}>
          <Image style={styles.icone} source={require('../assets/icons/clientes.png')} />
          <Text style={styles.buttonLabel}>Cadastrar parceiros</Text>
        </Pressable>
      
        <Pressable style={styles.button}  onPress={() => navigation.navigate('ListagemCliente')}>
          <Image style={styles.icone} source={require('../assets/icons/lista-de-afazeres.png')} />
          <Text style={styles.buttonLabel}>Listar parceiros</Text>
        </Pressable>
        <Pressable style={styles.buttonSair}>
          <Image style={styles.icone} source={require('../assets/icons/sair.png')} />
          <Text style={styles.buttonLabel}>LOGOUT</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor:'rgb(113 45 108);'
  },

  containerButton: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  },

  icone: {
    marginTop: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 28,
    height: 26
  }, 

  buttonVenda: {
    backgroundColor: "#04AA6D",
    width:  170,
    height: 97,
    borderRadius: 10,
    marginTop: 20,
    boxShadow: 5,
    shadowOffset: {width: -2, height: 4},  
    shadowColor: '#171717',  
    shadowOpacity: 0.2,  
    shadowRadius: 3, 
  },

  buttonVendaLabel: {
    fontSize: 12,
    fontWeight: 700,
    textAlign: 'center',
    padding: 15,
    color: '#fff'
  },

   buttonSair: {
    display: 'flex',
    backgroundColor: "#FF3961",
    color: '#black',
    width:  102,
    height: 97,
    borderRadius: 10,
    marginTop: 20, 
    boxShadow: 5,
    shadowOffset: {width: -2, height: 4},  
    shadowColor: '#171717',  
    shadowOpacity: 0.2,  
    shadowRadius: 3, 
  },
  
  button: {
    width: '170px',
    height: 97,
    color: "black",
    backgroundColor: "white",
    borderColor: "#ADD8E6",
    borderRadius: 10,
    marginTop: 20,
    boxShadow: 5,
    shadowOffset: {width: -2, height: 4},  
    shadowColor: '#171717',  
    shadowOpacity: 0.2,  
    shadowRadius: 3, 
  },

  logo :{
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 280,
    height: 184,
  },

  buttonLabel: {
    fontSize: 12,
    fontWeight: 700,
    textAlign: 'center',
    padding: 15
  },


});

export default MenuScreen;