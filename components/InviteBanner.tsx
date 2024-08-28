import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';

const InviteBanner = () => (
  <View style={styles.inviteBannerContainer}>
    <View style={styles.inviteHeader}>
      <Text style={styles.inviteTitle}>मित्रों को आमंत्रित करें</Text>
      <Text style={styles.inviteMembers}>10 सदस्य जोड़ें</Text>
    </View>
    <View style={styles.inviteContent}>
      <Image source={require('@/assets/images/WhatsApp_icon.png')} style={styles.whatsappIcon} />
      <View style={styles.inviteTextContainer}>
        <Text style={styles.inviteDescription}>share the app link and earn rewards as your friends join!</Text>
        <View style={styles.progressContainer}>
          <Text style={styles.progressText}>75%</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: '75%' }]} />
          </View>
        </View>
      </View>
    </View>
    <Pressable style={styles.inviteButton}>
      <Text style={styles.inviteButtonText}>आमंत्रित करें</Text>
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  inviteBannerContainer: {
    padding: 15,
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#FF7F30',
    marginBottom: 15,
  },
  inviteHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  inviteTitle: {
    fontSize: 16,
    fontFamily: 'WorkSans_Bold',
    color: '#333',
  },
  inviteMembers: {
    fontSize: 14,
    fontFamily: 'WorkSans_Bold',
    color: '#FF7F30',
  },
  inviteContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  whatsappIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  inviteTextContainer: {
    flex: 1,
  },
  inviteDescription: {
    fontSize: 14,
    fontFamily: 'WorkSans_Reg',
    color: '#666',
    marginBottom: 5,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressText: {
    fontSize: 14,
    fontFamily: 'WorkSans_Bold',
    color: '#FFA500',
    marginRight: 10,
  },
  progressBar: {
    flex: 1,
    height: 8,
    backgroundColor: '#EEE',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#FFA500',
  },
  inviteButton: {
    backgroundColor: '#FF7F30',
    paddingVertical: 10,
    borderRadius: 20,
    width: '100%',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inviteButtonText: {
    color: '#FFF',
    fontFamily: 'WorkSans_Bold',
    fontSize: 16,
  },
});

export default InviteBanner;
