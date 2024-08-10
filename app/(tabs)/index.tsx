import { Image, Keyboard, ScrollView, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Text, View } from '@/components/Themed';
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { useHeaderHeight } from "@react-navigation/elements";
import { useEffect, useState } from 'react';
import { CategoryButtons, GroupListings, Listings } from '@/components';
import categoriesService from '@/services/Api/categories';
import groupsService from '@/services/Api/groups';

const Page = () => {
  const headerHeight = useHeaderHeight();
  const [category, setCategory] = useState("All")
  const [categoryList, setCategoryList] = useState([])
  const [groupList, setGroupList] = useState([])

  const onCatChange = (category: string) => {
    console.log("category: ", category);
    setCategory(category)
  }

  const fetchCategories = async () => {
    try {
      const categoryList = await categoriesService.getCategories()
      setCategoryList(categoryList)
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  }

  const fetchGroups = async () => {
    try {
      const groupList = await groupsService.getGroups();
      setGroupList(groupList)
    } catch (error) {
      console.error("Error fetching groups:", error);
    }
  }

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const [categoryList, groupList] = await Promise.all([
    //       categoriesService.getCategories(),
    //       groupsService.getGroups()
    //     ]);
    //     setCategoryList(categoryList);
    //     setGroupList(groupList);
    //   } catch (error) {
    //     console.error("Error fetching data:", error);
    //   }
    // };

    // fetchData();
    fetchCategories();
    fetchGroups()
  }, []);

  return (
    <>
      <Stack.Screen options={{
        headerTransparent: true,
        headerTitle: "",
        headerLeft: () => (
          <TouchableOpacity style={{ marginLeft: 20 }}>
            <Image
              source={require('@/assets/images/avatar.png')}
              style={{
                width: 40,
                height: 40,
                borderRadius: 10
              }}
            />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity
            style={{
              marginRight: 20,
              backgroundColor: Colors.white,
              padding: 10,
              borderRadius: 10,
              elevation: 5,
            }}
          >
            <Ionicons name='notifications' size={20} color={Colors.black} />
          </TouchableOpacity>
        )
      }} />
      {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
        <View style={[styles.container, { paddingTop: headerHeight }]}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.headingTxt}>Explore The Beautiful World!</Text>
            <View style={styles.searchSectionWrapper}>
              <View style={styles.searchBar}>
                <Ionicons
                  name='search'
                  size={18}
                  style={{ marginRight: 5 }}
                  color={Colors.black}
                />
                <TextInput placeholder='Search...' style={{ flex: 1 }} />
              </View>
              <TouchableOpacity>
                <Ionicons name='options' size={28} style={styles.filterBtn} color={Colors.white} />
              </TouchableOpacity>
            </View>

            <CategoryButtons onCategoryChanged={onCatChange} />

            <Listings data={categoryList} category={category} />

            <GroupListings data={groupList} />
          </ScrollView>
        </View>
      {/* </TouchableWithoutFeedback> */}
    </>
  );
}

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Colors.bgColor,
  },
  headingTxt: {
    fontSize: 28,
    fontWeight: "800",
    color: Colors.black,
    marginTop: 10
  },
  searchSectionWrapper: {
    flexDirection: 'row',
    backgroundColor: Colors.bgColor,
    marginVertical: 20
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.white,
    padding: 12,
    borderRadius: 10,
    alignItems: 'center'
  },
  filterBtn: {
    backgroundColor: Colors.primaryColor,
    padding: 12,
    borderRadius: 10,
    marginLeft: 15
  }
});
