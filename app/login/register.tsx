import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import { router } from 'expo-router';

const SignUpScreen = () => {

    return (
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
            <Image source={require('@/assets/images/logo.png')} style={styles.logo} />
            <Text style={styles.title}>Create New Account</Text>
            <Text style={styles.subtitle}>Fill Your Details</Text>
            <TextInput style={styles.input} placeholder="Full name" />
            <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
            <TextInput style={styles.input} placeholder="Phone No." keyboardType="phone-pad" />
            <TextInput style={styles.input} placeholder="Password" secureTextEntry />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>SIGN UP</Text>
            </TouchableOpacity>
            <Text style={styles.loginText}>Already Have Account? <Text onPress={() => router.push('login')} style={styles.loginLink}>Log In</Text></Text>
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
        marginBottom: 10,
        color: '#333',
    },
    subtitle: {
        fontSize: 14,
        color: '#888',
        marginBottom: 20,
        textAlign: 'center',
        fontFamily: 'WorkSans_Reg',
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
    loginText: {
        fontSize: 14,
        fontFamily: 'WorkSans_Reg',
    },
    loginLink: {
        color: '#FF6347',
        fontFamily: 'WorkSans_Bold',
    },
});

export default SignUpScreen;
