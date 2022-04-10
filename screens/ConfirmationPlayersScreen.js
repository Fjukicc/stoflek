import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {useNavigation, useRoute} from '@react-navigation/native'
import PrimaryButton from '../components/PrimaryButton';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const ConfirmationPlayersScreen = () => {
    const route = useRoute();
    const numberOfPlayers = route.params.otherParams.choosenNumOfPlayers;
    const playersNames = route.params.otherParams.playersNames;
    const nav = useNavigation();

    function backToMenuHandler(){
        nav.navigate('MenuScreen');
    }
    function confrimClickButtonHandler(){
        console.log('confrim');
    }

    return (
        <View>
            <Text>Num of players: {numberOfPlayers}</Text>
            <View style={{width: '100%', backgroundColor:'blue'}}>
            {
                playersNames.map((user)=>{(
                    <Text>{user.name}</Text>
                )})
            }
            <Text>Halo</Text>
            </View>
            <PrimaryButton onPress={confrimClickButtonHandler}>Confrim</PrimaryButton>
            <PrimaryButton onPress={backToMenuHandler}>Back to Menu</PrimaryButton>
        </View>
    )
}

const styles = StyleSheet.create({
    playerNamesStyle: {
        fontSize: 24,
        color: Colors.secondary,
    }
})

export default ConfirmationPlayersScreen;
