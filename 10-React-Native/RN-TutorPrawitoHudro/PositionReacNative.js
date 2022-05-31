import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import cart from './cart.png';
const PositionReacNative = () => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.cartWrapper}>
                <Image source={cart} style={styles.iconCart} />
                <Text style={styles.notif}>10</Text>
            </View>
            <Text>Keranjang belanja anda</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    iconCart: { width: 50, height: 50 },
    wrapper: {
        padding: 20,
        alignItems: 'center'
    },
    cartWrapper: {
        borderWidth: 1,
        borderColor: "#CB0000",
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    notif: {
        fontSize: 12,
        color: 'white',
        backgroundColor: '#6FCF97',
        padding: 5,
        borderRadius: 25,
        width: 24,
        height: 24,
        position: "absolute",
        top: 10,
        right: -10,
    }
})

export default PositionReacNative;
