import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { images, FONTS, SIZES, COLORS } from '../../constants';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const AuthLayout = ({ title, subtitle, titleContainerStyle, children }) => {
    return (
        <View
            style={{
                flex: 1,
                paddingVertical: SIZES.padding,
                backgroundColor: COLORS.white
            }}
        >
            <KeyboardAwareScrollView
                keyboardDismissMode='on-drag'
                contentContainerStyle={{
                    flex: 1,
                    paddingHorizontal: SIZES.padding
                }}
            >
                {/* App Icon */}
                <View
                    style={{
                        alignItems: 'center'
                    }}
                >
                    <Image
                        source={images.logo_02}
                        resizeMode="contain"
                        style={{
                            height: 100,
                            width: 200
                        }}
                    />
                </View>

                {/* title & subTitle */}

                <View
                    style={{
                        marginTop: SIZES.padding,
                        ...titleContainerStyle
                    }}
                >
                    <Text
                        style={{
                            textAlign: 'center',
                            ...FONTS.h2
                        }}
                    >
                        {title}
                    </Text>
                    <Text
                        style={{
                            textAlign: 'center',
                            ...FONTS.body3
                        }}
                    >
                        {subtitle}
                    </Text>
                </View>
                {/* Content / Children */}
                {children}
            </KeyboardAwareScrollView>
        </View>
    );
}

const styles = StyleSheet.create({})

export default AuthLayout;
