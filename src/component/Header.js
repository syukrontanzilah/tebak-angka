import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../util/colors'

const Header = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        // paddingTop:30,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: '#fff',
        fontSize: 18
    }
})
