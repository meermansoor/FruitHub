import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FilterIcon from '../assets/icons/FilterIcon.js';

export default function HomeScreen({ route }) {
  const name = route.params.firstName;

  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="menu" size={34} />
        <FontAwesome name="shopping-basket" size={28} color="orange" />
      </View>
      <View style={styles.greetContainer}>
        <Text style={styles.greetText}>
          Hello {name}, What fruit salad combo do you want today?
        </Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={24} color={'grey'} />
          <TextInput
            placeholder="Search for fruit salad combos"
            placeholderTextColor={'grey'}
            value={searchText}
            onChangeText={setSearchText}
            style={styles.searchInput}
          />
        </View>
        <View>
          <FilterIcon/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  greetContainer: {
    width: '75%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetText: {
    fontSize: 20,
    fontFamily: 'BrandonGrotesque-Regular',
    marginHorizontal: 23,
    marginVertical: 10,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 1,
    padding: 14,
    borderColor: 'black',
    backgroundColor: 'rgba(134, 134, 158, 0.3)',
  },
  searchInput: {
    flex: 1,
  },
  searchContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    width: '95%',
    gap: 10,
  },
});
