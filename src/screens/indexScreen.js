import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import BlogContext from '../context/Blogcontext'

const IndexScreen = () => {
    const Context = useContext(BlogContext)
    return (
        <View>
            <Text>Index Screen</Text>
            <FlatList 
                data={context}
                // keyExtractor={()}
            />
        </View>
    )
}

export default IndexScreen

const styles = StyleSheet.create({})
