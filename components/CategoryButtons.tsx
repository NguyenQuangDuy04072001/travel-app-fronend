import Colors from "@/constants/Colors";
import { dataCategoriesButton } from "@/constants/contants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRef, useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
    onCategoryChanged: (category: string) => void
}

const CategoryButtons = ({onCategoryChanged}: Props) => {
    const scrollRef = useRef<ScrollView>(null)
    const itemRef = useRef<TouchableOpacity[] | null[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSelectCategory = (index: number) => {
        setActiveIndex(index)
        itemRef.current[index]?.measureLayout(
            scrollRef.current as any,
            (x) => scrollRef.current?.scrollTo({ x, animated: true }),
            console.error
        );

        onCategoryChanged(dataCategoriesButton[index].title)
    }

    return (
        <View>
            <Text style={styles.title}>Categories</Text>
            <ScrollView
                ref={scrollRef}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    gap: 15,
                    paddingVertical: 10,
                    marginBottom: 10,
                }}
            >
                {dataCategoriesButton.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        activeOpacity={.7}
                        ref={(el) => itemRef.current[index] = el}
                        onPress={() => handleSelectCategory(index)}
                        style={[styles.categoryBtn, activeIndex == index ? {backgroundColor: Colors.primaryColor} : {backgroundColor: Colors.white}]}
                    >
                        <MaterialCommunityIcons
                            name={item.iconName as any}
                            size={20}
                            color={activeIndex == index ? Colors.white : Colors.black}
                        />
                        <Text style={[styles.categoryBtnTxt, activeIndex == index ? {color: Colors.white} : {color: Colors.black}]}>{item.title}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}

export default CategoryButtons;

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: '700',
        color: Colors.black
    },
    categoryBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 10,
    },
    categoryBtnTxt: {
        marginLeft: 5,
        color: Colors.black
    }
})