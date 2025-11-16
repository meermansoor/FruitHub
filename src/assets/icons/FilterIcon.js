import { StyleSheet, Text, View } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React from 'react';

export default function FilterIcon({size, color}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Entypo name="cricle" size={size} color='black' />
        <AntDesign name="line" size={size} color='black' />
      </View>
      <View style={styles.header}>
        <AntDesign name="line" size={24}  color='black' />
        <Entypo name="cricle" size={24}  color='black' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
