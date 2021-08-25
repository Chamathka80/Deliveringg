import React, {useState} from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Image,
    
} from "react-native";


import { icons, SIZES, COLORS, FONTS } from '../constants'

const Login= ({ navigation }) => {
    const [text, setText] = useState("");
    
    return(
        <View style={styles.container}>
            <View style={{
                justifyContent:"center",
                alignItems:"center"
                        }}
            >
                    <Image source={icons.myCurve}
                        resizeMode="contain"
                        style={{
                            width:400,
                            height:380,
                            
                            
                            }} 
                    />
                    <Image source={icons.logo}
                        resizeMode="contain"
                        style={{
                            width:348,
                            height:130,
                            marginTop:-310
                            }} 
                    />
                    <Text style={{ ...FONTS.body3, left:-115, top:60, fontWeight:'bold'}}>Let's Order Food.</Text>
                    <Text style={{ ...FONTS.body4, left:-35, top:60}}>Enter your mobile number to login or register</Text>
                    <Image source={icons.loginBottom}
                    resizeMode="contain"
                    style={{
                        width:393,
                        height:220,
                        top:334
                    }}

                />
                <View style={{
                    flexDirection:"row",
                    alignItems: 'center',
                    justifyContent: 'center'
                    }}>
                    <View
                        style={{
                            backgroundColor:COLORS.white, 
                            height:45,
                            padding: SIZES.padding * 2,
                            alignItems: "center",
                            justifyContent: "center",
                            top:-150,
                            left:-5,
                            borderTopLeftRadius:10,
                            borderBottomLeftRadius:10
                        }}
                    >
                        <View style={{flexDirection:"row"}}>       
                        <Image
                            source={icons.flag}
                            resizeMode="contain"
                            style={{
                                width:30,
                                height:30
                            }}
                        />
                        <Image
                            source={icons.dropdownArrow}
                            resizeMode="contain"
                            style={{
                                width:10,
                                height:5,
                                left:10,
                                top:14
                            }}
                        />
                        </View>

                    </View>
                    <View
                        style={{
                            flexDirection:"row",
                            backgroundColor:COLORS.white, 
                            height:45,
                            width:270,
                            padding: SIZES.padding * 2,
                            alignItems: 'center',
                            justifyContent: 'center',
                            top:-150,
                            borderTopRightRadius:10,
                            borderBottomRightRadius:10
                        }}
                    >    
                        <Text style={{
                            ...FONTS.body3, 
                            textAlign:"center", 
                            textAlignVertical:"center",
                            left:-15
                            }}
                        >+94</Text>    
                        <TextInput style={{...FONTS.body3, 
                            color:COLORS.black,
                            height:80,
                            textAlign:"left",
                            textAlignVertical:"center",
                            left:-10
                                                     
                            }} 
                            placeholder="Enter your mobile number "
                            onChangeText={text => setText(text)}
                            defaultValue={text}
                            keyboardType="numeric"
                            />
                    </View>                 
                </View>
                    
            </View> 
                <View
                    style={{
                        height: 60,
                        padding: SIZES.padding * 2,
                        alignItems: 'center',
                        justifyContent: 'center',
                        top:-100
                       

                        }}
                >
                    <TouchableOpacity
                        style={{
                            width: 151,
                            height:45,
                            padding: SIZES.padding,
                            backgroundColor: COLORS.primary,
                            justifyContent:"center",
                            alignItems: "center",
                            borderRadius: SIZES.radius,
                            ...styles.shadow
                            }}
                        onPress={() => navigation.navigate("OTP")}
                >
                    <Text style={{ color: COLORS.white, ...FONTS.body2 }}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={{flexDirection:"row", left:25, top:-70}}>
                    <Text style={{...FONTS.body5, color:COLORS.darkgray}}>Don't have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <Text style={{...FONTS.body5, fontWeight:"bold"}}>                    
                    Create Account
                   </Text>
                   </TouchableOpacity>
                </View>
        </View>
    
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F3F3F3"
        
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
export default Login
