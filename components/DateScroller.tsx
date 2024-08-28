import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const DateScroller = () => (
  <View style={styles.dateScrollerContainer}>
    <View style={styles.dateScrollerHeader}>
      <Text style={styles.dateScrollerTitle}>जय श्री राम</Text>
      <Text style={styles.dateScrollerDays}>2 दिन</Text>
    </View>
    <FlatList
      data={['Sep 7', 'Today', 'Sep 9', 'Sep 10', 'Sep 11', 'Sep 12']}
      horizontal
      renderItem={({ item, index }) => (
        <View style={[styles.dateItem, item === 'Today' && styles.selectedDate]}>
          <Text style={[styles.dateText, item === 'Today' && styles.selectedDateText]}>
            {item}
          </Text>
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
      showsHorizontalScrollIndicator={false}
      style={styles.dateList}
    />
    <TouchableOpacity style={styles.scrollerButton}>
      <Text style={styles.scrollerButtonText}>जय श्री राम</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  dateScrollerContainer: {
    paddingVertical: 10,
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FFA500',
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  dateScrollerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  dateScrollerTitle: {
    fontSize: 16,
    fontFamily: 'WorkSans_Bold',
    color: '#333',
  },
  dateScrollerDays: {
    fontSize: 14,
    fontFamily: 'WorkSans_Bold',
    color: '#FF7F30',
  },
  dateList: {
    marginBottom: 10,
  },
  dateItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#EEE',
    borderRadius: 30,
    marginHorizontal: 5,
  },
  selectedDate: {
    backgroundColor: '#FF7F30',
  },
  dateText: {
    fontSize: 14,
    fontFamily: 'WorkSans_Reg',
    color: '#333',
  },
  selectedDateText: {
    color: '#FFF',
    fontFamily: 'WorkSans_Bold',
  },
  scrollerButton: {
    backgroundColor: '#FF7F30',
    paddingVertical: 8,
    borderRadius: 20,
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  scrollerButtonText: {
    color: '#FFF',
    fontFamily: 'WorkSans_Bold',
    fontSize: 13,
  },
});

export default DateScroller;
