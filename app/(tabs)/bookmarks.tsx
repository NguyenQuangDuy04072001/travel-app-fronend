import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';

const Bookmarks = () => {
  return (
    <View style={styles.container}>
      <Text>Bookmarks</Text>
    </View>
  );
}

export default Bookmarks

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
