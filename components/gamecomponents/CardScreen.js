import React from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'
import PrimaryButton from '../PrimaryButton';
import {Colors} from '../../static/Colors';

const CardScreen = ({changeCardHandler, cardDeck, updateCard, cardRule}) => {
    return (
        <>
        <View style={styles.cardOuterContainer}>
            <View style={styles.cardInnerContainer}>
          <Image
            style={styles.cardImage}
            resizeMode="cover"
            source={cardDeck[updateCard].image}
          />
          </View>
        </View>
        <View style={styles.cardRuleContainer}>
          <Text style={styles.cardRuleText}>{cardRule}</Text>
        </View>
        <View style={styles.buttonsContainer}>
        <View>
          <PrimaryButton onPress={changeCardHandler}>NEXT</PrimaryButton>
        </View>
        <View>
          <PrimaryButton onPress={() => console.log('Show Cards')}>
            SHOW CARDS
          </PrimaryButton>
        </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    cardImage: {
        resizeMode: 'contain',
        width: 200,
        height: 300,
      },
      cardOuterContainer:{
          overflow: 'hidden',
          width: '100%',
          borderRadius: 4,
          padding: 30,
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
      },
      cardInnerContainer:{
        borderRadius: 14,
        overflow: 'hidden',
      },
      cardRuleContainer:{
        marginVertical: 16,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        maxWidth: '80%',
      },
      cardRuleText:{
          fontWeight: 'bold',
          fontSize: 18,
          color: 'white',
      },
      buttonsContainer:{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
      }
})

export default CardScreen;
