import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, } from '../constants';
const IconButton = ({ containerSyle, icon, iconStyle, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                ...containerSyle
            }}
            onPress={onPress}
        >
            <Image
                source={icon}
                style={{
                    width: 30,
                    height: 30,
                    tintColor: COLORS.white,
                    ...iconStyle
                }}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({})

export default IconButton;
