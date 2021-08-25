import React, {useState} from "react";
import {
    SafeAreaView,
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    Image,
} from "react-native";

import { Rating, AirbnbRating } from 'react-native-elements';

import { icons, SIZES, COLORS, FONTS } from '../constants'


const PreviousOrders = ({ navigation }) => {
    const [order] = useState([
    {name: 'Order 05', content:'Burger 01, Pizza 01', id: '1', price:'Rs.2130', value:3.3},
    {name: 'Order 04', content:'Noodles 01, Rice 01', id: '2', price:'Rs.2000', value:4.0 },
    {name: 'Order 03', content:'Burger 01, Desert 01', id: '3', price:'Rs.450', value:3.5 },
    {name: 'Order 02', content:'Rice 01, Pizza 01', id: '4', price:'Rs.2150', value:5.0},
    {name: 'Order 01', content:'Burger 01, Hot Dogs 01', id: '5', price:'Rs.1500', value:4.5},
    ]);
    
    

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
                            alignItems: 'center',
                            justifyContent: 'center',
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
            <View style={{flexDirection:"row", top:30, padding:SIZES.padding*2, marginBottom:20}}>
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
                            width: 35,
                            height: 25
                        }}
                    />
                </TouchableOpacity>
                <Text style={{...FONTS.h2, left:10}}>Previous Orders</Text>
            </View>
                
                <FlatList 
                    keyExtractor ={(item) => item.id}  
                    data={order}
                    renderItem = {({item}) => (
                        <View style={styles.item}>
                            <Text style={{...FONTS.h2}}>{item.name}</Text>
                            <Text style={{...FONTS.body4, color:COLORS.darkgray}}>{item.content}</Text>
                            <View style={{flexDirection:'row', justifyContent:'center'}}>
                            <Text style={{...FONTS.body4, color:COLORS.green, top:15}}>Rate Order</Text>
                            <Rating/>
                            </View>
                            <View style={{
                                width:93, 
                                height:32,
                                backgroundColor:COLORS.lightGray,
                                left:180,
                                marginTop:-50,
                                justifyContent:'center',
                                alignItems:'center',
                                alignContent:'center',
                                borderRadius:10
                            }}><Text style={{...FONTS.h4,color:COLORS.red}}>{item.price}</Text></View>
                          
                            
                        </View>
                                                                            
                    )}
                />
               
            
                          
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
        elevation: 1,
    },
    item: {
        width:320,
        height:130,
        padding:20,
        marginTop:20,
        backgroundColor: COLORS.white, 
        alignSelf:'center',
        borderRadius:20,
        flexDirection:'column'

    }

})

export default PreviousOrders;