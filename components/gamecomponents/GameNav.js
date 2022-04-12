import React,{useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PrimaryButton from '../PrimaryButton';
import {Colors} from '../../static/Colors'

const GameNav = ({exitGameHandler, counter, numberOfPlayers, resetCoutner, playersNames}) => {

    function renderNameFunction() {

          return (
              <Text style={styles.playerNameText}>{playersNames[counter].name}</Text>
              );

      }

  return (
    <View style={styles.navbarContainer}>
      <View style={styles.exitGameButton}>
        <PrimaryButton onPress={exitGameHandler} color={Colors.secondary}>
          EXIT
        </PrimaryButton>
      </View>
      <View style={styles.playerNameContainer}>{renderNameFunction()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
    navbarContainer:{
        height: 'auto',
        maxHeight: 120,
        display: 'flex',
        position: 'absolute',
        top:40,
        flexDirection: 'row-reverse',
        justifyContent: 'space-around',
        width: '100%',
        alignItems: 'center',

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
        color: 'white',
        fontSize: 36,
      }
});

export default GameNav;
