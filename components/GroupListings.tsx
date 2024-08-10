import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IGroupsType } from '@/types/type'
import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'

type Props = {
    data: IGroupsType[]
}

const GroupListings = ({ data }: Props) => {
    const renderItems = ({ item }: { item: IGroupsType }) => {
        return (
            <View style={styles.item}>
                <Image source={{ uri: "https://aleale.com.vn/wp-content/uploads/2016/08/anh-song-nui-thien-nhien.jpg" }} style={styles.image} />
                <View>
                    <Text style={styles.itemTxt}>{item.name}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name='star' size={20} color={Colors.primaryColor} />
                        <Text style={styles.itemRating}>{item.rating}</Text>
                        <Text style={styles.itemReviews}>({item.reviews})</Text>
                    </View>
                </View>
            </View>
        )
    }


    return (
        <View style={{ marginVertical: 20 }}>
            <Text style={styles.title}>Top Travel Groups</Text>
            <FlatList
                data={data}
                renderItem={renderItems}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default GroupListings

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: '600',
        color: Colors.black,
        marginBottom: 10,
    },
    item: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: Colors.white,
        marginRight: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 80,
        height: 100,
        borderRadius: 10,
        marginRight: 10
    },
    itemTxt: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.black,
        marginBottom: 8
    },
    itemRating: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.black,
        marginLeft: 5
    },
    itemReviews: {
        fontSize: 14,
        color: '#999',
        marginLeft: 3
    }
})