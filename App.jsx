import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (

  <View style={styles.container}>


{/* 1 */}
    <View style={styles.appbar}>
      <View style={styles.appbarInner}>
        <Text style={styles.appbarTitle}>おくすり手帳</Text>
        <Text style={styles.appbarRight}>ログアウト</Text>
      </View>
    </View>

{/* 2 */}
    <View>
      <View style={styles.drugListItem}>
        <View>
          <Text style={styles.drugListItemTitle}>2021年8月1日（日）</Text>
          <Text style={styles.drugListItemTitle}>太郎さん　56歳（男性）</Text>
        </View>
      </View>
    </View>

{/* 3 */}
  <View>
      <View style={styles.drugListItem2}>
          <View>
            <Text style={styles.drugListItemTitle2}>ネキシウムカプセル20mg</Text>
            <Text style={styles.drugListItemTitle}>1日1回　朝食後</Text>
          </View>
        </View>
      </View>

{/* 4 */}
<View>
      <View style={styles.drugListItem2}>
          <View>
            <Text style={styles.drugListItemTitle2}>パルモディア錠0.1mg</Text>
            <Text style={styles.drugListItemTitle}>1日2回　朝夕食後</Text>
          </View>
        </View>
      </View>

{/* 5 */}
<View>
      <View style={styles.drugListItem2}>
          <View>
            <Text style={styles.drugListItemTitle2}>メトホルミン錠250mg「MT」</Text>
            <Text style={styles.drugListItemTitle}>1日2回　朝夕食後</Text>
          </View>
        </View>
      </View>

{/* 6 */}
<View>
      <View style={styles.drugListItem2}>
          <View>
            <Text style={styles.drugListItemTitle2}>フォシーガ錠10mg</Text>
            <Text style={styles.drugListItemTitle}>1日1回　朝食後</Text>
          </View>
        </View>
      </View>

  <View style={styles.circleButton}>
    <Text style={styles.circleButtonLabel}>+</Text>
  </View>

  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  appbar: {
    width: '100%',
    height: 104,
    backgroundColor: '#8000FF',
    justifyContent: 'flex-end',
  },
  appbarInner: {
    alignItems: 'center',
  },
  appbarRight: {
    position: 'absolute',
    right: 19,
    bottom: 16,
    color: 'rgba(255,255,255,0.8)',
  },
  appbarTitle: {
    marginBottom: 8,
    fontSize: 22,
    lineHeight: 32,
    color: '#ffffff',
    fontWeight: 'bold',
  },
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
  circleButton: {
    backgroundColor: '#8000FF',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
  },
  circleButtonLabel: {
    color: '#ffffff',
    fontSize: 40,
    lineHeight: 40,
  },



});
