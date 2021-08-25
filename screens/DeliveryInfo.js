import React, {useState} from "react";
import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Image,
} from "react-native";

import { icons, SIZES, COLORS, FONTS } from '../constants'

const DeliveryInfo = ({ navigation }) => {
    const [number, setNumber] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    return(
        <View style={styles.container}>
            <SafeAreaView style={{ flexDirection: 'row', top:20, width:"100%", height:45}}>
                
                {/* Restaurant logo */}
               
                <Image
                        source={icons.logo}
                        resizeMode="contain"
                        style={{
                            flex: 1,
                            height: 45,
                            alignSelf:'center',
                            width: 120,
                        }}
                    />    
               

                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingRight: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                    onPress={() => navigation.navigate("Cart")}
                >
                <Image
                    source={icons.basket}
                    resizeMode="contain"
                    style={{
                        width: 25,
                        height: 25
                    }}
                />
                </TouchableOpacity>
            </SafeAreaView>
            <View style={{flexDirection:"row", top:30, padding:SIZES.padding*2}}>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: SIZES.padding * 2,
                        justifyContent: 'center',
                        
                    }}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        source={icons.back}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 25
                        }}
                    />
                </TouchableOpacity>
                <Text style={{...FONTS.body1, left:10}}>Delivery Info</Text>
            </View>
            <View style={{alignItems:"center", padding:SIZES.padding*2}}>
                <Text style={{alignSelf:"flex-start",left:20, top:30}}>Number</Text>
                <TextInput style={{...FONTS.body3, 
                            color:COLORS.black,
                            height:40,
                            width:"90%",
                            top:40,
                            textAlign:"left",
                            textAlignVertical:"center",
                            backgroundColor:COLORS.white,
                            borderRadius:10                                                                                                             
                            }} 
                            placeholder="Enter the address number "
                            onChangeText={number => setNumber(number)}
                            defaultValue={number}
                            
                            />
                <Text style={{alignSelf:"flex-start",left:20, top:50}}>Street</Text>
                <TextInput style={{...FONTS.body3, 
                            color:COLORS.black,
                            height:40,
                            width:"90%",
                            top:60,
                            textAlign:"left",
                            textAlignVertical:"center",
                            backgroundColor:COLORS.white, 
                            borderRadius:10                                                                                                            
                            }} 
                            placeholder="Enter the street "
                            onChangeText={street => setStreet(street)}
                            defaultValue={street}
                            /> 
                <Text style={{alignSelf:"flex-start",left:20, top:70}}>City</Text>
                <TextInput style={{...FONTS.body3, 
                            color:COLORS.black,
                            height:40,
                            width:"90%",
                            top:80,
                            textAlign:"left",
                            textAlignVertical:"center",
                            backgroundColor:COLORS.white,
                            borderRadius:10                                                                                                             
                            }} 
                            placeholder="Enter the City "
                            onChangeText={city => setCity(city)}
                            defaultValue={city}
                            />   
            </View>
            <View
                    style={{
                        height: 60,
                        padding: SIZES.padding * 2,
                        alignItems: 'center',
                        justifyContent: 'center',
                        top:280
                        }}
                >
                    <TouchableOpacity
                        style={{
                            width: "90%",
                            height:45,
                            padding: SIZES.padding,
                            backgroundColor: COLORS.primary,
                            justifyContent:"center",
                            alignItems: "center",
                            borderRadius: SIZES.radius,
                            ...styles.shadow
                            }}
                        onPress={() => navigation.navigate("Profile")}
                >
                    <Text style={{ color: COLORS.white, ...FONTS.h4 }}>Save Changes</Text>
                    </TouchableOpacity>
                </View>                    
        </View>
    )
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 5,
    }
})

export default DeliveryInfo;