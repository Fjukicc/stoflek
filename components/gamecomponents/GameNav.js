import React,{useEffect} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import PrimaryButton from '../PrimaryButton';
import {Colors} from '../../static/Colors'

const GameNav = ({exitGameHandler, counter, numberOfPlayers, resetCoutner, playersNames}) => {

    function renderNameFunction() {

          return (
              <Text style={styles.playerNameText}>{playersNames[counter].name}</Text>
              );

      }

  return (
    <SafeAreaView style={styles.navbarContainer}>
    <View style={styles.rowContainer}>
      <View style={styles.exitGameButton}>
        <PrimaryButton onPress={exitGameHandler} color={Colors.secondary}>
          EXIT
        </PrimaryButton>
      </View>
      <View style={styles.playerNameContainer}>
      {renderNameFunction()}
      </View>
    </View>
    <View style={styles.infoContainer}>
      <Text style={{fontWeight: 'bold', fontSize: 16}}>SWIPE LEFT FOR NEW CARD</Text>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    navbarContainer:{
        height: 'auto',
        maxHeight: 160,
        width: '100%',
        display: 'flex',
        position: 'absolute',
        top: 0,
        flexDirection: 'column',
        paddingLeft: 12,
        paddingVertical: 4,
        backgroundColor: Colors.third,

      },
      rowContainer:{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row-reverse',
      },
    exitGameButton:{
        flex: 1,
        position: 'relative',
      },
      playerNameContainer:{
        position: 'relative',
        height: '100%',
        justifyContent: 'center',
        paddingLeft: 12,
        flex: 2,
      },
      playerNameText:{
        fontWeight: 'bold',
        color: 'black',
        fontSize: 36,
      },
      infoContainer:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
      },
});

export default GameNav;
