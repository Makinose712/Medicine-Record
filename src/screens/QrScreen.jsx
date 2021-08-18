import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import CircleButton from '../components/CircleButton';

import firebase from 'firebase';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [bodyText, setBodyText] = useState('');

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
   
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  function handlePress(){
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    const ref = db.collection(`users/${currentUser.uid}/drugs`);
    ref.add({
      bodyText,
    })
    .then((docRef) => {
      console.log('Created', docRef.id);
    })
    .catch((error) => {
      console.log('Error!', error);
    });

  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
        onChangeText={(text) => { setBodyText(text); }}
      />
      {scanned && <Button title={'もう一度スキャン'} onPress={() => setScanned(false)} />}
      <CircleButton
      label="実行"
      onPress={handlePress}

      />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
},
inputContainer: {
    paddingHorizontal: 27,
    paddingVertical: 32,
},
input: {
    backgroundColor: '#F0F4F8',
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
},  
}); 
