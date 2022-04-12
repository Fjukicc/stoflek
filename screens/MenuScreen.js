import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import background from '../assets/madarske-karte/bg.jpg';
import {Colors} from '../static/Colors';

import Menu from '../components/Menu';
import Header from '../components/Header';

const MenuScreen = () => {
  function onImageLoadingEnd() {
    console.log('end');
  }

  return (
    <ImageBackground
      source={background}
      resizeMode="cover"
      style={styles.menuScreenContainer}
      imageStyle={styles.bgImage}
      onLoadEnd={onImageLoadingEnd}
    >
      <Header />
      <View style={styles.menuContent}>
        <Menu />
      </View>
      <View style={styles.footerContent}></View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  menuScreenContainer: {
    flex: 1,
    width: '100%',
  },
  bgImage: {
    opacity: 1,
  },
  menuContent: {
    flex: 3,
    justifyContent: 'flex-start',
    paddingTop: 12,
    alignItems: 'center',
  },
  footerContent: {
    flex: 1,
  },
});

export default MenuScreen;
