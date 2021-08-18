import React,{ useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import firebase from 'firebase';

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

  useEffect(() => {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    let unsubscribe = () => {};
    if (currentUser) {
    const ref = db.collection(`users/${currentUser.uid}/drugs`);
    unsubscribe = ref.onSnapshot((snapshot) => {
      snapshot.forEach((doc) => {
        console.log(doc.id, doc.data());
      });
    });
    }
    return unsubscribe;
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

