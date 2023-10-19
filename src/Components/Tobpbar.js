import { Image, StyleSheet, ScrollView, TouchableOpacity, View } from 'react-native';
import React from 'react';
// import Story from './Story';
import Feed from './Feed';
import Chat from './Chat';
import { useNavigation } from '@react-navigation/native';

const Tobpbar = () => {
    const navigation = useNavigation();
    const OpenChat = () => {
        navigation.navigate(Chat)
    }
    return (
        <ScrollView>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View style={{marginLeft:5}}>
                <Image
                    source={require('../Assets/InstaLogo.png')}
                    style={{ width: 150, height: 70 }}
                    />
            </View>
            <View style={{ flexDirection: 'row',marginRight:15}}>
                <TouchableOpacity>
                    <Image
                        source={require('../Assets/heart.png')}
                        style={{ width: 30, height: 30, marginRight: 30 }}
                        />
                </TouchableOpacity>
                <TouchableOpacity onPress={OpenChat}>
                    <Image
                        source={require('../Assets/chat.png')}
                        style={{ width: 30, height: 30 }}
                    />
                </TouchableOpacity>
            </View>

                        </View>
            {/* ................Components................ */}

            {/* <Story/> */}
            <Feed />

        </ScrollView>
    );
};


const styles = StyleSheet.create({});

export default Tobpbar;

