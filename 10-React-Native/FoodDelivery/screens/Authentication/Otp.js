import React from 'react';
import {
    View,
    Text
} from 'react-native';
import AuthLayout from './AuthLayout';
import { COLORS, FONTS, SIZES, icons } from '../../constants';
import { FormInput, CustomSwitch, TextButton, TextIconButton } from '../../components';
import { utils } from '../../utils';
import OTPInputView from '@twotalltotems/react-native-otp-input';
const Otp = () => {
    const [timer, setTimer] = React.useState(60)
    React.useEffect(() => {
        let interval = setInterval(() => {
            setTimer(prevTimer => {
                if (prevTimer > 0) {
                    return prevTimer - 1
                } else {
                    return prevTimer
                }
            })
        }, 1000)

        return () => clearInterval(interval)
    }, [])
    return (
        <AuthLayout
            title="OTP Authentication"
            subtitle="An authentication code has beed sent to byprogrammers@gmail.com"
            titleContainerStyle={{
                marginTOP: SIZES.padding * 2
            }}
        >
            {/* OTP Inputs */}
            <View
                style={{
                    flex: 1,
                    marginTop: SIZES.padding * 2,
                }}
            >
                <OTPInputView
                    pinCount={4}
                    style={{
                        width: "100%",
                        height: 50
                    }}
                    codeInputFieldStyle={{
                        width: 65,
                        height: 65,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.lightGray2,
                        color: COLORS.black,
                        ...FONTS.h3
                    }}
                    onCodeFilled={(code) => console.log(code)}
                />

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginTop: SIZES.padding
                    }}
                >
                    <Text style={{ color: COLORS.darkGray, ...FONTS.body3 }}>Didn't receive code?</Text>
                    <TextButton
                        label={`Resend(${timer}s)`}
                        disabled={timer == 0 ? false : true}
                        buttonContainerStyle={{
                            marginLeft: SIZES.base,
                            backgroundColor: null
                        }}
                        labelStyle={{
                            color: COLORS.primary,
                            ...FONTS.h3
                        }}
                        onPress={() => setTimer(60)}
                    />
                    <View
                        style={{
                            marginTop: SIZES.padding,
                            alignItems: "center",
                        }}
                    >

                    </View>
                </View>
            </View>
            {/* Footer */}

            <View>
                <TextButton
                    label="Continue"
                    buttonContainerStyle={{
                        height: 50,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.primary
                    }}
                    onPress={() => console.log("continue")}
                />
                <Text
                    style={{
                        color: COLORS.darkGray,
                        ...FONTS.body3
                    }}
                >

                    By SiginUp, you agreen to our terms & condition
                </Text>
                <TextButton
                    label="Terms and Condition"
                    buttonContainerStyle={{
                        backgroundColor: null
                    }}
                    labelStyle={{
                        color: COLORS.primary,
                        ...FONTS.body3
                    }}
                    onPress={() => console.log('terms and conditon')}
                />
            </View>
        </AuthLayout>
    )
}

export default Otp;