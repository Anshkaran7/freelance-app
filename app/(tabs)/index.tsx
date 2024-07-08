import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Dimensions, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Ionicons } from '@expo/vector-icons';
import { BellIcon, CommentIcon, FilterIcon, FlameIcon, FollowIcon, LikeIcon, SaveIcon, ShareIcon } from '@/components/navigation/Icon';
import Dropdown from '@/components/ui/DropDown';
import { Picker } from '@react-native-picker/picker';
import Card from '@/components/ui/Card';

const initialLayout = { width: Dimensions.get('window').width };

const categories = ['All', 'Hinduism', 'Politics', 'Education', 'Science', 'Technology'];

const posts = [
  {
    id: '1',
    user: {
      name: 'User 1',
      username: '@user1',
      avatar: require('@/assets/images/assets/karan.jpg'),
    },
    text: 'अतीत एक सन्दूकनुमा वस्त्र है जिसका धार्मिक अर्थ अनुष्ठान , गहन शास्त्रार्थ, अतीत का संधारण लाइब्रेरी के एकाकी, गहन अध्ययन, गहन शास्त्रार्थ, गहन शास्त्रार्थ, गहन शास्त्रार्थ के और कुछ विचारकों ने किया है।',
    image: require('@/assets/images/assets/mandir.jpg'),
    likes: 9200,
    comments: 9200,
    category: 'hinduism',
    timestamp: '2 hours ago',
    views: 1000
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
    views: 1000
  },
];

const formatNumber = (num: number) => {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k';
  }
  return num.toString();
};

const PostsScreen: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const [likedPosts, setLikedPosts] = useState<string[]>([]);
  const [savedPosts, setSavedPosts] = useState<string[]>([]);
  const [dropdownVisible, setDropdownVisible] = useState<string | null>(null); // Track which post's dropdown is visible
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [routes] = useState([
    { key: 'trending', title: 'Trending' },
    { key: 'new_post', title: 'New Post' },
    { key: 'committee', title: 'Committee' },
    { key: 'jay_shree', title: 'Jay Shree' },
  ]);

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

  const renderItem = ({ item }: { item: typeof posts[0] }) => {
    const isLiked = likedPosts.includes(item.id);
    const isSaved = savedPosts.includes(item.id);

    return (
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Image source={item.user.avatar} style={styles.avatar} />
          <View style={styles.headerTextContainer}>
            <Text style={styles.username}>{item.user.name}</Text>
            <Text style={styles.timestamp}>{item.timestamp}</Text>
          </View>
          <TouchableOpacity style={styles.followButton}>
            <FollowIcon width={16} height={16} />
            <Text style={styles.followButtonText}>Follow</Text>
          </TouchableOpacity>
        </View>
        <Image source={item.image} style={styles.cardImage} />
        <View style={styles.cardFooter}>
          <TouchableOpacity
            style={[
              styles.likeButton,

            ]}
            onPress={() => handleLike(item.id)}
          >
            <LikeIcon width={16} height={16} color={isLiked ? '#FF7F30' : '#3D3D3D'} />
            <Text style={[styles.iconText, { color: isLiked ? '#FF7F30' : '#3D3D3D' }]}>
              {formatNumber(item.likes)}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <CommentIcon width={16} height={16} />
            <Text style={styles.iconText}>{formatNumber(item.comments)}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <ShareIcon width={16} height={16} />
            <Text style={styles.iconText}>{formatNumber(item.views)}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => handleSave(item.id)}
          >
            <SaveIcon width={16} height={16} color={isSaved ? '#FF5D01' : '#3D3D3D'} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const TrendingRoute = () => (
    <FlatList
      ListHeaderComponent={
        <>
          <Card percentage={20} />
          <Image
            source={require('@/assets/images/card.png')}
            style={{ width: '100%', height: 170 }}
          />
        </>

      }
      data={filteredPosts}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ paddingBottom: 80 }}
      showsVerticalScrollIndicator={false}
    />
  );

  const renderScene = SceneMap({
    trending: TrendingRoute,
    new_post: () => (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>New Post</Text>
      </View>
    ),
    committee: () => (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Committee</Text>
      </View>
    ),
    jay_shree: () => (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Jay Shree</Text>
      </View>
    ),
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#EEEEEE' }}>
      <View style={styles.header}>
        <Text style={styles.appName}>Cn.</Text>
        <View style={styles.searchInput}>
          <View style={styles.searchContainer}>
            <Ionicons name="search" size={17} color="#3D3D3D" />
            <TextInput
              placeholder="Search"
              style={styles.searchTextInput}
              placeholderTextColor="#888"
            />
          </View>
          <FilterIcon width={16} height={16} color='#3D3D3D' />
        </View>
        <View style={styles.notificationContainer}>
          <View style={styles.notificationBadge}>
            <FlameIcon width={16} height={16} />
            <Text style={styles.notificationText}>2</Text>
          </View>
          <BellIcon width={20} height={20} />
        </View>
      </View>

      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            indicatorStyle={styles.tabIndicator}
            style={styles.tabBar}
            renderLabel={({ route, focused }) => (
              <Text style={[styles.tabLabel, focused ? styles.activeTabLabel : styles.inactiveTabLabel]}>
                {route.title}
              </Text>
            )}
          />
        )}
      />
    </SafeAreaView>
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
  appName: {
    fontSize: 24,
    fontFamily: 'WorkSans_Bold', // Ensure you have this font loaded
    color: '#000',
    marginRight: 10,
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
    fontFamily: 'WorkSans_Reg', // Ensure you have this font loaded
    marginLeft: 10,
    flex: 1,
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
    fontFamily: 'WorkSans_Medium', // Ensure you have this font loaded
  },
  tabBar: {
    backgroundColor: 'white',
  },
  tabIndicator: {
    backgroundColor: '#FF6347',
  },
  tabLabel: {
    fontSize: 14,
    fontFamily: 'WorkSans_SemiBold',
  },
  activeTabLabel: {
    color: '#FF6347',
  },
  inactiveTabLabel: {
    color: '#888',
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  filterLabel: {
    fontSize: 16,
    fontFamily: 'WorkSans_SemiBold',
    marginRight: 10,
  },
  pickerContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  picker: {
    height: 40,
    width: '100%',
  },
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
    fontFamily: 'WorkSans_SemiBold',
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
    fontFamily: 'WorkSans_Medium',
    fontSize: 12,
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
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
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

export default PostsScreen;
