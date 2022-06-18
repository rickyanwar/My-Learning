import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { COLORS, FONTS, icons, SIZES } from '../constants';
import IconButton from './IconButton';
const StepperInput = ({ containerStyle, value = 1, onAdd, onMinus }) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                height: 60,
                width: 130,
                backgroundColor: COLORS.lightGray2,
                borderRadius: SIZES.radius,
                ...containerStyle
            }}
        >
            <IconButton
                containerSyle={{
                    width: 50,
                    alignItems: 'center',
                    justifyContent: 'center',

                }}
                icon={icons.minus}
                iconStyle={{
                    height: 25,
                    width: 25,
                    tintColor: value > 1 ? COLORS.primary : COLORS.gray
                }}
                onPress={onMinus}
            />
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Text style={{ ...FONTS.h2 }}>
                    {value}
                </Text>
            </View>
            <IconButton
                containerSyle={{
                    width: 50,
                    alignItems: 'center',
                    justifyContent: 'center',

                }}
                icon={icons.plus}
                iconStyle={{
                    height: 25,
                    width: 25,
                    tintColor: COLORS.primary
                }}
                onPress={onAdd}
            />

        </View>
    );
}

const styles = StyleSheet.create({})

export default StepperInput;
