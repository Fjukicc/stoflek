import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import {useNavigation, useRoute} from '@react-navigation/native'
import PrimaryButton from '../components/PrimaryButton';
import { Colors } from '../static/Colors';
import background from '../assets/madarske-karte/players-bg.jpg';

const ConfirmationPlayersScreen = () => {
    const route = useRoute();
    const numberOfPlayers = route.params.otherParams.choosenNumOfPlayers;
    const playersNames = route.params.otherParams.playersNames;
    const nav = useNavigation();

    function backToMenuHandler(){
        nav.navigate('MenuScreen');
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
        <View style={styles.confScreenContainer}>
            <Text style={{fontSize: 24, color: Colors.primary, fontWeight: 'bold'}}>Total number of players: {numberOfPlayers}</Text>
            <View style={{width: '100%',marginVertical: 12,}}>
            {playersNames.map((user)=> {
                        return (
                            <Text style={styles.playerNameText} key={user.id}>{user.name}</Text>
                        )
                })}
            </View>
            <PrimaryButton onPress={confrimClickButtonHandler}>Confirm</PrimaryButton>
            <PrimaryButton onPress={backToMenuHandler}>Back to Menu</PrimaryButton>
        </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({ 
     ConfirmationScreenContainer: {
        flex: 1,
        width: '100%',
      },
    confScreenContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    playerNameText:{
        color: 'black',
        marginVertical: 2,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})

export default ConfirmationPlayersScreen;
