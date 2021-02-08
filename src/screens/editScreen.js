import React from 'react'
import { View, StyleSheet,TextInput, Button, Text } from 'react-native'
import { useContext } from 'react'
import { Context } from '../context/BlogContext'
import { useState } from 'react'
 
const EditScreen = ({route, navigation}) => {
    const {id} = route.params
    const {state, editBlogPost} = useContext(Context) 

    const blogPost = state.find((blogPost) => blogPost.id === id )
    const [title, setTitle] = useState(blogPost.title) 
    const [content, setContent] = useState(blogPost.content)
       
    return (
        <View>
            <Text style={styles.label}>Edit Title</Text>
            <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)} />

            <Text style={styles.label}>Edit Content</Text>
            <TextInput style={styles.input} value={content} onChangeText={(text) => setContent(text)} />

            <Button title="SaveBlog Post" 
                onPress={() => editBlogPost(id, title,content, () => {
                    navigation.pop()
                })} />
        </View>
    )
}

export default EditScreen

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: "black",
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    }
})
