import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { COLORS, FONTS } from '../constants/theme';

const TextButton = ({ label, labelStyle, buttonContainerStyle, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: COLORS.primary,
                ...buttonContainerStyle
            }}
            onPress={onPress}
        >
            <Text
                style={{
                    color: COLORS.white,
                    ...FONTS.h3,
                    ...labelStyle
                }}
            >
                {label}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({})

export default TextButton;
