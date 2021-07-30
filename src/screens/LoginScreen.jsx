import React, { useState, useEffect } from 'react';
import {
     View, Text, TextInput, StyleSheet, TouchableOpacity, Alert,
     } from 'react-native';
import firebase from 'firebase';

import Button from '../components/Button';

export default function LogInScreen(props) {
const { navigation } = props;
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) =>{
        if (user) {
            navigation.reset({
                index: 0,
                routes: [{ name: 'DrugList'}],
            });
        }
    });
    return unsubscribe;
}, []);

function handlePress(){
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then((userCredentail) => {
        const { user } = userCredentail;
        console.log(user.uid);
        navigation.reset({
            index: 0,
            routes: [{ name: 'DrugList'}],
        });
    })
    .catch((error) => {
        Alert.alert('ログインに失敗しました');
    });    
}

return(
    <View style={StyleSheet.container}>
        <View style={styles.inner}>
            <Text style={styles.title}>ログイン</Text>

            <TextInput
              style={styles.input}
              value={email}
              onChangeText={(text) => { setEmail(text); }}
              autoCapitalize="none"
              keyboardType="email-address"
              placeholder="Email Address"
              textContentType="emailAddress"
            />

            <TextInput style={styles.input}
              value={password}
              onChangeText={(text) => { setPassword(text); }}
              autoCapitalize="none"
              placeholder="Password"
              secureTextEntry
              textContentType="password"
             />

            <Button
             label="実行"
             onPress={handlePress}
            />
            <View style={styles.footer}>
                <Text style={styles.footerText}>新規登録はこちら→</Text>
                <TouchableOpacity
                 onPress={() => {
                    navigation.reset({
                      index: 0,
                      routes: [{ name: 'SignUp' }],
                    });
                }}
                >
                    <Text style={styles.footerLink}>新規登録画面</Text>
                </TouchableOpacity>
                
            </View>
        </View>
    </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    inner: {
        paddingHorizontal: 27,
        paddingVertical: 24,
    },
    title:{
      fontSize: 24,
      lineHeight: 32,
      fontWeight: 'bold',
      marginBottom: 24,

    },
    input:{
        fontSize: 16,
        height: 48,
        borderColor: '#DDDDDD',
        borderWidth: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: 8,
        marginBottom: 16,
    },
    footerText: {
        fontSize: 14,
        lineHeight: 24,
        marginRight: 8,
    },
    footerLink: {
        fontSize: 14,
        lineHeight: 24,
        color: '#8000FF',
    },
    footer: {
        flexDirection: 'row',
    }

});

