import React from 'react'
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native'
import {useNavigation, useRoute} from '@react-navigation/native'
import NamesButton from '../components/NamesButton';
import { Colors } from '../static/Colors';
import background from '../assets/madarske-karte/players-bg.jpg';
import Header from '../components/Header';

const ConfirmationPlayersScreen = () => {
    const route = useRoute();
    const numberOfPlayers = route.params.otherParams.choosenNumOfPlayers;
    const playersNames = route.params.otherParams.playersNames;
    const onBackPress = route.params.otherParams.onBackPress;
    const nav = useNavigation();

    function backToMenuHandler(){
        onBackPress();
        nav.navigate('EnterNames');
    }
    function confrimClickButtonHandler(){
        nav.navigate('gameScreen', {
            otherParams:{
                playersNames,
                numberOfPlayers,
            }
        });
    }


    return (
        <ImageBackground source={background} resizeMode="cover" style={styles.ConfirmationScreenContainer}>
        <Header/>
        <View style={styles.mainInfoContainer}>
            <Text style={{fontSize: 36,marginTop: 24, color: Colors.third, flexWrap:'wrap', width: '70%', textAlign:'center', fontWeight: 'bold'}}>Total number of players: {numberOfPlayers}</Text>
            <ScrollView style={styles.namesContainer} contentContainerStyle={{alignItems: 'flex-start'}}>
            {playersNames.map((user)=> {
                        return (
                            <Text style={styles.playerNameText} key={user.id}>{user.id+'.'+' '+user.name}</Text>
                        )
                })}
            </ScrollView>
            <View style={styles.buttonsContainer}>
            <View style={styles.leftButtonContainer}>
                <NamesButton onPress={backToMenuHandler}>Back</NamesButton>
            </View>
            <View style={styles.rightButtonContainer}>
                <NamesButton onPress={confrimClickButtonHandler}>Confirm</NamesButton>
            </View>
            </View>
        </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({ 
     ConfirmationScreenContainer: {
        flex: 1,
        width: '100%',
      },
      mainInfoContainer: {
        flex: 3,
        maxWidth: '100%',
        width: '100%',
        height: 'auto',
        paddingVertical: 24,
        justifyContent: 'flex-start',
        paddingTop: 32,
        alignItems: 'center',
      },
    playerNameText:{
        color: 'black',
        marginVertical: 2,
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonsContainer:{
        display: 'flex',
        flexDirection: 'row',
        width: '94%',
        height: 64,
        justifyContent: 'center',
    },
    leftButtonContainer:{
        width: '50%',
        marginRight: 4,
        borderRightColor: 'black',
      },
      rightButtonContainer:{
        width: '50%',
        marginLeft: 4,
        borderLeftColor: 'black',
      },
      namesContainer:{
          width: '95%',
          maxWidth: 500,
          maxHeight: 160,
          marginVertical: 24,
          paddingVertical: 12,
          paddingLeft: 48,
          backgroundColor: Colors.third,
      }
})

export default ConfirmationPlayersScreen;
