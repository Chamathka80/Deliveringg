import React from "react";
import {
    
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Image
    
} from "react-native";
import { color } from "react-native-elements/dist/helpers";

import { icons, SIZES, COLORS, FONTS } from '../constants'

const details = ({ navigation }) => {
    
    return(
        <View style={styles.container}>
            <TouchableOpacity
                    style={{
                        width:25,
                        top:20                                                
                    }}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        source={icons.back}
                        resizeMode="contain"
                        style={{
                            width: 25,
                            height: 25
                        }}
                    />
                </TouchableOpacity>
            
            <View style={{marginTop:40}}>
            <Text style={{...FONTS.body2, fontWeight:'bold', marginTop:15}}>Enter your name & email address</Text>
            <Text style={{...FONTS.body3, marginTop:20, color:COLORS.black}}>Will use this email address as the primary email address for communication</Text>

            </View>
            <View style={{flexDirection:"row", top:50}}>
                <TextInput style={{
                    width:'46%',
                    borderBottomWidth:1,
                    ...FONTS.body3,
                    textAlignVertical:'bottom',                    
                }}
                    placeholder='First name' 
                />

                <TextInput style={{
                    width:'46%',
                    borderBottomWidth:1,
                    left:'50%',
                    ...FONTS.body3,
                    textAlignVertical:'bottom'
                }}
                    placeholder='Second name'     
                />
            </View>
            <View style={{top:80}}>
                <Text style={{...FONTS.body3}}>Email</Text>
                <TextInput style={{
                    width:'100%',
                    borderBottomWidth:1,
                    top:-10,
                    ...FONTS.body3,
                    textAlignVertical:'bottom'
                }} 
                keyboardType="email-address" 
                
                />
            </View>
            <TouchableOpacity
                style={{
                    width:'100%', 
                    height:40, 
                    top:130,
                    backgroundColor:COLORS.black,
                    justifyContent:'center',
                    borderRadius:5,
                    ...styles.shadow
                    }}
                onPress={() => navigation.navigate("Home")}
            >
            
            <Text style={{...FONTS.body2, textAlign:'center', color:COLORS.white}}>Next</Text>
            
            </TouchableOpacity>
            
            
        </View>           
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F3F3F3",
        padding:SIZES.padding*2,
        
        
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 10,
    }
    
})
export default details
