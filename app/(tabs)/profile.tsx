import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const initialLayout = { width: Dimensions.get('window').width };

const ProfileInfo = {
  name: 'Karan',
  location: 'Maharashtra',
  avatar: require('@/assets/images/assets/client.png'), // Replace with your image path
  id: 'ID123456789',
  about: 'Loves trekking and photography. Avid traveler and tech enthusiast. Passionate about coding and exploring new technologies.',
  jaiShreeRamCount: 16, // Number of people who said "Jai Shree Ram"
};

const YourIDRoute = () => (
  <View style={styles.tabContent}>
    <Image 
      source={require('@/assets/images/id.jpeg')} // Replace with your image path
      style={styles.idImage}
    />
  </View>
);

const AboutRoute = () => (
  <View style={styles.tabContent}>
    <Text style={styles.aboutText}>{ProfileInfo.about}</Text>
    <Text style={styles.jaiShreeRamText}>
      {ProfileInfo.jaiShreeRamCount} people have said "Jai Shree Ram" in the community.
    </Text>
  </View>
);

const ProfileScreen: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'yourID', title: 'Your ID' },
    { key: 'about', title: 'About' },
  ]);

  const renderScene = SceneMap({
    yourID: YourIDRoute,
    about: AboutRoute,
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.profileContainer}>
        <Image source={ProfileInfo.avatar} style={styles.avatar} />
        <Text style={styles.nameText}>{ProfileInfo.name}</Text>
        <Text style={styles.locationText}>{ProfileInfo.location}</Text>
      </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            indicatorStyle={styles.indicator}
            style={styles.tabBar}
            labelStyle={styles.labelStyle}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  profileContainer: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  idImage: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  nameText: {
    fontSize: 20,
    fontFamily: 'WorkSans_Bold',
    color: '#333',
  },
  locationText: {
    fontSize: 14,
    fontFamily: 'WorkSans_Reg',
    color: '#888',
    marginTop: 5,
  },
  tabContent: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 20,
  },
  aboutText: {
    fontSize: 14,
    fontFamily: 'WorkSans_Reg',
    color: '#555',
    textAlign: 'left',
    lineHeight: 24,
    marginBottom: 10,
  },
  jaiShreeRamText: {
    fontSize: 14,
    fontFamily: 'WorkSans_Bold',
    color: '#FF8C00',
    textAlign: 'left',
  },
  tabBar: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  labelStyle: {
    fontSize: 14,
    fontFamily: 'WorkSans_Bold',
    color: '#333',
  },
  indicator: {
    backgroundColor: '#FF8C00',
    height: 3,
  },
});

export default ProfileScreen;
