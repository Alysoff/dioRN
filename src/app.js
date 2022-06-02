import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Pressable,
  Linking,
} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const icon = 'https://avatars.githubusercontent.com/u/85465984?v=4';
const urlMyGithub = 'https://github.com/Alysoff';

const app = () => {
  const handlePressGoToGithub = async () => {
    console.log('Verificando link');
    const res = await Linking.openURL(urlMyGithub);
    if (res) {
      console.log('Link aprovado');
      console.log('Abrindo link....');
      await Linking.openURL(urlMyGithub);
    }
  };
  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
      <View style={style.content}>
        <Image
          accessibilityLabel="Foto do Luffy"
          style={style.avatar}
          source={{uri: icon}}
        />
        <Text accessibilityLabel="Nome" style={[style.defaulText, style.nome]}>
          Alyson Ferreira
        </Text>
        <Text
          accessibilityLabel="Nickname"
          style={[style.defaulText, style.nick]}>
          alysoff
        </Text>
        <Text
          accessibilityLabel="Descrição"
          style={[style.defaulText, style.descricao]}>
          Estudande de engenharia elétrica, apaixonado por tecnologia.
        </Text>
        <Pressable onPress={() => handlePressGoToGithub}>
          <View style={style.button}>
            <Text style={[style.defaulText, style.textButton]}>
              Abir no Github
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default app;

const style = StyleSheet.create({
  //estilo da view
  container: {
    backgroundColor: colorGithub,
    flex: 1, //expande a cor em toda a tela
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  //estilos de texto
  defaulText: {
    color: colorFontGithub,
  },
  nome: {
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 14,
  },
  nick: {
    fontSize: 18,
    color: '#4F565E',
  },
  descricao: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  //ajusta o tamanho da imagem
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#4F565E',
    borderRadius: 10,
    padding: 20,
  },
});
