import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { Context } from '../context/BlogContext'

const CreateScreen = ({route,navigation}) => {
    // const {id} = route.params
    const {addBlogPost} = useContext(Context)
    const [title, setTitle] = useState("") 
    const [content, setContent] = useState("")
    
    return (
        <View>
            <Text style={styles.label}>Enter Title</Text>
            <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)} />

            <Text style={styles.label}>Enter Content</Text>
            <TextInput style={styles.input} value={content} onChangeText={(text) => setContent(text)} />

            <Button title="Add Blog Post" 
                onPress={() => addBlogPost(title,content, () => {
                    navigation.navigate("Index")
                })} />
        </View>
    )
}

export default CreateScreen

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
