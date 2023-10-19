import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import Posts from './Posts';

const Profile = () => {
    return (
        <View>



        <View style={{justifyContent:'space-between',flexDirection:'row',marginTop:10}}>
            <TouchableOpacity style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
                <Image 
                source={require('../Assets/ProfileIMGs/images-removebg-preview.png')}
                style={{width:20,height:30,marginRight:8,marginLeft:10}}
                />
                <Text style={{fontSize:20,fontWeight:'bold'}}>
                    MakwanaJigar15
                </Text>
                <TouchableOpacity>
                    <Image 
                    source={require('../Assets/DropdownArrow.png')}
                    style={{width:10,height:10,marginLeft:5}}
                    />
                </TouchableOpacity>
            </TouchableOpacity>
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity>
                    <Image 
                    source={require('../Assets/Add.png')}
                    style={{width:30,height:30,marginRight:8}}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{marginRight:10}}>
                    <Image 
                    source={require('../Assets/ProfileIMGs/ProfileMenu.png')}
                    style={{width:30,height:30,}}
                    />
                </TouchableOpacity>
            </View>
        </View>


            {/* ...................FOLLOWING ,FOLLOWER AND POSTS DETAILS............. */}

            <ScrollView style={{marginTop:20}}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    
                    <TouchableOpacity style={{marginLeft:10}}>
                        <Image 
                        source={require('../Assets/ChatMessages/pexels-photo-2379005-removebg-preview.png')}
                        style={{width:80,height:80,borderRadius:50,borderColor:"black",borderWidth:1}}
                        />
                        <Text style={{fontWeight:'bold',fontSize:15}}>
                            JigarMakwana15
                        </Text>
                    </TouchableOpacity>

                    <View style={{flexDirection:'row',marginLeft:20}}>

                        <View style={{marginRight:30}}>
                        <Text style={{fontSize:20,fontWeight:'bold',textAlign:'center',color:'black'}}>
                            46
                        </Text>
                        <Text style={{color:'black'}}>
                            Posts
                        </Text>
                        </View>

                        <View style={{marginRight:30}}>
                        <Text style={{fontSize:20,fontWeight:'bold',textAlign:'center',color:'black'}}>
                            351
                        </Text>
                        <Text style={{color:'black'}}>
                            Followers
                        </Text>
                        </View>

                        <View>
                        <Text style={{fontSize:20,fontWeight:'bold',textAlign:'center',color:'black'}}>
                            578
                        </Text>
                        <Text style={{color:'black'}}>
                            Following
                        </Text>
                        </View>

                    </View>

                </View>

                {/* ...................BIO SECTIONS................................... */}

                    <View style={{width:380}}>
                        <Text style={{textTransform:'capitalize',marginLeft:10,fontWeight:400,color:'black'}}>
                            PLAYING FOOTBALL IS VERY SIMPLE,BUT PLAING SIMPLE FOOTBALL IS THE HARDEST THING.
                        </Text>
                    </View>

                {/* .........................EDIT PROFILE & SHARE PROFILE BUTTON................ */}

                <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:"5%"}}>
                    <TouchableOpacity style={{backgroundColor: '#D3D3D3',width:150,height:30,borderRadius:8}}>
                        <Text style={{textAlign:'center',padding:5,fontWeight:'bold'}}>
                            Edit Profile
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor: '#D3D3D3',width:150,height:30,borderRadius:8}}>
                        <Text style={{textAlign:'center',padding:5,fontWeight:'bold'}}>
                            Share Profile
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor: '#D3D3D3',width:30,height:30,borderRadius:8}}>
                       <Image 
                       source={require('../Assets/ProfileIMGs/AddUserIMG.png')}
                       style={{width:25,height:25,margin:3}}
                       />
                    </TouchableOpacity>
                </View>
                
                {/* ...................Story Highlights Sections............... */}

                <View style={{marginTop:15}}>
                    
                    <View style={{marginLeft:10}}>
                    <Text style={{fontWeight:'bold',color:'black'}}>
                        Story highlights
                    </Text>
                    <Text style={{color:'black'}}>
                       Keep your favorite stories on your profile
                    </Text>
                    </View>

                    <ScrollView horizontal={true}>
                        <View style={{gap:8,flexDirection:'row'}}>

                       
                        <TouchableOpacity>
                            <Image 
                            source={require('../Assets/ProfileIMGs/story.png')}
                            style={{width:80,height:80}}
                            />
                            <Text style={{textAlign:'center',fontSize:15,fontWeight:'bold',color:'black'}}>
                                New
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <Image 
                            source={require('../Assets/ProfileIMGs/StoryH-1.jpeg')}
                            style={{width:80,height:80,borderRadius:50}}
                            />
                            <Text style={{color:'black',textAlign:'center',fontWeight:'bold'}}>
                                Style
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image 
                            source={require('../Assets/ProfileIMGs/StoryH-2.jpeg')}
                            style={{width:80,height:80,borderRadius:50}}
                            />
                             <Text style={{color:'black',textAlign:'center',fontWeight:'bold'}}>
                                View
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image 
                            source={require('../Assets/ProfileIMGs/StoryH-3.jpeg')}
                            style={{width:80,height:80,borderRadius:50}}
                            />
                             <Text style={{color:'black',textAlign:'center',fontWeight:'bold'}}>
                                Festival
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image 
                            source={require('../Assets/ProfileIMGs/StoryH-4.jpeg')}
                            style={{width:80,height:80,borderRadius:50}}
                            />
                             <Text style={{color:'black',textAlign:'center',fontWeight:'bold'}}>
                                Pooja
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image 
                            source={require('../Assets/ProfileIMGs/StoryH-5.jpeg')}
                            style={{width:80,height:80,borderRadius:50}}
                            />
                             <Text style={{color:'black',textAlign:'center',fontWeight:'bold'}}>
                                Food
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image 
                            source={require('../Assets/ProfileIMGs/StoryH-6.jpeg')}
                            style={{width:80,height:80,borderRadius:50}}
                            />
                             <Text style={{color:'black',textAlign:'center',fontWeight:'bold'}}>
                                Ride
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image 
                            source={require('../Assets/ProfileIMGs/StoryH-7.jpeg')}
                            style={{width:80,height:80,borderRadius:50}}
                            />
                             <Text style={{color:'black',textAlign:'center',fontWeight:'bold'}}>
                                Travel
                            </Text>
                        </TouchableOpacity>
                        </View>
                    </ScrollView>

                </View>


                <Posts />
            </ScrollView>

          

    </View>
    );
}

export default Profile;
