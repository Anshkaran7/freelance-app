import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import { ResizeMode, Video } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const categories = ['Hinduism', 'Politics', 'Education', 'Science', 'Technology'];

const Post: React.FC = () => {
    const [description, setDescription] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [media, setMedia] = useState<string | null>(null);
    const [mediaType, setMediaType] = useState<string>('');
    const [status, setStatus] = useState<{ isPlaying: boolean }>({ isPlaying: false });
    const videoRef = useRef<Video>(null);



    const handleMediaSelect = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!permissionResult.granted) {
            alert('Permission to access media library is required!');
            return;
        }

        const pickerResult = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!pickerResult.canceled) {
            setMedia(pickerResult.assets[0].uri);
            setMediaType(pickerResult.assets[0].type!);
        }
    };

    const handlePost = () => {
        // Handle the post submission logic here
        console.log({
            description,
            category,
            media,
        });
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.header}>Create a Post</Text>

                <Text style={styles.label}>Description:</Text>
                <TextInput
                    style={{
                        ...styles.input,
                        height: 100,
                        textAlignVertical: 'top',
                    }}
                    placeholder="Enter description"
                    value={description}
                    onChangeText={setDescription}
                    multiline
                    numberOfLines={4}
                    placeholderTextColor="#888"
                />

                <Text style={styles.label}>Category:</Text>
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={category}
                        onValueChange={(itemValue) => setCategory(itemValue)}
                        style={styles.picker}
                    >
                        <Picker.Item label="Select category" value="" />
                        {categories.map((cat) => (
                            <Picker.Item key={cat} label={cat} value={cat.toLowerCase()} />
                        ))}
                    </Picker>
                </View>

                <TouchableOpacity style={styles.mediaButton} onPress={handleMediaSelect}>
                    <Text style={styles.mediaButtonText}>Upload Media</Text>
                </TouchableOpacity>

                {media && (
                    mediaType === 'video' ? (
                        <View style={styles.mediaContainer}>
                            <Video
                                ref={videoRef}
                                source={{ uri: media }}
                                useNativeControls
                                style={styles.media}
                                resizeMode={ResizeMode.CONTAIN}
                                onPlaybackStatusUpdate={status => setStatus(() => status)}
                            />
                            <TouchableOpacity
                                style={styles.playPauseButton}
                                onPress={() => {
                                    if (status.isPlaying) {
                                        videoRef.current?.pauseAsync();
                                    } else {
                                        videoRef.current?.playAsync();
                                    }
                                }}
                            >
                                <Ionicons name={status.isPlaying ? 'pause' : 'play'} size={24} color="#fff" />
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <Image
                            source={{ uri: media }}
                            style={styles.media}
                        />
                    )
                )}

                <TouchableOpacity style={styles.postButton} onPress={handlePost}>
                    <Text style={styles.postButtonText}>Post</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#FFFFFF',
    },
    header: {
        fontSize: 24,
        fontFamily: 'WorkSans_Bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#333',
    },
    label: {
        fontSize: 18,
        fontFamily: 'WorkSans_Medium',
        marginBottom: 10,
        color: '#333',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 10,
        fontSize: 16,
        fontFamily: 'WorkSans_Reg',
        backgroundColor: '#F2F2F2',
        marginBottom: 20,
        color: '#333',
    },
    pickerContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        marginBottom: 20,
        backgroundColor: '#F2F2F2',
    },
    picker: {
        height: 50,
        width: '100%',
        fontFamily: 'WorkSans_Reg',
    },
    mediaButton: {
        backgroundColor: '#FF6347',
        borderRadius: 10,
        padding: 16,
        alignItems: 'center',
        marginBottom: 20,
    },
    mediaButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontFamily: 'WorkSans_Bold',
    },
    media: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 20,
    },
    postButton: {
        backgroundColor: '#FF6347',
        borderRadius: 10,
        padding: 16,
        alignItems: 'center',
    },
    postButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontFamily: 'WorkSans_Bold',
    },
    mediaContainer: {
        position: 'relative',
    },
    playPauseButton: {
        position: 'absolute',
        bottom: '40%',
        right: '45%',
        backgroundColor: '#FF6347',
        borderRadius: 50,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Post;
