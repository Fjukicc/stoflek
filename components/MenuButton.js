import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { Colors } from '../static/Colors'

const MenuButton = ({children, onPress}) => {
    return (
        <View style={styles.menuButtonStyleContainer}>
            <Pressable 
            onPress={onPress} 
            style={({pressed})=> pressed ? [styles.menuButtonInnerContainer, styles.pressed] : styles.menuButtonInnerContainer}
            >
                <Text style={styles.menuButtonStyle}>{children}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    menuButtonStyle:{
        fontSize: 18,
        letterSpacing: 4,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
    },
    menuButtonStyleContainer:{
        marginVertical: 16,
        width: '84%',
        maxWidth: 400,
        borderRadius: 2,
        padding: 4,
        overflow: 'hidden',
        backgroundColor: '#59805B',
        elevation: 4,
        shadowColor: Colors.third,
        shadowOffset:{
            width: 0, height: 2,
        },
        shadowRadius: 30,
        shadowOpacity: 0.9,
    },
    menuButtonInnerContainer:{
        backgroundColor: '#59805B',
        paddingVertical: 16,
        paddingHorizontal: 14,
        borderRadius: 12,
    },
    pressed:{
        opacity: 0.45,
    }
})

export default MenuButton;
