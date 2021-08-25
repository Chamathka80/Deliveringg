import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    
} from "react-native";


import { icons, SIZES, COLORS, FONTS } from '../constants'

const Profile = ({ navigation }) => {
    return (
    <View style={styles.container}>
        <View style={{height:229, backgroundColor: COLORS.primary, opacity:0.65}}/>
            <View style={{ flexDirection: 'row', height:50, top:-210}}>
                <Image
                    source={icons.avatar}
                        resizeMode="contain"
                        style={{
                            width:100,
                            height:100,
                            left:45,
                            top:45,
                            position:'absolute',
                            
                             
                        }}
                />
                <Text style={{ ...FONTS.h1,top:55, left:160}}>User001</Text>             
            </View>
                <Text style={{ ...FONTS.body2, marginTop:15, top:-190, left:160}}>5 Orders</Text>
        
        <View style={{ padding: SIZES.padding * 2 }}>
            <View style={{ flexDirection: 'row', top:-60}}>
                <TouchableOpacity
                            
                            onPress={() => navigation.navigate("CompletePage")}
                >
                <Text style={{...FONTS.body2, left:35}}>Edit Profile</Text>
                <Image
                    source={icons.arrow}
                        resizeMode="contain"
                        style={{
                            width:10,
                            height:16,
                            left:280,
                            top:-23
                            
                             
                        }}
                />
                </TouchableOpacity>
            </View>
            
            <View style={{ flexDirection: 'row', top:-30}}>
                <TouchableOpacity
                    
                    onPress={() => navigation.navigate("DeliveryInfo")}
                >
                <Text style={{...FONTS.body2, left:35}}>Edit Delivery Details</Text>
                <Image
                    source={icons.arrow}
                        resizeMode="contain"
                        style={{
                            width:10,
                            height:16,
                            left:280,
                            top:-23
                            
                             
                        }}
                />
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row'}}>
                <TouchableOpacity
                            
                            onPress={() => navigation.navigate("PreviousOrders")}
                >
                <Text style={{...FONTS.body2, left:35}}>Previous Orders</Text>
                <Image
                    source={icons.arrow}
                        resizeMode="contain"
                        style={{
                            width:10,
                            height:16,
                            left:280,
                            top:-23
                            
                             
                        }}
                />
                </TouchableOpacity>
            </View>                 
        </View>
        <View
            style={{
                height: 60,
                padding: SIZES.padding * 2,
                alignItems: 'center',
                justifyContent: 'center',
                }}
        >
            <Text style={{...FONTS.body5, 
                left:35, 
                color:COLORS.darkgray, 
                alignSelf:"flex-start",
                top:10
                
                }}
            >
                App Version 1.0.2
            </Text>
             <TouchableOpacity
                style={{
                    width: SIZES.width * 0.75,
                    padding: SIZES.padding,
                    backgroundColor: COLORS.primary,
                    alignItems: 'center',
                    borderRadius: SIZES.radius,
                    top:60,
                    ...styles.shadow
                    }}
                    onPress={() => navigation.navigate("Login")}
                >
                <Text style={{ color: COLORS.white, ...FONTS.h3 }}>LOGOUT</Text>
            </TouchableOpacity>
        </View>
    </View>
    );
    
};

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

export default Profile;