import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Posts from './Posts'
import Story from './Story'

const Feed = () => {
    return (
        <ScrollView style={{margin:5,marginBottom:55}}>
           <Story />
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <TouchableOpacity>
                <Image 
                source={require('../Assets/Insta-Story.png')}
                style={{width:50,height:50}}
                />
            </TouchableOpacity>
            <Text style={{fontSize:20,marginLeft:-100}}>
                Cristiano_Ronaldo
            </Text>
            <TouchableOpacity>
                <Image 
                source={require('../Assets/FeedDot.png')}
                style={{width:50,height:50}}
                />
            </TouchableOpacity>
        </View>
        
        <View>
            <Image 
            source={require('../Assets/NewRonaldo.jpg')}
            style={{alignItems:'center',justifyContent:'center',width:"100%",objectFit:'contain',height:350}}
            />
        </View>

        <View style={{flexDirection:'row',margin:10}}>
            <TouchableOpacity >
                <Image 
                source={require('../Assets/heart.png')}
                style={{width:30,height:30,marginRight:20}}
                />
                </TouchableOpacity>

                <TouchableOpacity>

                 <Image 
                source={require('../Assets/chat.png')}
                style={{width:30,height:30,marginRight:20}}
                />
                </TouchableOpacity>
                <TouchableOpacity>

                 <Image 
                source={require('../Assets/Send.png')}
                style={{width:30,height:30,marginRight:20}}
                />
                </TouchableOpacity>
        </View>

        <View>
            <Text>
                123 M Likes
            </Text>
            <Text>
                Cristiano_Ronaldo My name is Cristiano ronaldo.I'm a football player.
            </Text>
            <Text>
                View all 250k comments.
            </Text>
            <Text>
                50 minutes ago.
            </Text>
        </View>

        {/* // ..................second ......................... */}

        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <TouchableOpacity>
                <Image 
                source={require('../Assets/Insta-Story.png')}
                style={{width:50,height:50}}
                />
            </TouchableOpacity>
            <Text style={{fontSize:20,marginLeft:-100}}>
                Cristiano_Ronaldo
            </Text>
            <TouchableOpacity>
                <Image 
                source={require('../Assets/FeedDot.png')}
                style={{width:50,height:50}}
                />
            </TouchableOpacity>
        </View>
        
        <View>
            <Image 
            source={require('../Assets/NewRonaldo.jpg')}
            style={{alignItems:'center',justifyContent:'center',width:"100%",objectFit:'contain',height:350}}
            />
        </View>

        <View style={{flexDirection:'row',margin:10}}>
            <TouchableOpacity >
                <Image 
                source={require('../Assets/heart.png')}
                style={{width:30,height:30,marginRight:20}}
                />
                </TouchableOpacity>

                <TouchableOpacity>

                 <Image 
                source={require('../Assets/chat.png')}
                style={{width:30,height:30,marginRight:20}}
                />
                </TouchableOpacity>
                <TouchableOpacity>

                 <Image 
                source={require('../Assets/Send.png')}
                style={{width:30,height:30,marginRight:20}}
                />
                </TouchableOpacity>
        </View>

        <View>
            <Text>
                123 M Likes
            </Text>
            <Text>
                Cristiano_Ronaldo My name is Cristiano ronaldo.I'm a football player.
            </Text>
            <Text>
                View all 250k comments.
            </Text>
            <Text>
                50 minutes ago.
            </Text>
        </View>


                {/* ............third............... */}

                     {/* // ..................second ......................... */}

        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <TouchableOpacity>
                <Image 
                source={require('../Assets/Insta-Story.png')}
                style={{width:50,height:50}}
                />
            </TouchableOpacity>
            <Text style={{fontSize:20,marginLeft:-100}}>
                Cristiano_Ronaldo
            </Text>
            <TouchableOpacity>
                <Image 
                source={require('../Assets/FeedDot.png')}
                style={{width:50,height:50}}
                />
            </TouchableOpacity>
        </View>
        
        <View>
            <Image 
            source={require('../Assets/NewRonaldo.jpg')}
            style={{alignItems:'center',justifyContent:'center',width:"100%",objectFit:'contain',height:350}}
            />
        </View>

        <View style={{flexDirection:'row',margin:10}}>
            <TouchableOpacity >
                <Image 
                source={require('../Assets/heart.png')}
                style={{width:30,height:30,marginRight:20}}
                />
                </TouchableOpacity>

                <TouchableOpacity>

                 <Image 
                source={require('../Assets/chat.png')}
                style={{width:30,height:30,marginRight:20}}
                />
                </TouchableOpacity>
                <TouchableOpacity>

                 <Image 
                source={require('../Assets/Send.png')}
                style={{width:30,height:30,marginRight:20}}
                />
                </TouchableOpacity>
        </View>

        <View>
            <Text>
                123 M Likes
            </Text>
            <Text>
                Cristiano_Ronaldo My name is Cristiano ronaldo.I'm a football player.
            </Text>
            <Text>
                View all 250k comments.
            </Text>
            <Text>
                50 minutes ago.
            </Text>
        </View>

        {/* ...................Fourth........................ */}


         {/* // ..................second ......................... */}

         <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <TouchableOpacity>
                <Image 
                source={require('../Assets/Insta-Story.png')}
                style={{width:50,height:50}}
                />
            </TouchableOpacity>
            <Text style={{fontSize:20,marginLeft:-100}}>
                Cristiano_Ronaldo
            </Text>
            <TouchableOpacity>
                <Image 
                source={require('../Assets/FeedDot.png')}
                style={{width:50,height:50}}
                />
            </TouchableOpacity>
        </View>
        
        <View>
            <Image 
            source={require('../Assets/NewRonaldo.jpg')}
            style={{alignItems:'center',justifyContent:'center',width:"100%",objectFit:'contain',height:350}}
            />
        </View>

        <View style={{flexDirection:'row',margin:10}}>
            <TouchableOpacity >
                <Image 
                source={require('../Assets/heart.png')}
                style={{width:30,height:30,marginRight:20}}
                />
                </TouchableOpacity>

                <TouchableOpacity>

                 <Image 
                source={require('../Assets/chat.png')}
                style={{width:30,height:30,marginRight:20}}
                />
                </TouchableOpacity>
                <TouchableOpacity>

                 <Image 
                source={require('../Assets/Send.png')}
                style={{width:30,height:30,marginRight:20}}
                />
                </TouchableOpacity>
        </View>

        <View>
            <Text>
                123 M Likes
            </Text>
            <Text>
                Cristiano_Ronaldo My name is Cristiano ronaldo.I'm a football player.
            </Text>
            <Text>
                View all 250k comments.
            </Text>
            <Text>
                50 minutes ago.
            </Text>
        </View>

        {/* ........................Fifth............................ */}


         {/* // ..................second ......................... */}

         <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <TouchableOpacity>
                <Image 
                source={require('../Assets/Insta-Story.png')}
                style={{width:50,height:50}}
                />
            </TouchableOpacity>
            <Text style={{fontSize:20,marginLeft:-100}}>
                Cristiano_Ronaldo
            </Text>
            <TouchableOpacity>
                <Image 
                source={require('../Assets/FeedDot.png')}
                style={{width:50,height:50}}
                />
            </TouchableOpacity>
        </View>
        
        <View>
            <Image 
            source={require('../Assets/NewRonaldo.jpg')}
            style={{alignItems:'center',justifyContent:'center',width:"100%",objectFit:'contain',height:350}}
            />
        </View>

        <View style={{flexDirection:'row',margin:10}}>
            <TouchableOpacity >
                <Image 
                source={require('../Assets/heart.png')}
                style={{width:30,height:30,marginRight:20}}
                />
                </TouchableOpacity>

                <TouchableOpacity>

                 <Image 
                source={require('../Assets/chat.png')}
                style={{width:30,height:30,marginRight:20}}
                />
                </TouchableOpacity>
                <TouchableOpacity>

                 <Image 
                source={require('../Assets/Send.png')}
                style={{width:30,height:30,marginRight:20}}
                />
                </TouchableOpacity>
        </View>

        <View>
            <Text>
                123 M Likes
            </Text>
            <Text>
                Cristiano_Ronaldo My name is Cristiano ronaldo.I'm a football player.
            </Text>
            <Text>
                View all 250k comments.
            </Text>
            <Text>
                50 minutes ago.
            </Text>
        </View>
        </ScrollView>      
    )
}

export default Feed