import React,{useEffect} from 'react'
import {useNavigation} from '@react-navigation/native'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { Colors } from '../../static/Colors';
import PrimaryButton from '../PrimaryButton';

const PlayerNames = ({ playerNamesHandler,choosenNumOfPlayers, onPlayersNameInputHandler, currentPlayerName, playersCounter, playersNames}) => {

    const navigation = useNavigation();

    useEffect(() => {
        if(playersCounter>choosenNumOfPlayers){
            navigation.navigate('confirmation',{
                categoryId: '1',
                otherParams:{
                    choosenNumOfPlayers,
                    playersNames,
                }
            });
        }
    }, [playersCounter])

    return (
        <View>
            <Text style={styles.titleText}>{playersCounter}. Player Name</Text>
            <TextInput 
            placeholder="name" 
            style={styles.inputStyle}
            onChangeText={onPlayersNameInputHandler}
            value={currentPlayerName}
            />
            <PrimaryButton onPress={playerNamesHandler}>Submit Name</PrimaryButton>
        </View>
    )
}

const styles = StyleSheet.create({
    titleText:{
        fontSize: 26,
        fontWeight: 'bold',
        letterSpacing: 2,
        textAlign: 'center',
    },
    inputStyle:{
        width: 220,
        maxWidth: 300,
        fontSize: 32,
        borderBottomColor: Colors.primary,
        borderBottomWidth: 3,
        textAlign: 'center',
        marginBottom: 24,
        marginTop: 16,
    }
})

export default PlayerNames;
