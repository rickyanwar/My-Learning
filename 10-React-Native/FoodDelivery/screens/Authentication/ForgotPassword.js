import React from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import { COLORS, FONTS, SIZES, icons } from '../../constants';
import { FormInput, CustomSwitch, TextButton, TextIconButton } from '../../components';
import { utils } from '../../utils';
import AuthLayout from './AuthLayout';

const ForgotPassword = ({ navigation }) => {

    const [email, setEmail] = React.useState("");
    const [emailError, setEmailError] = React.useState("");

    function isEnableSendEmail() {
        return email != "" && emailError == ""
    }

    return (
        <AuthLayout
            title="Password Recovery"
            subtitle="Please enter your email addres to recover your password"
            titleContainerStyle={{
                marginTop: SIZES.padding * 2
            }}
        >
            {/* Form Input */}
            <View
                style={{
                    flex: 1,
                    marginTop: SIZES.padding * 2,
                }}
            >
                <FormInput
                    label="Email"
                    keyboardType='email-address'
                    autoCompleteType='email'
                    onChange={(value) => {
                        utils.validateEmail(value, setEmailError)
                        setEmail(value)
                    }}
                    errorMsg={emailError}
                    appendComponent={
                        <View
                            style={{
                                justifyContent: 'center'
                            }}
                        >
                            <Image
                                source={email == "" || (email != "" && emailError == "") ? icons.correct : icons.cross}
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: email == "" ? COLORS.gray : (email != "" && emailError == "") ? COLORS.green : COLORS.red
                                }}
                            />
                        </View>
                    }
                />

                {/* Button */}
                <TextButton
                    label="Send Email"
                    buttonContainerStyle={{
                        height: 55,
                        alignItems: 'center',
                        marginTop: SIZES.padding,
                        borderRadius: SIZES.radius,
                        backgroundColor: isEnableSendEmail() ? COLORS.primary : COLORS.transparentPrimray
                    }}
                    disabled={isEnableSendEmail() ? false : true}
                    onPress={() => { navigation.goBack() }}
                />
            </View>
        </AuthLayout>
    )
}

export default ForgotPassword;