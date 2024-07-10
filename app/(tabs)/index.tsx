// screens/PostsScreen.tsx
import Card from '@/components/ui/Card';
import Header from '@/components/ui/Header';
import PostCard from '@/components/ui/PostCard';
import TabViewComponent from '@/components/ui/TabView';
import React, { useState } from 'react';
import { FlatList, Image, View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { SceneMap } from 'react-native-tab-view';

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

const PostsScreen: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const [likedPosts, setLikedPosts] = useState<string[]>([]);
  const [savedPosts, setSavedPosts] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [routes] = useState([
    { key: 'trending', title: 'Trending' },
    { key: 'new_post', title: 'New Post' },
    { key: 'committee', title: 'Committee' },
    { key: 'jay_shree', title: 'Jay Shree' },
  ]);
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
      <PostCard
        post={item}
        isLiked={isLiked}
        isSaved={isSaved}
        onLike={() => handleLike(item.id)}
        onSave={() => handleSave(item.id)}
      />
    );
  };

  const TrendingRoute = () => (
    <FlatList
      ListHeaderComponent={
        <>
          <Card />
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
      <Header onFilterPress={() => setFilterVisible(true)} />
      <TabViewComponent
        index={index}
        setIndex={setIndex}
        routes={routes}
        renderScene={renderScene}
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
  },
  modalItem: {
    paddingVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  modalItemText: {
    fontSize: 16,
    fontFamily: 'WorkSans_Reg',
  },
});

export default PostsScreen;
