import React, { useContext } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import {Context} from '../context/BlogContext'

const IndexScreen = () => {
    const {state, addBlogPost} = useContext(Context)
    return (
        <View>
            <Text>Index Screen</Text>
            <Button title="Add Post" onPress={addBlogPost}/>
            <FlatList 
                data={state}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({item}) => {
                    return <Text>
                        {item.title}
                    </Text>
                }}
            />
        </View>
    )
}

export default IndexScreen

const styles = StyleSheet.create({})
