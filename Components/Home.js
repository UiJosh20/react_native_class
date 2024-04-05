
import { useState } from 'react'
import { Button, Image, Text, View, Pressable, Modal } from 'react-native'
const heroimg = require('../assets/adaptive-icon.png')

const Home = () => {
    const [IsModalVisible, setIsModalVisible] = useState(false)
    const pressImg = () => {
        console.log("Image pressed")
    }
    const pressText = () => {
        console.log("text pressed")
    }
  return (
    <View>
        <Pressable onPress={pressImg}>
        <Image source={heroimg} style={{width:370, height: 300}}/>
        </Pressable>
        <Pressable onPress={pressText}>
        <Text style={{fontSize: 13, paddingHorizontal: 20, textAlign: 'justify',}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat
        </Text>
        </Pressable>
        <View style={{paddingHorizontal: 20, marginTop: 20,}}>
        <Button title="Press" onPress={() => setIsModalVisible(true)} />
        </View>
        <Modal visible={IsModalVisible}>
            <View style={{backgroundColor:"lightblue", flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, borderRadius: 10, shadowColor: "#000",}}>
                <Text>Modal Content</Text>
                <Button title='Close' color="midnightblue" onPress={() => setIsModalVisible(false)}/>
            </View>
        </Modal>

    </View>
  )
}

export default Home