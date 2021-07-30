import React,{ useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

import DrugList from '../components/DrugList';
import DrugListB from '../components/DrugListB';
import CircleButton from '../components/CircleButton';
import LogOutButton from '../components/LogOutButton';

export default function DrugListScreen(props) {
  const { navigation } = props;
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogOutButton />,
    });
  }, []);
  
  return (
    <View style={styles.container}>
    <DrugList />
    <DrugListB />
    <CircleButton name="plus" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

