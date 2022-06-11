import React from 'react';
import AuthLayout from './AuthLayout';
import { COLORS, FONTS, SIZES, icons } from '../../constants';
import { TextButton, TextIconButton, FormInput } from '../../components';
import { utils } from '../../utils';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

const SignUp = ({ navigation }) => {

    const [email, setEmail] = React.useState("")
    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [showPass, setShowPass] = React.useState(false);
    const [emailError, setEmailError] = React.useState("")
    const [usernameError, setUsernameError] = React.useState("")
    const [passwordError, setPasswordError] = React.useState("")

    function isEnableSignUp() {
        return email != "" && username != "" && password != "" && emailError == "" && passwordError == "" && usernameError == ""
    }
    return (
        <AuthLayout
            title="Getting Started"
            subtitle="Create Account to continue"
            titleContainerStyle={{
                marginTop: SIZES.radius
            }}
        >
            {/* FormInput and SignUpSectio */}
            <View
                style={{
                    flex: 1,
                    marginTop: SIZES.padding
                }}
            >
                {/* Email */}
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
                {/* User name */}
                <FormInput
                    label="Username"
                    autoCompleteType='username'
                    onChange={(value) => {
                        setUsername(value)
                    }}
                    errorMsg={usernameError}
                    appendComponent={
                        <View
                            style={{
                                justifyContent: 'center'
                            }}
                        >
                            <Image
                                source={username == "" || (username != "" && usernameError == "") ? icons.correct : icons.cross}
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: username == "" ? COLORS.gray : (username != "" && usernameError == "") ? COLORS.green : COLORS.red
                                }}
                            />
                        </View>
                    }
                />
                <FormInput
                    label="Password"
                    secureTextEntry={!showPass}
                    autoCompleteType="password"
                    containerStyle={{
                        marginTop: SIZES.radius,

                    }}
                    onChange={(value) => setPassword(value)}
                    appendComponent={
                        <TouchableOpacity
                            style={{
                                width: 40,
                                alignItems: 'flex-end',
                                justifyContent: 'center'
                            }}
                            onPress={() => setShowPass(!showPass)}
                        >
                            <Image
                                source={showPass ? icons.eye_close : icons.eye}
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: COLORS.gray
                                }}
                            />
                        </TouchableOpacity>
                    }
                />
                {/* Sign In & SignUp  */}
                <TextButton
                    label="Sign Up"
                    buttonContainerStyle={{
                        height: 55,
                        alignItems: 'center',
                        marginTop: SIZES.padding,
                        borderRadius: SIZES.radius,
                        backgroundColor: isEnableSignUp() ? COLORS.primary : COLORS.transparentPrimray
                    }}
                    disabled={isEnableSignUp() ? false : true}
                    onPress={() => {
                        navigation.navigate("Otp")
                    }}
                />
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.radius,
                        justifyContent: 'center'
                    }}
                >
                    <Text
                        style={{
                            color: COLORS.darkGray, ...FONTS.body3
                        }}
                    >
                        Already Have an account ?
                    </Text>

                    <TextButton
                        label="Sign In"
                        buttonContainerStyle={{
                            backgroundColor: null,

                        }}
                        labelStyle={{
                            color: COLORS.primary,
                            ...FONTS.h3,
                            marginLeft: 3,
                        }}
                        onPress={() => navigation.goBack()
                        }
                    />

                </View>
            </View>
            {/* Footer */}
            {/* Footer */}
            <View>
                {/* Facebook */}
                <TextIconButton
                    containerStyle={{
                        height: 50,
                        alignItems: 'center',
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.blue
                    }}
                    icon={icons.fb}
                    iconStyle={{
                        tintColor: COLORS.white
                    }}
                    iconPosition="LEFT"
                    label="Continue With Facebook"
                    labelStyle={{
                        color: COLORS.white,
                        marginLeft: SIZES.radius
                    }}
                    onPress={() => { console.log('FB') }}
                />
                {/* Google */}
                <TextIconButton
                    containerStyle={{
                        height: 50,
                        alignItems: 'center',
                        marginTop: SIZES.radius,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.lightGray2
                    }}
                    label="Continue with google"
                    iconPosition="LEFT"
                    iconStyle={{
                        tintColor: null
                    }}
                    labelStyle={{
                        marginLeft: SIZES.radius
                    }}
                    icon={icons.google}
                    onPress={() => { console.log('GOOGLE') }}
                />
            </View>
        </AuthLayout>
    )
}

export default SignUp;