import { Tabs } from 'expo-router';
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { FavIcon, HomeIcon, Icon2, PlusIcon, ProfileIcon } from '@/components/navigation/Icon';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarInactiveTintColor: Colors[colorScheme ?? 'light'].tabIconDefault,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
          backgroundColor: '#fff',
          borderRadius: 30,
          position: 'absolute',
          bottom: 20,
          left: 20,
          right: 20,
          borderTopWidth: 0,
          elevation: 10,
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <HomeIcon color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="icon2"
        options={{
          title: 'Page 2',
          tabBarIcon: ({ color }) => (
            <Icon2 color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="post"
        options={{
          title: 'Post',
          tabBarIcon: ({ color, focused }) => (
            <PlusIcon color={color} />
          ),
          tabBarButton: (props) => (
            <TouchableOpacity
              {...props}
              style={styles.customButton}
            >
              <View style={styles.customIconContainer}>
                <PlusIcon />
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen
        name="fav"
        options={{
          title: 'Notifications',
          tabBarIcon: ({ color }) => (
            <Ionicons name="notifications-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <ProfileIcon color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  customButton: {
    top: -20, // Adjust this value to move the icon up or down
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  customIconContainer: {
    width: 70, // Adjust size as needed
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
