import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native"

const CategoryDetails = () => {
    const {id} = useLocalSearchParams()

    return (
        <View>
            <Text>CategoryDetails {id}</Text>
        </View>
    )
}

export default CategoryDetails;

const styles = StyleSheet.create({})