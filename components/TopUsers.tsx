import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const topUsers = [
  { id: '1', name: 'vatani', points: 1956, avatar: require('@/assets/images/assets/client.png') },
  { id: '2', name: 'Iman', points: 2056, avatar: require('@/assets/images/assets/client.png') },
  { id: '3', name: 'Jonathan', points: 1900, avatar: require('@/assets/images/assets/client.png') },
];

const getRankBadgeColor = (rank: number) => {
  switch (rank) {
    case 1: return '#FFA500'; // Gold for 1st
    case 2: return '#C0C0C0'; // Silver for 2nd
    case 3: return '#CD7F32'; // Bronze for 3rd
    default: return '#888'; // Default color
  }
};

const TopUsers = () => (
  <View style={styles.topUsersContainer}>
    <View style={styles.topUsersHeader}>
      <Text style={styles.topUsersTitle}>शीर्ष योगदानकर्ता</Text>
      <View style={styles.topUsersDropdown}>
        <Text style={styles.dropdownText}>आज</Text>
        <Feather name="chevron-down" size={20} color="#FFA500" />
      </View>
    </View>
    <View style={styles.topUsersWrapper}>
      {topUsers.map((user, index) => (
        <View
          key={user.id}
          style={[
            styles.topUserItem,
            index === 1 ? styles.centeredUser : styles.sideUser, // Center the middle user
          ]}
        >
          <View style={styles.avatarContainer}>
            <Image source={user.avatar} style={styles.topUserAvatar} />
            <View style={[styles.rankBadge, { backgroundColor: getRankBadgeColor(index + 1) }]}>
              <Text style={styles.rankBadgeText}>{index + 1}</Text>
            </View>
          </View>
          <Text style={styles.topUserName}>{user.name}</Text>
          <Text style={styles.topUserPoints}>{user.points} Points</Text>
        </View>
      ))}
    </View>
  </View>
);

const styles = StyleSheet.create({
  topUsersContainer: {
    padding: 15,
    backgroundColor: '#FFF',
    marginBottom: 10,
    borderRadius: 20
  },
  topUsersHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  topUsersTitle: {
    fontSize: 18,
    fontFamily: 'WorkSans_Bold',
    color: '#333',
  },
  topUsersDropdown: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropdownText: {
    fontSize: 16,
    fontFamily: 'WorkSans_Bold',
    color: '#FF7F30',
  },
  topUsersWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end', // Aligns users at the bottom, then elevates the center one
    paddingBottom: 10,
  },
  topUserItem: {
    alignItems: 'center',
    position: 'relative',
  },
  centeredUser: {
    marginTop: -15, // Move the middle user higher
  },
  sideUser: {
    marginTop: 10, // Keep the side users lower
  },
  avatarContainer: {
    width: 90,
    height: 90,
  },
  topUserAvatar: {
    width: '100%',
    height: '100%',
    borderRadius: 45,
    borderWidth: 2,
    borderColor: '#FF7F30',
  },
  rankBadge: {
    position: 'absolute',
    top: -10,
    right: -10,
    width: 30, // Increased size for better visibility
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFF',  // Adds a white border to the badge for better visibility
  },
  rankBadgeText: {
    color: '#FFF',
    fontFamily: 'WorkSans_Bold',
    fontSize: 16, // Increased font size for better readability
  },
  topUserName: {
    fontSize: 16,
    fontFamily: 'WorkSans_Bold',
    color: '#333',
    marginTop: 10,
    textAlign: 'center',
  },
  topUserPoints: {
    fontSize: 14,
    fontFamily: 'WorkSans_Reg',
    color: '#888',
    textAlign: 'center',
  },
});

export default TopUsers;
