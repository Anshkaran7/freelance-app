import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Ionicons } from '@expo/vector-icons';
import { BellIcon } from '@/components/navigation/Icon';
import Dropdown from '@/components/ui/DropDown';
import { Picker } from '@react-native-picker/picker';

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
        <View>
          <View style={styles.cardHeader}>
            <Image source={item.user.avatar} style={styles.avatar} />
            <View>
              <Text style={styles.username}>{item.user.name}</Text>
              <View style={{ flexDirection: 'row', gap: 7, alignItems: 'center' }}>
                <Text style={styles.usernameSecondary}>{item.user.username}</Text>
                <Text style={styles.timestamp}>1 hour ago</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => setDropdownVisible(dropdownVisible === item.id ? null : item.id)}
            style={styles.ellipsisButton}
          >
            <Ionicons name="ellipsis-horizontal" size={24} color="#6A2600" />
          </TouchableOpacity>
          {dropdownVisible === item.id && (
            <Dropdown
              onCopy={() => {
                // Implement your copy logic here
                console.log('Copy post');
                setDropdownVisible(null);
              }}
              onReport={() => {
                // Implement your report logic here
                console.log('Report post');
                setDropdownVisible(null);
              }}
            />
          )}
        </View>
        <Text style={styles.cardText}>{item.text}</Text>
        <Image source={item.image} style={styles.cardImage} />
        <View style={styles.cardFooter}>
          <TouchableOpacity
            style={[
              styles.likeButton,
              { backgroundColor: isLiked ? '#FF5D01' : '' },
            ]}
            onPress={() => handleLike(item.id)}
          >
            <Ionicons name="heart" size={16} color={isLiked ? '#fff' : '#3D3D3D'} />
            <Text style={[styles.iconText, { color: isLiked ? '#fff' : '#3D3D3D' }]}>{formatNumber(item.likes)}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <Ionicons name="eye" size={16} color="#3D3D3D" />
            <Text style={styles.iconText}>{formatNumber(item.likes)}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <Ionicons name="chatbubble" size={16} color="#3D3D3D" />
            <Text style={styles.iconText}>{formatNumber(item.comments)}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => handleSave(item.id)}
          >
            <Ionicons name="bookmark" size={16} color={isSaved ? '#FF5D01' : '#3D3D3D'} />
            <Text style={styles.iconText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const TrendingRoute = () => (
    <FlatList
      data={filteredPosts}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
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
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.appName}>Chanakaya</Text>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={24} color="black" style={styles.searchIcon} />
          <BellIcon width={20} height={20} />
        </View>
      </View>
      <View style={styles.filterContainer}>
        <Text style={styles.filterLabel}>Filter by Category:</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedCategory}
            onValueChange={(itemValue) => setSelectedCategory(itemValue)}
            style={styles.picker}
          >
            {categories.map((category) => (
              <Picker.Item key={category} label={category} value={category} />
            ))}
          </Picker>
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
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  appName: {
    fontSize: 20,
    fontFamily: 'WorkSans_Bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    paddingHorizontal: 10,
    height: 30,
    flex: 1,
    marginRight: 10,
  },
  searchIcon: {
    position: 'absolute',
    right: 30,
  },
  notificationIcon: {
    marginLeft: 10,
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
    backgroundColor: '#FFDAC5',
    borderRadius: 28,
    margin: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontSize: 18,
    fontFamily: 'WorkSans_SemiBold',
  },
  usernameSecondary: {
    fontFamily: 'WorkSans_Medium',
    fontSize: 12,
    color: '#6F6F6F',
  },
  timestamp: {
    fontFamily: 'WorkSans_Reg',
    fontSize: 12,
    color: '#6F6F6F',
  },
  ellipsisButton: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  ellipsisIcon: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  cardText: {
    marginVertical: 10,
    fontSize: 12,
    fontFamily: 'WorkSans_Reg',
  },
  cardImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconText: {
    marginLeft: 5,
    fontFamily: 'WorkSans_Reg',
    color: '#3D3D3D',
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

export default PostsScreen;
