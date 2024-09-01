import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const AdicionarParceiroScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Cadastro parceiros
      </Text>
      <View style={styles.containerForm}>
          <Text style={styles.label}  aria-label="Label for name" nativeID="labelName">Empresa: </Text>
          <TextInput style={styles.input} placeholder="Nome"/>
          <Text style={styles.label}  aria-label="Label for cgc" nativeID="labeCgc">CPF/CNPJ:</Text>
          <TextInput style={styles.input} placeholder="000.000.000-00"/>
           <Text style={styles.label}  aria-label="Label for" nativeID="labeCgc">Contato:</Text>
          <TextInput style={styles.input} placeholder="Numero ou Email"/>
          <Pressable style={styles.button} >
            <Text style={styles.buttonLabel}>Cadastrar</Text>
          </Pressable>
      </View>
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 18,
    paddingRight: 18,
    backgroundColor:'#F3F4F7',
  },

  containerForm :{
    flex: 15
  },

  title : {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 500,
    flex: 1,
    justifyContent: 'space-between',
    padding: 20
  },

  label: {
    marginTop: 10,
    padding: 5,
    fontSize: 17
  },

  button: {
    color: "white",
    backgroundColor: "#712d6c",
    borderColor: "#ADD8E6",
    borderRadius: 10,
    marginTop: 20,
  },

  buttonLabel: {
    fontSize: 17,
    fontWeight: 700,
    textAlign: 'center',
    padding: 15
  },

  input: {
    height: 50,
    borderColor: '#d5d5d5',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 10,
    backgroundColor: "#fff"
  },
});

export default AdicionarParceiroScreen;