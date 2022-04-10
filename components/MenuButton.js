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
        letterSpacing: 2.2,
        fontWeight: 'bold',
        color: Colors.secondary,
        textAlign: 'center',
    },
    menuButtonStyleContainer:{
        marginVertical: 16,
        width: '84%',
        maxWidth: 400,
        borderRadius: 6,
        borderBottomWidth: 3,
        borderTopWidth: 3,
        borderLeftWidth: 12,
        borderRightWidth: 12,
        overflow: 'hidden',
        borderColor: Colors.secondary,
        opacity: 0.85,
    },
    menuButtonInnerContainer:{
        backgroundColor: Colors.primary,
        paddingVertical: 16,
        paddingHorizontal: 14,
    },
    pressed:{
        opacity: 0.75,
    }
})

export default MenuButton;
