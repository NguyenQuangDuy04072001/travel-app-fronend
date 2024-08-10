import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';

const Category = () => {
  return (
    <View style={styles.container}>
      <Text>Category</Text>
    </View>
  );
}

export default Category

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
