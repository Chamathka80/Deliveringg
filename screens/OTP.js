import React, {useState, useEffect, useRef} from "react";
import {
    
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Image,
    KeyboardAvoidingView
} from "react-native";
import { color } from "react-native-elements/dist/helpers";

import { icons, SIZES, COLORS, FONTS } from '../constants'

const OTP = ({ navigation }) => {
    let textInput = useRef(null)
    const lengthInput = 4;
    const [internalVal, setInternalVal] = useState("")
    const onChangeText = (val) => {
        setInternalVal(val)
    }

    useEffect(() => {
        textInput.focus()
    },[])
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
            <Text style={{...FONTS.body2, fontWeight:'bold', marginTop:15}}>Hey there,</Text>
            <Text style={{...FONTS.body2, fontWeight:'bold', marginTop:5}}>Enter the 4 digit code sent to your</Text>
            <Text style={{...FONTS.body2, fontWeight:'bold', marginTop:-5}}>mobile number</Text>
            <Text style={{...FONTS.h3, color:'#00DD00', marginTop:20}}>+94777538374</Text>
            </View>
            <View>
            <KeyboardAvoidingView
                keyboardVerticalOffset={50}
                behavior={'padding'}
                style={styles.containerAvoidingView}
            >
            <TextInput
                ref = {(input) => textInput = input }
                onChangeText={onChangeText}
                style={{width:0 ,height:0}}
                value={internalVal}
                maxLength={lengthInput}
                returnKeyType="done"
                keyboardType="numeric"/>
            <View style={styles.containerInput}>
                {
                    Array(lengthInput).fill().map((data, index) =>(
                        <View
                            key = {index} 
                            style={[styles.cellView,
                            {
                                borderBottomColor: index === internalVal.length ? '#00993D': '#898C95'
                            }
                            ]}>
                            <Text 
                                style={styles.cellText}
                                onPress={() => textInput.focus()}
                            >
                                {internalVal && internalVal.length > 0 ? internalVal[index] : ""}
                            </Text>
                </View>    
                    ))
                }
            </View>        
            </KeyboardAvoidingView>
            </View>
            <TouchableOpacity
                style={{
                    width:'100%', 
                    height:40, 
                    top:100,
                    backgroundColor:COLORS.black,
                    justifyContent:'center',
                    borderRadius:5,
                    ...styles.shadow
                    }}
                onPress={() => navigation.navigate("details")}
            >
            
            <Text style={{...FONTS.body2, textAlign:'center', color:COLORS.white}}>Next</Text>
            
            </TouchableOpacity>
            <View style={{top:130}}>
            <Text style={{...FONTS.body4}}>Resend Code via</Text>
            <View style={{flexDirection:'row', top:5}}>
                <View style={{
                    flexDirection:'row',
                    width:80,
                    height:30,
                    borderColor:COLORS.black,
                    borderWidth:1,
                    borderRadius:4,                    
                    marginTop:5
                }}>
                <Image
                    source={icons.sms}
                    style={{
                        width:20,
                        height:20,
                        marginVertical:6,
                        left:10
                        
                        }}
                />
                <Text style={{
                    ...FONTS.body3,
                    textAlignVertical:"center",
                    left:15,
                    color:"#1111FF"
                }}>SMS</Text>
                </View>
                <View style={{
                    flexDirection:'row',
                    width:80,
                    height:30,
                    borderColor:COLORS.black,
                    borderWidth:1,
                    borderRadius:5,                    
                    marginTop:5,
                    left:10
                }}>
                <Image
                    source={icons.call}
                    style={{
                        width:20,
                        height:20,
                        marginVertical:6,
                        left:10
                        
                        }}
                />
                <Text style={{
                    ...FONTS.body3,
                    textAlignVertical:"center",
                    left:20,
                    color:"#1111FF"
                }}>Call</Text>
                </View>
            </View>
            </View>
        </View>           
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F3F3F3",
        padding:SIZES.padding*2,
        
        
    },
    containerAvoidingView: {
        flex:1,
        padding: 20,
        left:-20
    },
    containerInput: {
        flexDirection:'row',
        alignItems:'center'
        
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
    },
    cellView:{
        paddingVertical: 11,
        width:40,
        margin: 5,
        justifyContent: 'center',
        alignItems:'center',
        borderBottomWidth: 1.5
    },
    cellText: {
        textAlign:'center',
        fontSize: 18
    }
    
})
export default OTP
