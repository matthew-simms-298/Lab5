'use client'

import React from "react"
import { 
    StyleSheet,
    Text,
    View,
} from "react-native";

function Footer() {
    return (
        <View styles={styles.container}>
            <Text styles={styles.textChange}>Welcome to my app!</Text>
            <Text styles={styles.textChange}>SAIT</Text>
        </View>
    );
}

const styles = new StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'red',

    },

    textChange: {
        color: "white",
        fontSize: 20,
    }
})

export default Footer;