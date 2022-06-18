import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { COLORS, FONTS } from '../constants/theme';

const TextButton = ({ label, label2 = "", labelStyle, label2Style, buttonContainerStyle, disabled, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: COLORS.primary,
                ...buttonContainerStyle
            }}
            onPress={onPress}
            disabled={disabled}
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
            {

                label2 != "" &&
                <Text
                    style={{
                        flex: 1,
                        textAlign: 'right',
                        color: COLORS.white,
                        ...FONTS.h3,
                        ...label2Style
                    }}
                >
                    {label2}
                </Text>
            }
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({})

export default TextButton;
