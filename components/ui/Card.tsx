import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const Card = ({ percentage = 20 }) => {
    return (
        <View style={styles.card}>
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image source={require('@/assets/images/WhatsApp_icon.png')} style={styles.logo} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Invite Friends</Text>
                    <Text style={styles.description}>Share the app link and earn rewards as your friends join!</Text>
                    <View style={styles.progressContainer}>
                        <View style={styles.progressBar}>
                            <View style={[styles.progressFill, { width: `${percentage}%` }]} />
                        </View>
                        <Text style={styles.percentageText}>{percentage}%</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        marginTop: 20,
        marginHorizontal: 20,
        borderRadius: 20,
        overflow: 'hidden',
        width: screenWidth - 40,
        borderWidth: 1,
        borderColor: '#F26B4C',
        borderStyle: 'dotted',

    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#FFD9D0',
        borderRadius: 10,
    },
    logoContainer: {
        width: 60,
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    logo: {
        width: 40,
        height: 40,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 18,
        color: '#F26B4C',
        fontFamily: 'WorkSans_SemiBold',
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
        color: '#F26B4C',
        fontFamily: 'WorkSans_Reg',
        marginBottom: 10,
    },
    progressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    progressBar: {
        height: 10,
        borderRadius: 5,
        flex: 1,
        backgroundColor: '#fff',
        overflow: 'hidden',
        marginRight: 10,
    },
    progressFill: {
        height: '100%',
        backgroundColor: '#FF7F30',
        borderRadius: 5,
    },
    percentageText: {
        fontSize: 14,
        color: '#F26B4C',
        fontFamily: 'WorkSans_SemiBold',
    },
});

export default Card;
