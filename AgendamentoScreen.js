import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const AgendamentoScreen = ({ navigation }) => {
  const [isChecked, setChecked] = useState(false);
  return (
   <View style={styles.container}>
      <Text style={styles.title}>
        Agendamento
      </Text>
      <View style={styles.containerForm}>
          <View style={styles.containerInputs}>
            <Text style={styles.label}  aria-label="Label for codigo" nativeID="labelCodigoProduto">Nome</Text>
            <TextInput style={styles.input} placeholder="Nome do cliente"/>
          </View>
          <View style={styles.containerInputs}>
              <Text style={styles.label}  aria-label="Label for qtde" nativeID="labelQtde">Retirada ou Entrega</Text>
              <TextInput style={styles.input} placeholder="Horario/data ou Endereço"/>
          </View>
          <View style={styles.containerInputs2}>
            <Text style={styles.label}  aria-label="Label for nf" nativeID="CodigoCliente">Itens do Pedido</Text> 
            <TextInput style={styles.input} placeholder="Itens solicitados"/>
          </View>
          <Pressable style={styles.buttonFinalizar} >
              <Text style={styles.buttonFinalizarLabel}>Finalizar</Text>
          </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
   container: {
    justifyContent: 'center',
    paddingLeft: 18,
    paddingRight: 18,
    backgroundColor:'#F3F4F7',
  },

  containerInputs : {
    width: '48%'
  },
  containerInputs2 : {
    width: '100%',
    height:'170px',
  },
  containerForm :{
    marginTop: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  labelInfo : {
   fontSize: 18,
   padding: 2
 },

 labelQtd : {
   fontWeight: 700,
   fontSize: 30,
   textAlign: 'center',
 },
  
  card : {
    marginTop: 10,
    backgroundColor: '#fff',
    width:'100%',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    boxShadow: 5,
    shadowOffset: {width: -2, height: 4},  
    shadowColor: '#171717',  
    shadowOpacity: 0.2,  
    shadowRadius: 3,
  },

 cardInfo : {
   width: 200
 },

  title : {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 500,
    justifyContent: 'space-between',
    padding: 20
  },

  label: {
    marginTop: 10,
    padding: 5,
    fontSize: 17
  },

  button: {
    color: "black",
    width:'100%',
    backgroundColor: "#ADD8E6",
    borderColor: "#ADD8E6",
    borderRadius: 10,
    height: 48,
    marginTop: '24%'
  },

  buttonFinalizar : {
    color: "white",
    backgroundColor: "#712d6c",
    borderColor: "#04AA6D",
    borderRadius: 10,
    marginTop: 2,
    width:'100%'
  },

  buttonFinalizarLabel: {
    fontSize: 17,
    fontWeight: 700,
    textAlign: 'center',
    padding: 15,
    color: '#fff'
  },

  buttonLabel: {
    fontSize: 17,
    fontWeight: 700,
    textAlign: 'center',
    padding: 15
  },

  input: {
    height: 50,
    width: '100%',
    borderColor: '#d5d5d5',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
});
export default AgendamentoScreen;