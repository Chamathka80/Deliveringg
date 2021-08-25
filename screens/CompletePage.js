import React from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Image,
    
} from "react-native";


import { icons, SIZES, COLORS, FONTS } from '../constants'

const CompletePage= ({ navigation }) => {
    
    return(   
        <View style={styles.container}>
        <View>
        <Image
            source={icons.completeTop}
            style={{top:1}}
            
        />
        <Image
            source={icons.completeBottom}
            style={{top:-573}}
        />
        </View>
        <View style={{flexDirection:'row'}}>
            <View style={{top:-30, left:20}}>
            <Text style={{...FONTS.largeTitle ,top:-1200, color:COLORS.white}}>Order</Text>
            <Text style={{...FONTS.largeTitle ,top:-1200, color:COLORS.white}}>Completed</Text>
            </View>
            <Image
            source={icons.complete}
            style={{top:-1220, left:50}}
        />
        </View>
        <View>
        <Image
            source={icons.circle}
             style={{top:-1170, alignSelf:'center'}}
        />
        <Image
            source={icons.logo}
             style={{width:220, height:82 ,top:-1360, alignSelf:'center'}}
        />

        </View>
        
         <View
                    style={{
                        height: 60,
                        padding: SIZES.padding * 2,
                        alignItems: 'center',
                        justifyContent: 'center',
                        top:-1175,
                        shadowOpacity:1,
                        shadowColor:COLORS.darkgray,
                        shadowRadius:10,
                        shadowOffset: {width: 0, height: 0 }

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
                        onPress={() => navigation.navigate("Home")}
                >
                    <Text style={{ color: COLORS.white, ...FONTS.body2 }}>Home</Text>
                    </TouchableOpacity>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,                  
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
export default CompletePage
