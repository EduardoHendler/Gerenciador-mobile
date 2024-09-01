import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const EstoqueScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
       Produtos
      </Text>
      <View style={styles.containerForm}>
          <Text style={styles.label}  aria-label="Label for codigo" nativeID="labelCodigo">Nome: </Text>
          <TextInput style={styles.input} />
      </View>
        <View style={styles.card}>
          <View style={styles.cardInfo}>
            <Text style={styles.labelInfo}>Código:</Text>
            <Text style={styles.labelInfo}>Disponiveis:</Text>
          </View>
          <View>
            <Text style={styles.labelInfo}>Copo bolha</Text>
            <Text style={styles.labelQtd}>130</Text>
          </View>
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
  
  card : {
    marginTop: 10,
    backgroundColor: '#fff',
    width: 'auto',
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

 labelInfo : {
   fontSize: 18,
   padding: 2
 },

 labelQtd : {
   fontWeight: 700,
   fontSize: 30,
   textAlign: 'center'
 },

  containerForm :{
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
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

  input: {
    height: 50,
    width: 250,
    borderColor: '#d5d5d5',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 10,
    backgroundColor: "#fff"
  },
});

export default EstoqueScreen;