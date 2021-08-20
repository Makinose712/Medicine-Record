import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { shape, string, arrayOf } from 'prop-types';


export default function DrugListB(props) {
    const { drugs } = props;

  return(
    <View>
        {drugs.map((drug) => (
            <View key={drug.id}>
                <View style={styles.drugListItem2}>
                    <View>
                        <Text style={styles.drugListItemTitle2}>{drug.bodyText}</Text>
                        <Text style={styles.drugListItemTitle}>1日1回　朝食後</Text>
                    </View>
                </View>
            </View>
        ))}}  
    </View>

  );
}

DrugListB.propTypes = {
    drugs: arrayOf(shape({
        id: string,
        bodyText: string,
    })).isRequired,
};

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
