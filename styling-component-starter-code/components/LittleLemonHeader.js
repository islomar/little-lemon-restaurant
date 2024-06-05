import {View, Text, StyleSheet} from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={styles.headerView}>
      <Text
        style={styles.headerText}>
        Little Lemon
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    headerView: {
        backgroundColor: '#EE9972',
    },
    headerText: {
        padding: 40,
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
    },
});
