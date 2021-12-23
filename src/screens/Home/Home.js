import React from 'react'
import { View, Text, Button } from 'react-native'

const Home = ({navigation}) => {

    const handleNavigation = () => {
        navigation.navigate('My Wardrobe')
    }

    return <View>
        <Text>Home</Text>
        <Button 
            onPress={handleNavigation} 
            title="My Wardrobe"
        />
    </View>
}

export default Home