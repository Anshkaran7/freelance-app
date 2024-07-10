import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const Cards = () => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image
                    source={require('@/assets/images/ram.png')}
                    style={styles.statue} />
                <View style={styles.daysContainer}>
                    <View style={[styles.day, styles.currentDay]}>
                        <Text style={styles.dayText}>7th</Text>
                        <Text style={styles.dayText}>Oct</Text>
                        <Text style={styles.dayText}>Tue</Text>
                    </View>
                    <View style={[styles.day, styles.activeDay]}>
                        <Text style={styles.dayText}>8th</Text>
                        <Text style={styles.dayText}>Oct</Text>
                        <Text style={styles.dayText}>Wed</Text>
                    </View>
                </View>
                <Text style={styles.message}>Say today'S 'Jay Shree Ram'</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Jai Shree Ram !</Text>
                </TouchableOpacity>
                <View style={styles.iconContainer}>
                    <Svg height="40" width="40">
                        <Circle cx="20" cy="20" r="20" fill="#FFA500" />
                    </Svg>
                    <Text style={styles.iconText}>2D</Text>
                </View>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 20,
        width: '90%',
        alignItems: 'center',
        position: 'relative',
    },
    statue: {
        position: 'absolute',
        top: -30,
        left: 1,
        width: 100,
        height: 200,
        resizeMode: 'contain',
        zIndex: 1,
    },
    daysContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 70,
    },
    day: {
        width: 60,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginHorizontal: 5,
    },
    dayText: {
        textAlign: 'center',
    },
    activeDay: {
        backgroundColor: '#FFA500',
    },
    inactiveDay: {
        backgroundColor: '#E0E0E0',
    },
    currentDay: {
        borderColor: '#FFA500',
        borderWidth: 2,
        backgroundColor: '#FFDAB9',
    },
    message: {
        textAlign: 'center',
        marginTop: 20,
        marginLeft: 10,
    },
    button: {
        backgroundColor: '#FFA500',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
    },
    iconContainer: {
        position: 'absolute',
        top: 20,
        right: 20,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconText: {
        color: 'white',
        position: 'absolute',
        top: 10,
    },

});

export default Cards;
