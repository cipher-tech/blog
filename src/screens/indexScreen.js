import React, { useContext } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { Context } from '../context/BlogContext'
import { Feather } from "@expo/vector-icons"
import { useEffect } from 'react'

const IndexScreen = ({ navigation }) => {
    const { state, deleteBlogPost, getBlogPosts} = useContext(Context)
    useEffect(() => {
        getBlogPosts()
        let listener = navigation.addListener("focus", () =>{
            getBlogPosts()
        })
        return () => {
            listener = null
        }
    }, []) 
    return (
        <>
            <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate("Show", {id: item.id})}>
                            <View style={styles.row}>
                                <Text style={styles.title}>
                                    {item.title} - {item.id}
                                </Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <Feather style={styles.icon} name="trash" />
                                </TouchableOpacity>
                            </View>

                        </TouchableOpacity>
                    )
                }}
            />
        </>
    )
}

export default IndexScreen

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: "gray"
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
})
