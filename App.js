/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  Dimensions,
  Button,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  function novaPiada() {
    var piada = [
      'Entramos forçados, ficamos pirados... saímos formados!',
      'Não deixe que nada te desanime, pois até um pé na bunda te empurra para a frente.',
      'Se ferradura desse sorte, burro não puxava carroça.',
      'Calma, tudo passa. Nem que seja por cima de você, mas passa.',
      'Pare de pensar como um derrotado e pense como um boleto: O boleto sempre vence!',
      'Na vida, tudo é relativo: Um fio de cabelo na cabeça é pouco. Na sopa, é muito.',
      'Regra simples em uma discussão: se você estiver perdendo comece a corrigir o português da outra pessoa.',
    ];
    let pos = getRandomIntInclusive(0, 6);
    let piadas = piada[pos];
    return alert(piadas);
  }

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <StatusBar backgroundColor="#278175" />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Atividade Extra</Text>
          <View style={styles.base}>
            <Image
              style={styles.image}
              source={require('./assets/img/fundo1.jpg')}
            />
          </View>
          <TouchableOpacity style={styles.btnHighlight}>
            <View>
              <Button
                title={'Sorte do dia'}
                onPress={() => novaPiada()}
                color={'#278175'}
              />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 32,
    paddingHorizontal: 24,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    marginTop: 8,
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    alignSelf: 'center',
    width: 380,
    height: 500,
    marginTop: 20,
  },
  btnHighlight: {
    marginTop: 50,
  },
});

export default App;
