// components/PostCard.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FollowIcon, LikeIcon, CommentIcon, ShareIcon, SaveIcon } from '@/components/navigation/Icon';

const formatNumber = (num: number) => {
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
};

type PostCardProps = {
    post: any;
    isLiked: boolean;
    isSaved: boolean;
    onLike: () => void;
    onSave: () => void;
};

const PostCard = ({ post, isLiked, isSaved, onLike, onSave }: PostCardProps) => {
    return (
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <Image source={post.user.avatar} style={styles.avatar} />
                <View style={styles.headerTextContainer}>
                    <Text style={styles.username}>{post.user.name}</Text>
                    <Text style={styles.timestamp}>{post.timestamp}</Text>
                </View>
                <TouchableOpacity style={styles.followButton}>
                    <FollowIcon width={16} height={16} />
                    <Text style={styles.followButtonText}>Follow</Text>
                </TouchableOpacity>
            </View>
            <Image source={post.image} style={styles.cardImage} />
            <View style={styles.cardFooter}>
                <TouchableOpacity style={styles.iconContainer} onPress={onLike}>
                    <LikeIcon width={16} height={16} color={isLiked ? '#FF7F30' : '#3D3D3D'} />
                    <Text style={[styles.iconText, { color: isLiked ? '#FF7F30' : '#3D3D3D' }]}>
                        {formatNumber(post.likes)}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer}>
                    <CommentIcon width={16} height={16} />
                    <Text style={styles.iconText}>{formatNumber(post.comments)}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer}>
                    <ShareIcon width={16} height={16} />
                    <Text style={styles.iconText}>{formatNumber(post.views)}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer} onPress={onSave}>
                    <SaveIcon width={16} height={16} color={isSaved ? '#FF5D01' : '#3D3D3D'} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 20,
        marginBottom: 15,
        marginHorizontal: 10,
        marginTop: 20,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingTop: 10,
        paddingBottom: 5,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    headerTextContainer: {
        flex: 1,
    },
    username: {
        fontSize: 16,
        color: '#000',
        fontFamily: 'WorkSans_Bold',
    },
    timestamp: {
        fontSize: 12,
        color: '#888',
        fontFamily: 'WorkSans_Reg',
    },
    followButton: {
        backgroundColor: '#FF5D01',
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    followButtonText: {
        color: '#fff',
        fontSize: 12,
        fontFamily: 'WorkSans_SemiBold',
    },
    cardImage: {
        width: '100%',
        height: 200,
        marginBottom: 10,
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 10,
        paddingHorizontal: 5,
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 20,
    },
    iconText: {
        marginLeft: 5,
        fontSize: 14,
        color: '#3D3D3D',
        fontFamily: 'WorkSans_Reg',
    },
});

export default PostCard;
