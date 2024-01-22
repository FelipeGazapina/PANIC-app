import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Modal, TouchableOpacity, Pressable, TextInput, ScrollView, Button } from 'react-native';

import PanicImage from './assets/atencao.png'
import Close from './assets/fechar.png'
import React from 'react';
export default function App() {
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <View style={styles.container}>
      <Image source={PanicImage} style={styles.panicImage} />
      <TouchableOpacity style={styles.botaoPanico} onPress={() => setModalVisible(prev => !prev)}>
        <Text style={styles.text}>Bot&atilde;o do p&acirc;nico</Text></TouchableOpacity>
      <Modal
        animationType='slide'
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <ScrollView>
          <View style={styles.modal}>
            <Pressable style={styles.close} onPress={() => setModalVisible(false)}>
              <Image source={Close} style={styles.textClose} />
            </Pressable>
            <Image source={PanicImage} style={styles.imageTopModal} />

            <Text style={styles.textLabel}>Nome:</Text>
            <TextInput style={styles.input} placeholder='Digite seu nome' />

            <Text style={styles.textLabel}>Telefone:</Text>
            <TextInput style={styles.input} placeholder='Digite seu telefone' keyboardType='name-phone-pad' />

            <Text style={styles.textLabel}>Localiza&ccedil;&atilde;o:</Text>
            <TextInput style={styles.input} placeholder='Digite seu telefone' keyboardType='name-phone-pad' />

            <Text style={styles.textLabel}>Observa&ccedil;&atilde;o:</Text>
            <TextInput numberOfLines={5} multiline style={styles.textArea} placeholder='Digite seu telefone' />

            <TouchableOpacity style={styles.button} onPress={() => setModalVisible(false)}>
              <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 16 }}>Enviar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    // paddingTop: ,
  },
  panicImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 32,
    color: '#fff',
  },
  botaoPanico: {
    fontSize: 32,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#FF4B24',
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 10,
    padding: 35,
  },
  close: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 35,
    right: 10,
  },
  textClose: {
    width: 50,
    height: 50,
  },
  imageTopModal: {
    width: 35,
    height: 35,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  textLabel: {
    fontSize: 16,
    color: '#666',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    color: '#444',
    width: '100%',
    marginBottom: 10,
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 5,
    fontSize: 16,
    color: '#444',
    width: '100%',
    height: 'auto',
    marginBottom: 10,
    textAlignVertical: 'top',
  },
  button: {
    width: '100%',
    backgroundColor: '#FF4B24',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
