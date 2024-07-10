import { router } from 'expo-router';
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

const LoginScreen = () => {

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={require('@/assets/images/logo.png')} style={styles.logo} />
            <Text style={styles.title}>Welcome back</Text>
            <TextInput style={styles.input} placeholder="Email Address" keyboardType="email-address" />
            <TextInput style={styles.input} placeholder="Password" secureTextEntry />
            <View style={styles.rememberMeContainer}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 10,
                }}>
                    <TouchableOpacity style={styles.checkbox} />
                    <Text style={styles.rememberMeText}>Remember me</Text>
                </View>
                <TouchableOpacity>
                    <Text style={styles.forgotPasswordText}>Forgot password?</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button}
                onPress={() => router.push('(tabs)')}
            >
                <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
            <Text style={styles.signUpText}>Don't have an account? <Text onPress={() => router.push('login/register')} style={styles.signUpLink}>sign up</Text></Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontFamily: 'WorkSans_Bold',
        marginBottom: 40,
        color: '#333',
    },
    input: {
        width: '100%',
        height: 50,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 20,
        fontFamily: 'WorkSans_Reg',
    },
    rememberMeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 20,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
    },
    rememberMeText: {
        fontSize: 14,
        fontFamily: 'WorkSans_Reg',
    },
    forgotPasswordText: {
        fontSize: 14,
        color: '#FF6347',
        fontFamily: 'WorkSans_Reg',
    },
    button: {
        backgroundColor: '#FF6347',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontFamily: 'WorkSans_Bold',
    },
    signUpText: {
        fontSize: 14,
        fontFamily: 'WorkSans_Reg',
    },
    signUpLink: {
        color: '#FF6347',
        fontFamily: 'WorkSans_Bold',
    },
});

export default LoginScreen;
