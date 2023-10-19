import React from 'react';
import { View, TouchableOpacity, Image, ScrollView } from 'react-native';

const Posts = () => {
    return (
        <ScrollView>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                <TouchableOpacity style={{ margin: 20, alignSelf: 'center' }}>
                    <Image
                        source={require('../Assets/ProfileIMGs/PostSections.png')}
                        style={{ width: 25, height: 25 }}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{ margin: 20, alignSelf: 'center' }}>
                    <Image
                        source={require('../Assets/Reels.png')}
                        style={{ width: 30, height: 30 }}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{ margin: 20, alignSelf: 'center' }}>
                    <Image
                        source={require('../Assets/ProfileIMGs/UserTagIMG.png')}
                        style={{ width: 40, height: 40 }}
                    />
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row',flexWrap:'wrap', justifyContent:'space-around',gap:3, marginBottom: 50 }}>
                <View style={{flexDirection:'row',gap:5}}>
                    <TouchableOpacity style={{borderColor:'white',borderWidth:1,width:120,height:120}}>
                        <Image
                            source={require('../Assets/MyFeed/Post-1.jpg')}
                            style={{ width: 118, height: 118 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{borderColor:'white',borderWidth:1,width:120,height:120}}>
                        <Image
                            source={require('../Assets/MyFeed/Post-2jpg.jpeg')}
                            style={{ width: 118, height: 118 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{borderColor:'white',borderWidth:1,width:120,height:120}}>
                        <Image
                            source={require('../Assets/MyFeed/Post-3.jpg')}
                            style={{ width: 118, height: 118 }}
                        />
                    </TouchableOpacity >
                </View>

                <View style={{flexDirection:'row',gap:5}}>
                    <TouchableOpacity style={{borderColor:'white',borderWidth:1,width:120,height:120}}>
                        <Image
                            source={require('../Assets/MyFeed/Post-4.jpg')}
                            style={{ width: 118, height: 118 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{borderColor:'white',borderWidth:1,width:120,height:120}}>
                        <Image
                            source={require('../Assets/MyFeed/Post-5.jpg')}
                            style={{ width: 118, height: 118 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{borderColor:'white',borderWidth:1,width:120,height:120}}>
                        <Image
                            source={require('../Assets/MyFeed/Post-6.jpg')}
                            style={{ width: 118, height: 118 }}
                        />
                    </TouchableOpacity >
                </View>

                <View style={{flexDirection:'row',gap:5}}>
                    <TouchableOpacity style={{borderColor:'white',borderWidth:1,width:120,height:120}}>
                        <Image
                            source={require('../Assets/MyFeed/Post-7.jpg')}
                            style={{ width: 118, height: 118 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{borderColor:'white',borderWidth:1,width:120,height:120}}>
                        <Image
                            source={require('../Assets/MyFeed/Post-8.jpg')}
                            style={{ width: 118, height: 118 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{borderColor:'white',borderWidth:1,width:120,height:120}}>
                        <Image
                            source={require('../Assets/MyFeed/Post-9.jpg')}
                            style={{ width: 118, height: 118 }}
                        />
                    </TouchableOpacity >
                </View>

                <View style={{flexDirection:'row',gap:5}}>
                    <TouchableOpacity style={{borderColor:'white',borderWidth:1,width:120,height:120}}>
                        <Image
                            source={require('../Assets/MyFeed/Post-10.jpg')}
                            style={{ width: 118, height: 118 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{borderColor:'white',borderWidth:1,width:120,height:120}}>
                        <Image
                            source={require('../Assets/MyFeed/Post-11.jpg')}
                            style={{ width: 118, height: 118 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{borderColor:'white',borderWidth:1,width:120,height:120}}>
                        <Image
                            source={require('../Assets/MyFeed/Post-12.jpg')}
                            style={{ width: 118, height: 118 }}
                        />
                    </TouchableOpacity >
                </View>

                <View style={{flexDirection:'row',gap:5}}>
                    <TouchableOpacity style={{borderColor:'white',borderWidth:1,width:120,height:120}}>
                        <Image
                            source={require('../Assets/MyFeed/Post-13.jpg')}
                            style={{ width: 118, height: 118 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{borderColor:'white',borderWidth:1,width:120,height:120}}>
                        <Image
                            source={require('../Assets/MyFeed/Post-14.jpg')}
                            style={{ width: 118, height: 118 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{borderColor:'white',borderWidth:1,width:120,height:120}}>
                        <Image
                            source={require('../Assets/MyFeed/Post-15.jpg')}
                            style={{ width: 118, height: 118 }}
                        />
                    </TouchableOpacity >
                </View>

                <View style={{flexDirection:'row',gap:5}}>
                    <TouchableOpacity style={{borderColor:'white',borderWidth:1,width:120,height:120}}>
                        <Image
                            source={require('../Assets/MyFeed/Post-16.jpg')}
                            style={{ width: 118, height: 118 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{borderColor:'white',borderWidth:1,width:120,height:120}}>
                        <Image
                            source={require('../Assets/MyFeed/Post-17.jpg')}
                            style={{ width: 118, height: 118 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{borderColor:'white',borderWidth:1,width:120,height:120}}>
                        <Image
                            source={require('../Assets/MyFeed/Post-18.jpg')}
                            style={{ width: 118, height: 118 }}
                        />
                    </TouchableOpacity >
                </View>

                
            </View>
        </ScrollView>
    );
}

export default Posts;
