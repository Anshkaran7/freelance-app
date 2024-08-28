import React, { useState } from 'react';
import { View, FlatList, Modal, TouchableOpacity, StyleSheet, Text, Dimensions, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Header from '@/components/ui/Header';
import PostCard from '@/components/ui/PostCard';
import TopUsers from '@/components/TopUsers';
import InviteBanner from '@/components/InviteBanner';
import DateScroller from '@/components/DateScroller';

const initialLayout = { width: Dimensions.get('window').width };

const posts = [
  {
    id: '1',
    user: {
      name: 'User 1',
      username: '@user1',
      avatar: require('@/assets/images/assets/client.png'),
    },
    text: 'अतीत का संधारण लाइब्रेरी के एकाकी, गहन अध्ययन, गहन शास्त्रार्थ के और कुछ विचारकों ने किया है।',
    image: require('@/assets/images/assets/mandir.jpg'),
    likes: 9200,
    comments: 9200,
    category: 'hinduism',
    timestamp: '2 hours ago',
    views: 1000,
  },
  {
    id: '2',
    user: {
      name: 'User 2',
      username: '@user2',
      avatar: require('@/assets/images/assets/client.png'),
    },
    text: 'This is a completely anonymous form, if you feel the need to ask anything / facing any problem kindly reach out and we will help it out, Thanks :)',
    image: require('@/assets/images/assets/ram.jpg'),
    likes: 8000,
    comments: 8000,
    category: 'politics',
    timestamp: '3 hours ago',
    views: 1000,
  },
];

const adminPosts = [
  {
    id: '3',
    user: {
      name: 'Admin 1',
      username: '@admin1',
      avatar: require('@/assets/images/assets/client.png'),
    },
    text: 'Important update: Please adhere to the new guidelines for community interaction.',
    image: require('@/assets/images/assets/mandir.jpg'),
    likes: 15000,
    comments: 5000,
    category: 'announcement',
    timestamp: '1 day ago',
    views: 3000,
  },
];

const newPosts = [
  {
    id: '4',
    user: {
      name: 'User 3',
      username: '@user3',
      avatar: require('@/assets/images/assets/client.png'),
    },
    text: 'Check out this amazing sunset I captured today!',
    image: require('@/assets/images/assets/mandir.jpg'),
    likes: 12000,
    comments: 3000,
    category: 'nature',
    timestamp: '4 hours ago',
    views: 1500,
  },
];
const jaiShreeRamData = [
  {
    id: '1',
    name: 'Karan',
    avatar: require('@/assets/images/assets/client.png'), // Replace with your image path
    message: 'Karan has wished you Jai Shree Ram!',
    date: 'Today, 9:30 AM',
  },
  {
    id: '2',
    name: 'Rahul',
    avatar: require('@/assets/images/assets/client.png'), // Replace with your image path
    message: 'Rahul has wished you Jai Shree Ram!',
    date: 'Today, 8:00 AM',
  },
  // Add more data as needed
];

const PostsScreen: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const [likedPosts, setLikedPosts] = useState<string[]>([]);
  const [savedPosts, setSavedPosts] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [filterVisible, setFilterVisible] = useState<boolean>(false);

  const handleLike = (postId: string) => {
    setLikedPosts((prev) =>
      prev.includes(postId) ? prev.filter((id) => id !== postId) : [...prev, postId]
    );
  };

  const handleSave = (postId: string) => {
    setSavedPosts((prev) =>
      prev.includes(postId) ? prev.filter((id) => id !== postId) : [...prev, postId]
    );
  };

  const filteredPosts = selectedCategory === 'All' ? posts : posts.filter(post => post.category.toLowerCase() === selectedCategory.toLowerCase());

  const renderItem = ({ item }: any) => {
    const isLiked = likedPosts.includes(item.id);
    const isSaved = savedPosts.includes(item.id);

    return (
      <View style={styles.postCardContainer}>
        <PostCard
          post={item}
          isLiked={isLiked}
          isSaved={isSaved}
          onLike={() => handleLike(item.id)}
          onSave={() => handleSave(item.id)}
        />
      </View>
    );
  };

  const TrendingRoute = () => (
    <View style={styles.trendingRouteContainer}>
      <FlatList
        ListHeaderComponent={
          <>
            <TopUsers />
            <InviteBanner />
            <DateScroller />
          </>
        }
        data={filteredPosts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 80 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );

  const NewPostRoute = () => (
    <View style={styles.defaultRouteContainer}>
      <FlatList
        data={newPosts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 80 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );

  const AdminPostRoute = () => (
    <View style={styles.defaultRouteContainer}>
      <FlatList
        data={adminPosts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 80 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );

  const AboutCommunityRoute = () => (
    <View style={styles.aboutCommunityContainer}>
      <Image
        source={require('@/assets/images/ram.jpg')} // Replace with your community image path
        style={styles.communityImage}
        resizeMode="cover"
      />
      <Text style={styles.communityTitle}>About Our Community</Text>
      <Text style={styles.communityDescription}>
        Welcome to our community! We are a group of like-minded individuals passionate about [Your Topic]. 
        Our community is dedicated to sharing knowledge, supporting one another, and growing together. 
        Join us as we explore, learn, and contribute to this amazing field.
      </Text>
    </View>
  );

  const JayShreeRoute = () => (
    <View style={styles.jaiShreeRamContainer}>
      <FlatList
        data={jaiShreeRamData}
        renderItem={renderJaiShreeRamItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 80 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );

  const renderJaiShreeRamItem = ({ item }: any) => (
    <View style={styles.jaiShreeRamItem}>
      <Image source={item.avatar} style={styles.avatar} />
      <View style={styles.jaiShreeRamTextContainer}>
        <Text style={styles.jaiShreeRamMessage}>{item.message}</Text>
        <Text style={styles.jaiShreeRamDate}>{item.date}</Text>
      </View>
    </View>
  );

  const renderScene = SceneMap({
    trending: TrendingRoute,
    new_post: NewPostRoute,
    admin_post: AdminPostRoute,
    about_community: AboutCommunityRoute,
    jay_shree: JayShreeRoute,
  });

  const routes = [
    { key: 'about_community', title: 'About Community' },
    { key: 'new_post', title: 'New Post' },
    { key: 'trending', title: 'Trending' },
    { key: 'admin_post', title: 'Admin Posts' },
    { key: 'jay_shree', title: 'Jay Shree Ram' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header onFilterPress={() => setFilterVisible(true)} />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={props => (
          <TabBar
            {...props}
            scrollEnabled
            indicatorStyle={styles.indicator}
            style={styles.tabBar}
            labelStyle={styles.labelStyle}
            tabStyle={styles.tabStyle}
          />
        )}
      />
      <Modal
        visible={filterVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setFilterVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Category</Text>
            {['All', 'hinduism', 'politics'].map((category) => (
              <TouchableOpacity
                key={category}
                style={styles.modalItem}
                onPress={() => {
                  setSelectedCategory(category);
                  setFilterVisible(false);
                }}
              >
                <Text style={styles.modalItemText}>{category}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#EEEEEE',
  },
  trendingRouteContainer: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  jaiShreeRamContainer: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  jaiShreeRamItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 10,
   borderColor: '#FF7F30',
   borderWidth: 1,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  jaiShreeRamTextContainer: {
    flex: 1,
  },
  jaiShreeRamMessage: {
    fontSize: 16,
    fontFamily: 'WorkSans_Bold',
    color: '#333',
  },
  jaiShreeRamDate: {
    fontSize: 14,
    fontFamily: 'WorkSans_Reg',
    color: '#888',
    marginTop: 5,
  },
  aboutCommunityContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#EEEEEE',
  },
  communityImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  communityTitle: {
    fontSize: 24,
    fontFamily: 'WorkSans_Bold',
    color: '#333',
    marginBottom: 10,
  },
  communityDescription: {
    fontSize: 16,
    fontFamily: 'WorkSans_Reg',
    color: '#555',
    textAlign: 'center',
    lineHeight: 24,
  },
  defaultRouteContainer: {
    flex: 1,
    backgroundColor: '#EEEEEE',
  },
  postCardContainer: {
    marginBottom: 15,
    backgroundColor: '#EEEEEE',
    borderRadius: 10,
    padding: 10,
  },
  defaultRoute: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  defaultRouteText: {
    fontSize: 16,
    fontFamily: 'WorkSans_Bold',
    color: '#555',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontFamily: 'WorkSans_Bold',
    marginBottom: 20,
    color: '#333',
  },
  modalItem: {
    paddingVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  modalItemText: {
    fontSize: 16,
    fontFamily: 'WorkSans_Reg',
    color: '#333',
  },
  tabBar: {
    backgroundColor: '#fff',
  },
  tabStyle: {
    width: 'auto',
  },
  labelStyle: {
    fontSize: 14,
    fontFamily: 'WorkSans_Bold',
    color: '#333',
  },
  indicator: {
    backgroundColor: '#333',
    height: 3,
  },
});

export default PostsScreen;