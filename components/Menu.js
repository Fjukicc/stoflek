import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MenuButton from './MenuButton';
import {useNavigation} from '@react-navigation/native';

const Menu = () => {
    const navigation = useNavigation();

    function onStartGamePressHandler(){
        navigation.navigate("EnterNames");
    }

    function onRulesPressHandler(){
        navigation.navigate("RulesMobileScreen");
    }
    function onGameCongfigPressHandler(){
        navigation.navigate("Config");
    }
    function onSettingsPressHandler(){
        navigation.navigate("Settings");
    }

    return (
        <>
            <MenuButton onPress={onStartGamePressHandler}>ONE DEVICE</MenuButton>
            <MenuButton onPress={onRulesPressHandler}>RULES</MenuButton>
            <MenuButton onPress={onGameCongfigPressHandler}>GAME CONFIG</MenuButton>
            <MenuButton onPress={onSettingsPressHandler}>SETTINGS</MenuButton>
        </>
    )
}



export default Menu;
