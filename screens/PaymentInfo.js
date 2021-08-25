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

import { RadioButton } from 'react-native-paper'

import { icons, SIZES, COLORS, FONTS } from '../constants'

const PaymentInfo = ({ navigation }) => {
    const [name,setName]=useState('');
    const [number,setNumber]=useState('');
    const [date,setDate]=useState('');
    const [cvv,setCvv]=useState('');
    const [checked, setChecked] = useState('first');
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
            <View style={{flexDirection:"row", top:30, padding:SIZES.padding*2, left:-15}}>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: SIZES.padding * 2,
                        justifyContent: 'center'
                        
                        
                    }}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        source={icons.back}
                        resizeMode="contain"
                        style={{
                            width: 20,
                            height: 25
                           
                        }}
                    />
                </TouchableOpacity>
                <Text style={{...FONTS.body2, left:10}}>Payment Info</Text>
            </View>
            <View>
                <Text
                    style={{...FONTS.body4, textAlign:'center', top:50}}
                >Payment Method</Text>
            </View>
            <View style={{
                flexDirection:'row', 
                top:80, 
                justifyContent:'center',
                alignItems:'center'
                
                }}>
                <View style={{flexDirection:'row', left:-30}}>
                <RadioButton  
                    value="first"
                    status={ checked === 'first' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('first')}
                    color={COLORS.primary}
                />
                <Image
                    source={icons.visa}
                    style={{
                        width:90,
                        height:45                        
                        
                    }}

                />
               </View>
               <View style={{flexDirection:'row', left:-10}}>
                <RadioButton 
                value="second"
                status={ checked === 'second' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('second')}
                color={COLORS.primary}
                />
                <Image
                    source={icons.master}
                    style={{
                        width:52,
                        height:40,
                        marginTop:3
                        
                    }}
                />
                </View>
                <View style={{flexDirection:'row', left:10}}>
                 <RadioButton 
                    value="third"
                    status={ checked === 'third' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('third')}
                    color={COLORS.primary}
                />
                <Image 
                    source={icons.cash}
                    style={{
                        width:50,
                        height:50,
                        marginTop:-3
                        
                    }}
                />
                </View>
            </View>
            <View style={{top:110}}>
            <Text style={{left:30}}>Cardholder's Name</Text>
            <TextInput
                style={styles.inputText}
            />
            <Text style={{top:25, left:30}}>Card Number</Text>
            <TextInput
                style={[styles.inputText,styles.inputTextSpace]}
                keyboardType='numeric'
            />
            <View style={{flexDirection:'row', top:20}}>
            <View style={{flexDirection:'column', width:'60%'}}>
            <Text style={{top:30, left:30}}>Expiry Date</Text>
            <TextInput
                style={[styles.inputTextCvv,styles.inputTextSpaceCvv]}
                keyboardType='numeric'
            />
            </View>
            <View style={{flexDirection:'column', width:'60%', left:-20}}>
            <Text style={{top:30}}>CVV</Text>
            <TextInput
                style={[styles.inputTextCvv,styles.inputTextSpaceCvv,styles.inputTextCvvLeft]}
                keyboardType='numeric'
            />
            </View>
            </View>
            </View>
            <View style={{alignSelf:'center'}}>
            <TouchableOpacity
                style={{
                    width: SIZES.width * 0.80,
                    padding: SIZES.padding,
                    backgroundColor: COLORS.primary,
                    alignItems: 'center',
                    borderRadius: SIZES.radius,
                    top:250,
                    ...styles.shadow
                    }}
                    onPress={() => navigation.navigate("Login")}
                >
                <Text style={{ color: COLORS.white, ...FONTS.body3 }}>SAVE CHANGES</Text>
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
    },
    inputText:{
        width:'85%',
        height:40,
        top:10,
        backgroundColor:COLORS.white,
        borderRadius:5,
        justifyContent:'center',
        alignSelf:'center',
        shadowColor:COLORS.darkgray,
        shadowRadius:3,
        shadowOpacity:0.1,
        shadowOffset:{width:0, height:3},
        elevation:2,       
    },
    inputTextSpace:{
        top:35
    },
    inputTextCvv:{
        width:'60%',
        height:40,
        left:30,
        backgroundColor:COLORS.white,
        borderRadius:10,
        justifyContent:'center',
        shadowColor:COLORS.darkgray,
        shadowRadius:3,
        shadowOpacity:0.1,
        shadowOffset:{width:0, height:3},
        elevation:2,       
    },
    inputTextSpaceCvv:{
        top:40,
        
    },
    inputTextCvvLeft:{
        left:0
    }

})

export default PaymentInfo;