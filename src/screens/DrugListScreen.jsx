import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import firebase from 'firebase';

import DrugList from '../components/DrugList';
import DrugListB from '../components/DrugListB';
import CircleButton from '../components/CircleButton';
import LogOutButton from '../components/LogOutButton';

export default function DrugListScreen(props) {
  const { navigation } = props;
  const [drugs, setDrugs] = useState([]);
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
      const ref = db.collection(`users/${currentUser.uid}/drugs`).orderBy('updatedAt', 'desc');
      unsubscribe = ref.onSnapshot((snapshot) => {
      const userDrugs = [];
      snapshot.forEach((doc) => {
          console.log(doc.id, doc.data());
          const data = doc.data();
          userDrugs.push({
            id: doc.id,
            bodyText: data.bodyText,
        });
      });
      setDrugs(userDrugs);
      
    }, (error) => {
      console.log(error);
      Alert.Alert('データの読み込みに失敗しました。');
    });
    }
    return unsubscribe;
  }, []);
  
  return (
    <View style={styles.container}>
      <DrugList />
      <DrugListB drugs={drugs} />
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

