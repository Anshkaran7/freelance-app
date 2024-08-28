// components/Header.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FilterIcon, FlameIcon, BellIcon } from '@/components/navigation/Icon';
import { router } from 'expo-router';

const Header = ({ onFilterPress }: { onFilterPress: () => void }) => {
    return (
        <View style={styles.header}>
            <Image source={require('@/assets/images/logo.png')} style={{ width: 35, height: 35, marginRight: 10 }} />
            <View style={styles.searchInput}>
                <View style={styles.searchContainer}>
                    <Ionicons name="search" size={17} color="#3D3D3D" />
                    <TextInput
                        placeholder="Search"
                        style={styles.searchTextInput}
                        placeholderTextColor="#888"
                    />
                </View>
                <TouchableOpacity onPress={onFilterPress}>
                    <FilterIcon width={16} height={16} color='#3D3D3D' />
                </TouchableOpacity>
            </View>
            <View style={styles.notificationContainer}>
                <View style={styles.notificationBadge}>
                    <FlameIcon width={16} height={16} />
                    <Text style={styles.notificationText}>2</Text>
                </View>
                <Pressable onPress={
                    () => router.push('/(tabs)/fav')
                }>
                    <BellIcon width={20} height={20} color="#3D3D3D" />
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 10,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    searchInput: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 10,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    searchTextInput: {
        marginLeft: 10,
        flex: 1,
        fontFamily: 'WorkSans_Reg',
    },
    notificationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    notificationBadge: {
        backgroundColor: '#FF7F30',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        gap: 5,
        paddingVertical: 2,
        marginRight: 5,
    },
    notificationText: {
        color: '#fff',
        fontSize: 14,
        fontFamily: 'WorkSans_Bold',
    },
});

export default Header;
