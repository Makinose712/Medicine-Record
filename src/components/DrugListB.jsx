import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DrugListB() {
  return(
    <>
    <View>
        <View style={styles.drugListItem2}>
            <View>
            <Text style={styles.drugListItemTitle2}>ネキシウムカプセル20mg</Text>
            <Text style={styles.drugListItemTitle}>1日1回　朝食後</Text>
            </View>
        </View>
    </View>

    <View>
        <View style={styles.drugListItem2}>
            <View>
            <Text style={styles.drugListItemTitle2}>パルモディア錠0.1mg</Text>
            <Text style={styles.drugListItemTitle}>1日2回　朝夕食後</Text>
            </View>
        </View>
    </View>

    <View>
        <View style={styles.drugListItem2}>
            <View>
            <Text style={styles.drugListItemTitle2}>メトホルミン錠250mg「MT」</Text>
            <Text style={styles.drugListItemTitle}>1日2回　朝夕食後</Text>
            </View>
        </View>
    </View>

    <View>
        <View style={styles.drugListItem2}>
            <View>
            <Text style={styles.drugListItemTitle2}>フォシーガ錠10mg</Text>
            <Text style={styles.drugListItemTitle}>1日1回　朝食後</Text>
            </View>
        </View>
    </View>
    </>

  );
}

const styles = StyleSheet.create({

    drugListItemTitle: {
        fontSize: 18,
        lineHeight: 32,
    },

    drugListItem2: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 16,
        paddingHorizontal: 19,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: 'rgba(0,0,0, 0.15)',
        },
        drugListItemTitle2: {
        fontSize: 24,
        lineHeight: 32,
        },
});
