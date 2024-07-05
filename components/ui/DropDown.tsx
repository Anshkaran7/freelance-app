import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface DropdownProps {
    onCopy: () => void;
    onReport: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({ onCopy, onReport }) => {
    return (
        <View style={styles.dropdownContainer}>
            <TouchableOpacity onPress={onCopy} style={styles.dropdownItem}>
                <Text style={styles.dropdownText}>Copy Post</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onReport} style={styles.dropdownItem}>
                <Text style={styles.dropdownText}>Report Post</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    dropdownContainer: {
        position: 'absolute',
        top: 24,
        right: 10,
        backgroundColor: 'white',
        borderRadius: 8,
        elevation: 5,
        zIndex: 1000,
    },
    dropdownItem: {
        padding: 10,
        paddingHorizontal: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    dropdownText: {
        fontSize: 14,
        fontFamily: 'WorkSans_Reg',
        color: '#333',
    },
});

export default Dropdown;
