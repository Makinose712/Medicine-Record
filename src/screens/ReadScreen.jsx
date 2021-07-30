import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import Button from '../components/Button';

export default function ReadScreen(props) {
    const { navigation } = props;
    return(
    <View stale={styles.container}>
    <View style={styles.inputContainer}>
    <Text>QRコード登録</Text>
    <TextInput value=
    "（ニックネーム）さんのおくすり手帳情報を登録します。薬局からもらったQRコードを用意してください" multiline style={styles.input} />
    </View>
    <Button
     label="読取開始"
     onPress={() => { navigation.reset({
        index: 0,
        routes: [{ name: 'DrugList'}],
    });
    }}
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