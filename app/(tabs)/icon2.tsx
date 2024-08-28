import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet, Text, Image, Modal, ScrollView, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const membersData = [
  {
    id: '1',
    name: 'Karan',
    location: 'Maharashtra',
    bio: 'Loves trekking and photography.',
    avatar: require('@/assets/images/assets/client.png'), // Replace with your image path
  },
  {
    id: '2',
    name: 'Rahul',
    location: 'Gujarat',
    bio: 'Avid reader and tech enthusiast.',
    avatar: require('@/assets/images/assets/client.png'), // Replace with your image path
  },
  {
    id: '3',
    name: 'Anjali',
    location: 'Karnataka',
    bio: 'Passionate about cooking and gardening.',
    avatar: require('@/assets/images/assets/client.png'), // Replace with your image path
  },
  // Add more members as needed
];

const states = ['All', 'Maharashtra', 'Gujarat', 'Karnataka']; // Add more states as needed

const MembersScreen: React.FC = () => {
  const [selectedState, setSelectedState] = useState<string>('All');
  const [filteredMembers, setFilteredMembers] = useState(membersData);
  const [filterVisible, setFilterVisible] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterMembers = (state: string, query: string) => {
    let filtered = membersData;

    if (state !== 'All') {
      filtered = filtered.filter(member => member.location === state);
    }

    if (query) {
      filtered = filtered.filter(member =>
        member.name.toLowerCase().includes(query.toLowerCase())
      );
    }

    setFilteredMembers(filtered);
    setFilterVisible(false);
  };

  const renderMemberItem = ({ item }: any) => (
    <View style={styles.memberItem}>
      <Image source={item.avatar} style={styles.avatar} />
      <View style={styles.memberInfo}>
        <Text style={styles.memberName}>{item.name}</Text>
        <Text style={styles.memberLocation}>{item.location}</Text>
        <Text style={styles.memberId}>ID: {item.id}</Text>
        <Text style={styles.memberBio}>{item.bio}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Members</Text>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => setFilterVisible(true)}
        >
          <Text style={styles.filterButtonText}>Filter by State</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.searchInput}
        placeholder="Search by name"
        value={searchQuery}
        onChangeText={(text) => {
          setSearchQuery(text);
          filterMembers(selectedState, text);
        }}
      />
      <FlatList
        data={filteredMembers}
        renderItem={renderMemberItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 80 }}
        showsVerticalScrollIndicator={false}
      />
      <Modal
        visible={filterVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setFilterVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select State</Text>
            <ScrollView style={styles.scrollView}>
              {states.map((state) => (
                <TouchableOpacity
                  key={state}
                  style={styles.stateItem}
                  onPress={() => {
                    setSelectedState(state);
                    filterMembers(state, searchQuery);
                  }}
                >
                  <Text style={[
                    styles.stateItemText,
                    selectedState === state && styles.selectedStateItemText
                  ]}>
                    {state}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <TouchableOpacity
              style={styles.applyButton}
              onPress={() => filterMembers(selectedState, searchQuery)}
            >
              <Text style={styles.applyButtonText}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerTitle: {
    fontSize: 18, // Slightly smaller font size
    fontFamily: 'WorkSans_Bold',
    color: '#333',
  },
  filterButton: {
    backgroundColor: '#FF8C00',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  filterButtonText: {
    color: '#fff',
    fontFamily: 'WorkSans_Medium',
    fontSize: 14,
  },
  searchInput: {
    height: 35,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 20,
    margin: 15,
    paddingLeft: 10,
    fontSize: 14,
    fontFamily: 'WorkSans_Reg',
    backgroundColor: '#fff',
  },
  memberItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    marginBottom: 12,
    borderRadius: 15,
    marginHorizontal: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
    borderWidth: 1,
    borderColor: '#FF8C00',
  },
  memberInfo: {
    flex: 1,
  },
  memberName: {
    fontSize: 15, // Slightly smaller font size
    fontFamily: 'WorkSans_Bold',
    color: '#333',
  },
  memberLocation: {
    fontSize: 13,
    fontFamily: 'WorkSans_Reg',
    color: '#888',
    marginTop: 3,
  },
  memberId: {
    fontSize: 12,
    fontFamily: 'WorkSans_Reg',
    color: '#999',
    position: 'absolute',
    top: 0,
    right: 15,
    marginTop: 3,
  },
  memberBio: {
    fontSize: 13,
    fontFamily: 'WorkSans_Reg',
    color: '#555',
    marginTop: 5,
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
    fontSize: 16,
    fontFamily: 'WorkSans_Bold',
    marginBottom: 15,
    color: '#333',
  },
  scrollView: {
    width: '100%',
    maxHeight: 200,
  },
  stateItem: {
    paddingVertical: 8,
    alignItems: 'center',
  },
  stateItemText: {
    fontSize: 14,
    fontFamily: 'WorkSans_Reg',
    color: '#333',
  },
  selectedStateItemText: {
    fontWeight: 'bold',
    color: '#FF8C00',
  },
  applyButton: {
    backgroundColor: '#FF8C00',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 20,
  },
  applyButtonText: {
    color: '#fff',
    fontFamily: 'WorkSans_Bold',
    fontSize: 14,
  },
});

export default MembersScreen;
