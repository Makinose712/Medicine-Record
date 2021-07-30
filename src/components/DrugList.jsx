import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DrugList() {
  return (
        <View>
            <View style={styles.drugListItem}>
                <View>
                <Text style={styles.drugListItemTitle}>2021年8月1日（日）</Text>
                <Text style={styles.drugListItemTitle}>太郎さん　56歳（男性）</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    drugListItem: {
        backgroundColor: '#00FF19',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 16,
        paddingHorizontal: 19,
        alignItems: 'center',
      },
      
      drugListItemTitle: {
        fontSize: 18,
        lineHeight: 32,
      },
     
});
