import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

const notifications = [
  {
    date: 'Today, May 21',
    data: [
      { id: '1', message: 'Special offer: Double data on weekly plans! Check out the latest deals on our app.', time: '8:28 am' },
      { id: '2', message: 'Enjoy unlimited data with our new daily pack! Recharge to get 10% extra', time: '6:36 am' },
    ],
  },
  {
    date: 'Yesterday, May 20',
    data: [
      { id: '3', message: 'Exclusive: Free streaming on Banglaflix with our new plan.', time: '11:15 am' },
    ],
  },
  {
    date: 'May 19',
    data: [
      { id: '4', message: 'Your subscription to the Music Station is now active.', time: '9:00 pm' },
      { id: '5', message: 'New games available in the Banglaflix app. Play now! Experience seamless browsing.', time: '7:15 pm' },
      { id: '6', message: 'Reminder: Pay your bill to avoid service interruption. Your balance is low. Top up today!', time: '12:17 pm' },
    ],
  },
];

const NotificationScreen = () => {
  

  const renderNotificationItem = ({ item }: { item: any }) => (
    <View style={styles.notificationItem}>
      <Ionicons name="notifications-outline" size={24} color="#FFA500" style={styles.notificationIcon} />
      <View style={styles.notificationTextContainer}>
        <Text style={styles.notificationMessage}>{item.message}</Text>
        <Text style={styles.notificationTime}>{item.time}</Text>
      </View>
    </View>
  );

  const renderDateSection = ({ item }: { item: any }) => (
    <View>
      <Text style={styles.dateHeader}>{item.date}</Text>
      <FlatList
        data={item.data}
        renderItem={renderNotificationItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Feather name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
        <TouchableOpacity>
        </TouchableOpacity>
      </View>
      <FlatList
        data={notifications}
        renderItem={renderDateSection}
        keyExtractor={(item) => item.date}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff', // Saffron color for the header
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: 'WorkSans_Bold',
    color: '#333',
  },
  listContainer: {
    paddingVertical: 10,
    paddingBottom: 100,
  },
  dateHeader: {
    fontSize: 16,
    fontFamily: 'WorkSans_SemiBold',
    color: '#999',
    marginHorizontal: 20,
    marginTop: 15,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginVertical: 8,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 3,
  },
  notificationIcon: {
    marginRight: 15,
  },
  notificationTextContainer: {
    flex: 1,
  },
  notificationMessage: {
    fontSize: 16,
    fontFamily: 'WorkSans_Reg',
    color: '#333',
  },
  notificationTime: {
    fontSize: 12,
    fontFamily: 'WorkSans_Light',
    color: '#999',
    marginTop: 5,
  },
});

export default NotificationScreen;
