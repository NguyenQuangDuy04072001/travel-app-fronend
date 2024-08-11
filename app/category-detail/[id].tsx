import Colors from "@/constants/Colors";
import { width } from "@/constants/contants";
import categoryDetailService from "@/services/Api/categoryDetail";
import { ICategoryType } from "@/types/type";
import { Feather, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Loading from "@/components/Loading";

const IMG_HEIGHT = 300;

const CategoryDetails = () => {
    const router = useRouter();
    const { id } = useLocalSearchParams();
    const categoryId = Array.isArray(id) ? parseInt(id[0], 10) : parseInt(id, 10);
    const [category, setCategory] = useState<ICategoryType>();

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const category = await categoryDetailService.getCategoryDetail(categoryId)
                setCategory(category)
            } catch (error) {
                console.error("Error fetching category detail:", error);
            }finally{
                setLoading(false)
            }
        }
        fetchData()
    }, [id])

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <Stack.Screen
                options={{
                    headerTransparent: true,
                    headerTitle: "",
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => router.back()}
                            style={{
                                backgroundColor: "rgba(255, 255, 255, 0.5)",
                                padding: 4,
                                borderRadius: 10
                            }}
                        >
                            <View
                                style={{
                                    backgroundColor: Colors.white,
                                    padding: 6,
                                    borderRadius: 10
                                }}
                            >
                                <Feather name="arrow-left" size={20} />
                            </View>
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <TouchableOpacity
                            onPress={() => { }}
                            style={{
                                backgroundColor: "rgba(255, 255, 255, 0.5)",
                                padding: 4,
                                borderRadius: 10
                            }}
                        >
                            <View
                                style={{
                                    backgroundColor: Colors.white,
                                    padding: 6,
                                    borderRadius: 10
                                }}
                            >
                                <Ionicons name="bookmark-outline" size={20} />
                            </View>
                        </TouchableOpacity>
                    ),
                    headerShown: true
                }}
            />
            <View style={styles.container}>
                <Image
                    source={{ uri: category?.image }}
                    style={styles.image}
                />
                <View style={styles.contentWrapper}>
                    <Text style={styles.categoryName}>{category?.name}</Text>
                    <View style={styles.categoryLocationWrapper}>
                        <FontAwesome5 name="map-marker-alt" size={18} color={Colors.primaryColor} />
                        <Text style={styles.categoryLocationTxt}>{category?.location}</Text>
                    </View>

                    <View style={styles.highLighWrapper}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.highLighIcon}>
                                <Ionicons name="time" size={18} color={Colors.primaryColor} />
                            </View>
                            <View>
                                <Text style={styles.highLighTxt}>Duration</Text>
                                <Text style={styles.highLighTxtVal}>{category?.duration} Days</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.highLighIcon}>
                                <Ionicons name="time" size={18} color={Colors.primaryColor} />
                            </View>
                            <View>
                                <Text style={styles.highLighTxt}>Person</Text>
                                <Text style={styles.highLighTxtVal}>{category?.duration}</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.highLighIcon}>
                                <Ionicons name="time" size={18} color={Colors.primaryColor} />
                            </View>
                            <View>
                                <Text style={styles.highLighTxt}>Rating</Text>
                                <Text style={styles.highLighTxtVal}>{category?.rating}</Text>
                            </View>
                        </View>
                    </View>

                    <Text style={styles.categoryDescription}>{category?.description}</Text>
                </View>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity style={[styles.footerBtn, styles.footerBookBtn]}>
                    <Text style={styles.footerBtnTxt}>Book Now</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerBtn}>
                    <Text style={styles.footerBtnTxt}>${category?.price}</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default CategoryDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    image: {
        width: width,
        height: IMG_HEIGHT
    },
    contentWrapper: {
        padding: 20,
        backgroundColor: Colors.white,
    },
    categoryName: {
        fontSize: 24,
        fontWeight: '500',
        color: Colors.black,
        letterSpacing: .5
    },
    categoryLocationWrapper: {
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 10,
        alignItems: 'center'
    },
    categoryLocationTxt: {
        fontSize: 14,
        fontWeight: '500',
        color: Colors.black,
        marginLeft: 5
    },
    highLighWrapper: {
        flexDirection: 'row',
        marginVertical: 20,
        justifyContent: 'space-between'
    },
    highLighIcon: {
        backgroundColor: "#F4F4F4",
        paddingHorizontal: 8,
        paddingVertical: 5,
        borderRadius: 8,
        marginRight: 5,
        justifyContent: 'center'
    },
    highLighTxt: {
        fontSize: 12,
        color: '#999'
    },
    highLighTxtVal: {
        fontSize: 14,
        fontWeight: '600'
    },
    categoryDescription: {
        fontSize: 16,
        color: Colors.black,
        lineHeight: 24,
        letterSpacing: .5,
    },
    footer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        padding: 20,
        width: width
    },
    footerBookBtn: {
        flex: 2,
        backgroundColor: Colors.primaryColor,
        marginRight: 20
    },
    footerBtn: {
        flex: 1,
        backgroundColor: Colors.black,
        padding: 20,
        borderRadius: 10,
        alignItems: 'center'
    },
    footerBtnTxt: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: '600',
        textTransform: 'uppercase'
    }
})