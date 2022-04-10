import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, ImageBackground } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient';
import background from '../assets/madarske-karte/bg.jpg'
import {Colors} from '../static/Colors';

import Menu from '../components/Menu';


const MenuScreen = () => {
    return (
        <LinearGradient colors={['white', 'black']} style={styles.menuScreenContainer}>
                <ImageBackground source={background} resizeMode='cover' style={styles.menuScreenContainer} imageStyle={styles.bgImage}>
            <View style={styles.menuTitleOuterContainer}>
                <View style={styles.menuTitleInnerContainer}>
                    <Text style={styles.titleText}>ŠTOFLEK</Text>
                </View>
            </View>
            <View style={styles.menuContent}>
                <Menu/>
            </View>
            <View style={styles.footerContent}>

            </View>
            </ImageBackground>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    menuScreenContainer:{
        flex: 1,
        width: '100%',
    },
    bgImage:{
        opacity: 0.17,
    },
    menuTitleOuterContainer:{
        marginTop: 100,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuTitleInnerContainer:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        paddingVertical: 24,
        backgroundColor: Colors.secondary,
        opacity: 0.85,
        width: '90%',
        borderRadius: 16,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset:{
            width: 0, height: 2,
        },
        shadowRadius: 3,
        shadowOpacity: 0.9,
    },
    titleText:{
        fontSize:48,
        fontWeight: 'bold',
        color: 'black',
        letterSpacing: 8,
        marginBottom: 6,
    },
    menuContent: {
        flex: 3,
        justifyContent: 'flex-start',
        paddingTop: 48,
        alignItems: 'center',
    },
    footerContent:{
        flex: 1,
    },
})

export default MenuScreen;
