import React from 'react';
import { View, StyleShee, Text, Platform } from 'react-native';

import { TextButton, LineDivider } from '../components';
import { COLORS, FONTS, SIZES } from '../constants';
import { LinearGradient } from 'expo-linear-gradient'

const FooterTotal = ({ subTotal, shippingFee, total, onPress }) => {
    return (
        <View >
            {/* Shadow */}
            <LinearGradient
                start={{ x: 0, y: 1 }}
                end={{ x: 0, y: 0 }}
                colors={[COLORS.lightGray1, COLORS.transparent]}
                style={{
                    position: 'relative',
                    top: -10,
                    left: 0,
                    right: 0,
                    height: Platform.OS === 'ios' ? 10 : 0,
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15
                }}
            />
            {/* Order Details */}
            <View
                style={{
                    padding: SIZES.padding,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    backgroundColor: COLORS.white
                }}
            >
                {/* SubTotal */}
                <View
                    style={{
                        flexDirection: 'row'
                    }}
                >
                    <Text style={{ flex: 1, ...FONTS.body5 }}>SubTotal</Text>
                    <Text style={{ ...FONTS.h5 }}>${subTotal.toFixed(2)}</Text>
                </View>
                {/* Shipping Fee */}
                <View
                    style={{
                        flexDirection: 'row'
                    }}
                >
                    <Text style={{ flex: 1, ...FONTS.body5 }}>Shipping Fee</Text>
                    <Text style={{ ...FONTS.h5 }}>${shippingFee.toFixed(2)}</Text>
                </View>

                <LineDivider />
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.padding
                    }}
                >
                    <Text style={{ flex: 1, ...FONTS.body4 }}>Total</Text>
                    <Text style={{ ...FONTS.h4 }}>${total.toFixed(2)}</Text>
                </View>
                {/* Order Button */}
                <TextButton
                    buttonContainerStyle={{
                        height: 40,
                        borderRadius: SIZES.radius,
                        marginTop: SIZES.padding,
                    }}
                    label="Place Your Order"
                    labelStyle={{
                        ...FONTS.h
                    }}
                    onPress={onPress}
                />
            </View>
        </View>
    );
}

// const styles = StyleSheet.create({})

export default FooterTotal;
