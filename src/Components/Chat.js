import { View, Text, TouchableOpacity, Image, ScrollView, TextInput, requireNativeComponent } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Chat = () => {
const navigation=useNavigation();

    return (
        <View>

            {/* .............................Name Arrow and VideoChat Section.......................... */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity style={{ marginLeft: 10 }} onPress={()=> navigation.navigate("Home") }>
                        <Image
                            source={require('../Assets/ArrowChat.png')}
                            style={{ height: 25, width: 25 }}
                        />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 10, color: 'black' }}>
                        MakwanaJigar15
                    </Text>
                    <TouchableOpacity>
                        <Image
                            source={require('../Assets/DropdownArrow.png')}
                            style={{ width: 10, height: 10 }}
                        />
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
                    <TouchableOpacity>
                        <Image
                            source={require('../Assets/VideoChat.png')}
                            style={{ width: 40, height: 40, marginRight: 10 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../Assets/AddNoteChat.png')}
                            style={{ width: 40, height: 40 }}
                        />
                    </TouchableOpacity>
                </View>

            </View>

            <ScrollView>

                {/* ................................Searchbar......................... */}
                <View>
                    <TextInput
                        placeholder='Search'
                        style={{ backgroundColor: '#D3D3D3', borderRadius: 10, alignItems: 'center', margin: 10, padding: 5 }}
                    />
                </View>

                {/* ................Notes Section............. */}
                <ScrollView horizontal={true} style={{ margin: 10 }}>
                    <TouchableOpacity>
                        <Image
                            source={require('../Assets/NotesProfile/images-removebg-preview.png')}
                            style={{ width: 60, height: 60, borderRadius: 50, borderColor: 'black', borderWidth: 1, marginRight: 5 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../Assets/NotesProfile/images-removebg-preview.png')}
                            style={{ width: 60, height: 60, borderRadius: 50, borderColor: 'black', borderWidth: 1, marginRight: 5 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../Assets/NotesProfile/images-removebg-preview.png')}
                            style={{ width: 60, height: 60, borderRadius: 50, borderColor: 'black', borderWidth: 1, marginRight: 5 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../Assets/NotesProfile/images-removebg-preview.png')}
                            style={{ width: 60, height: 60, borderRadius: 50, borderColor: 'black', borderWidth: 1, marginRight: 5 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../Assets/NotesProfile/images-removebg-preview.png')}
                            style={{ width: 60, height: 60, borderRadius: 50, borderColor: 'black', borderWidth: 1, marginRight: 5 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../Assets/NotesProfile/images-removebg-preview.png')}
                            style={{ width: 60, height: 60, borderRadius: 50, borderColor: 'black', borderWidth: 1, marginRight: 5 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../Assets/NotesProfile/images-removebg-preview.png')}
                            style={{ width: 60, height: 60, borderRadius: 50, borderColor: 'black', borderWidth: 1, marginRight: 5 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../Assets/NotesProfile/images-removebg-preview.png')}
                            style={{ width: 60, height: 60, borderRadius: 50, borderColor: 'black', borderWidth: 1, marginRight: 5 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../Assets/NotesProfile/images-removebg-preview.png')}
                            style={{ width: 60, height: 60, borderRadius: 50, borderColor: 'black', borderWidth: 1, marginRight: 5 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../Assets/NotesProfile/images-removebg-preview.png')}
                            style={{ width: 60, height: 60, borderRadius: 50, borderColor: 'black', borderWidth: 1, marginRight: 5 }}
                        />
                    </TouchableOpacity>
                </ScrollView>

                {/* ..............Channel Message and Request Button.................. */}

                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', marginTop: 12 }}>
                    <TouchableOpacity style={{ backgroundColor: 'white', width: 110, height: 30, borderRadius: 10 }}>
                        <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>
                            Message
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: 'white', width: 110, height: 30, borderRadius: 10 }}>
                        <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>
                            Channels
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: 'white', width: 110, height: 30, borderRadius: 10 }}>
                        <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>
                            Requests
                        </Text>
                    </TouchableOpacity>
                </View>


                {/* .......................Chats Messages Section................... */}


                <View style={{ marginLeft: 10, marginTop: 20,marginBottom:55 }}>
                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginRight: 20, marginBottom: 10 }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                source={require('../Assets/ChatMessages/pexels-photo-2379005-removebg-preview.png')}
                                style={{ width: 60, height: 60, borderRadius: 50, borderColor: 'black', borderWidth: 1, marginRight: 5 }}
                            />
                            <Text style={{ fontWeight: 'bold' }}>
                                James_102
                            </Text>
                        </View>
                        <TouchableOpacity>
                            <Image
                                source={require('../Assets/ChatCamera.png')}
                                style={{ width: 25, height: 25 }}
                            />
                        </TouchableOpacity>

                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginRight: 20, marginBottom: 10 }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                source={require('../Assets/ChatMessages/pexels-photo-2379005-removebg-preview.png')}
                                style={{ width: 60, height: 60, borderRadius: 50, borderColor: 'black', borderWidth: 1, marginRight: 5 }}
                            />
                            <Text style={{ fontWeight: 'bold' }}>
                                James_102
                            </Text>
                        </View>
                        <TouchableOpacity>
                            <Image
                                source={require('../Assets/ChatCamera.png')}
                                style={{ width: 25, height: 25 }}
                            />
                        </TouchableOpacity>

                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginRight: 20, marginBottom: 10 }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                source={require('../Assets/ChatMessages/pexels-photo-2379005-removebg-preview.png')}
                                style={{ width: 60, height: 60, borderRadius: 50, borderColor: 'black', borderWidth: 1, marginRight: 5 }}
                            />
                            <Text style={{ fontWeight: 'bold' }}>
                                James_102
                            </Text>
                        </View>
                        <TouchableOpacity>
                            <Image
                                source={require('../Assets/ChatCamera.png')}
                                style={{ width: 25, height: 25 }}
                            />
                        </TouchableOpacity>

                    </TouchableOpacity>


                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginRight: 20, marginBottom: 10 }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                source={require('../Assets/ChatMessages/pexels-photo-2379005-removebg-preview.png')}
                                style={{ width: 60, height: 60, borderRadius: 50, borderColor: 'black', borderWidth: 1, marginRight: 5 }}
                            />
                            <Text style={{ fontWeight: 'bold' }}>
                                James_102
                            </Text>
                        </View>
                        <TouchableOpacity>
                            <Image
                                source={require('../Assets/ChatCamera.png')}
                                style={{ width: 25, height: 25 }}
                            />
                        </TouchableOpacity>

                    </TouchableOpacity>


                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginRight: 20, marginBottom: 10 }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                source={require('../Assets/ChatMessages/pexels-photo-2379005-removebg-preview.png')}
                                style={{ width: 60, height: 60, borderRadius: 50, borderColor: 'black', borderWidth: 1, marginRight: 5 }}
                            />
                            <Text style={{ fontWeight: 'bold' }}>
                                James_102
                            </Text>
                        </View>
                        <TouchableOpacity>
                            <Image
                                source={require('../Assets/ChatCamera.png')}
                                style={{ width: 25, height: 25 }}
                            />
                        </TouchableOpacity>

                    </TouchableOpacity>


                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginRight: 20, marginBottom: 10 }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                source={require('../Assets/ChatMessages/pexels-photo-2379005-removebg-preview.png')}
                                style={{ width: 60, height: 60, borderRadius: 50, borderColor: 'black', borderWidth: 1, marginRight: 5 }}
                            />
                            <Text style={{ fontWeight: 'bold' }}>
                                James_102
                            </Text>
                        </View>
                        <TouchableOpacity>
                            <Image
                                source={require('../Assets/ChatCamera.png')}
                                style={{ width: 25, height: 25 }}
                            />
                        </TouchableOpacity>

                    </TouchableOpacity>


                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginRight: 20, marginBottom: 10 }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                source={require('../Assets/ChatMessages/pexels-photo-2379005-removebg-preview.png')}
                                style={{ width: 60, height: 60, borderRadius: 50, borderColor: 'black', borderWidth: 1, marginRight: 5 }}
                            />
                            <Text style={{ fontWeight: 'bold' }}>
                                James_102
                            </Text>
                        </View>
                        <TouchableOpacity>
                            <Image
                                source={require('../Assets/ChatCamera.png')}
                                style={{ width: 25, height: 25 }}
                            />
                        </TouchableOpacity>

                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginRight: 20, marginBottom: 10 }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                source={require('../Assets/ChatMessages/pexels-photo-2379005-removebg-preview.png')}
                                style={{ width: 60, height: 60, borderRadius: 50, borderColor: 'black', borderWidth: 1, marginRight: 5 }}
                            />
                            <Text style={{ fontWeight: 'bold' }}>
                                James_102
                            </Text>
                        </View>
                        <TouchableOpacity>
                            <Image
                                source={require('../Assets/ChatCamera.png')}
                                style={{ width: 25, height: 25 }}
                            />
                        </TouchableOpacity>

                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginRight: 20, marginBottom: 10 }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                source={require('../Assets/ChatMessages/pexels-photo-2379005-removebg-preview.png')}
                                style={{ width: 60, height: 60, borderRadius: 50, borderColor: 'black', borderWidth: 1, marginRight: 5 }}
                            />
                            <Text style={{ fontWeight: 'bold' }}>
                                James_102
                            </Text>
                        </View>
                        <TouchableOpacity>
                            <Image
                                source={require('../Assets/ChatCamera.png')}
                                style={{ width: 25, height: 25 }}
                            />
                        </TouchableOpacity>

                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginRight: 20, marginBottom: 10 }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                source={require('../Assets/ChatMessages/pexels-photo-2379005-removebg-preview.png')}
                                style={{ width: 60, height: 60, borderRadius: 50, borderColor: 'black', borderWidth: 1, marginRight: 5 }}
                            />
                            <Text style={{ fontWeight: 'bold' }}>
                                James_102
                            </Text>
                        </View>
                        <TouchableOpacity>
                            <Image
                                source={require('../Assets/ChatCamera.png')}
                                style={{ width: 25, height: 25 }}
                            />
                        </TouchableOpacity>

                    </TouchableOpacity>


                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginRight: 20, marginBottom: 10 }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                source={require('../Assets/ChatMessages/pexels-photo-2379005-removebg-preview.png')}
                                style={{ width: 60, height: 60, borderRadius: 50, borderColor: 'black', borderWidth: 1, marginRight: 5 }}
                            />
                            <Text style={{ fontWeight: 'bold' }}>
                                James_102
                            </Text>
                        </View>
                        <TouchableOpacity>
                            <Image
                                source={require('../Assets/ChatCamera.png')}
                                style={{ width: 25, height: 25 }}
                            />
                        </TouchableOpacity>

                    </TouchableOpacity>


                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginRight: 20, marginBottom: 10 }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                source={require('../Assets/ChatMessages/pexels-photo-2379005-removebg-preview.png')}
                                style={{ width: 60, height: 60, borderRadius: 50, borderColor: 'black', borderWidth: 1, marginRight: 5 }}
                            />
                            <Text style={{ fontWeight: 'bold' }}>
                                James_102
                            </Text>
                        </View>
                        <TouchableOpacity>
                            <Image
                                source={require('../Assets/ChatCamera.png')}
                                style={{ width: 25, height: 25 }}
                            />
                        </TouchableOpacity>

                    </TouchableOpacity>


                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginRight: 20, marginBottom: 10 }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                source={require('../Assets/ChatMessages/pexels-photo-2379005-removebg-preview.png')}
                                style={{ width: 60, height: 60, borderRadius: 50, borderColor: 'black', borderWidth: 1, marginRight: 5 }}
                            />
                            <Text style={{ fontWeight: 'bold' }}>
                                James_102
                            </Text>
                        </View>
                        <TouchableOpacity>
                            <Image
                                source={require('../Assets/ChatCamera.png')}
                                style={{ width: 25, height: 25 }}
                            />
                        </TouchableOpacity>

                    </TouchableOpacity>


                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginRight: 20, marginBottom: 10 }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                source={require('../Assets/ChatMessages/pexels-photo-2379005-removebg-preview.png')}
                                style={{ width: 60, height: 60, borderRadius: 50, borderColor: 'black', borderWidth: 1, marginRight: 5 }}
                            />
                            <Text style={{ fontWeight: 'bold' }}>
                                James_102
                            </Text>
                        </View>
                        <TouchableOpacity>
                            <Image
                                source={require('../Assets/ChatCamera.png')}
                                style={{ width: 25, height: 25 }}
                            />
                        </TouchableOpacity>

                    </TouchableOpacity>

                </View>


            </ScrollView>

        </View>
    )
}

export default Chat