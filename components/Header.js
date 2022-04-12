import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {Colors} from '../static/Colors';

const Header = () => {
    return (
        <View style={styles.menuTitleOuterContainer}>
                <View style={styles.menuTitleInnerContainer}>
                    <Text style={styles.titleText}>ŠTOFLEK</Text>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    menuTitleOuterContainer:{
        paddingTop: 64,
        backgroundColor: Colors.third,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuTitleInnerContainer:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        paddingVertical: 16,
        backgroundColor: Colors.third,
        width: '100%',
    },
    titleText:{
        fontSize:64,
        fontWeight: 'bold',
        color: 'black',
        letterSpacing: 10,
        marginBottom: 6,
    },
})

export default Header;
