import React from 'react'
import { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Context } from '../context/BlogContext'
import { EvilIcons } from "@expo/vector-icons"
const ShowScreen = ({route, navigation}) => {
    const {id} = route.params
    const {state} = useContext(Context) 

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate("edit", {id})}>
                    <EvilIcons name="pencil" size={35} />
                </TouchableOpacity>
            )
        })
    }, [navigation])
    const blogPost = state.find(post => post.id === id)
    return (
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    )
}

export default ShowScreen

const styles = StyleSheet.create({})
