import React, {useState} from "react";
import {
    SafeAreaView,
    View,
    Text,  
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList,
    ScrollView,

} from "react-native";

import { icons, SIZES, COLORS, FONTS, images } from '../constants'


const Cart = ({ navigation }) => {
    const [order] = useState([
    {image: images.cartIcon_1, name: 'Burger 01', price:'Rs.450', id:1},
    {image: images.cartIcon_2, name: 'Burger 02', price:'Rs.900', id:2},
    ]);
  
    return(
        
        <View style={styles.container}>
        
            <SafeAreaView style={{ flexDirection: 'row', top:20, width:"100%", height:45, marginBottom:30}}>
                
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
                    //onPress={() => navigation.goBack()}
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
               
                <ScrollView style={{flex: 1}}>
                <View style={{flexDirection:"row", padding:SIZES.padding*2, marginBottom:20}}>
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
                <Text style={{...FONTS.h2, left:10}}>My Cart</Text>
            </View>
            <FlatList
            style={{top:-30}}
            keyExtractor ={(item, id) => item + id.toString()}  
                    data={order}
                    renderItem = {({item}) => (
            
            <View style={{
                width:340,
                height:90,
                backgroundColor:COLORS.white,
                borderRadius:20,
                marginLeft:25,
                marginTop:15,
                flexDirection:'row'
                }}
                
                >
                <Image source={item.image}
                    style={{width: 93,
                    height:90,
                    borderTopLeftRadius:20,
                    borderBottomLeftRadius:20
                    }}
                />
                <View style={{flexDirection:'column', marginLeft:10,marginTop:10, width:90, height:90}}>
                <Text style={{fontSize:18}}>{item.name}</Text>
                <View
                    style={{
                        
                        width: SIZES.width,
                        height: 25,
                        justifyContent: 'flex-start',
                        flexDirection: 'row',
                        marginTop:8
                        }}
                        >
                        <TouchableOpacity
                            style={{
                                width: 25,
                                height: 25,
                                backgroundColor: COLORS.black,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius:25
                                }}
                                //onPress={() => editOrder("-", item.menuId, item.price)}
                        >
                            <Text style={{...FONTS.body1, color:COLORS.white }}>-</Text>
                        </TouchableOpacity>
                        
                        <View
                            style={{
                                width: 25,
                                backgroundColor: COLORS.white,
                                alignItems: 'center',
                                justifyContent: 'center'
                                }}
                                >
                            <Text style={{ ...FONTS.h2}}>{/*{getOrderQty(item.menuId)}*/}</Text>
                        </View>

                        <TouchableOpacity
                            style={{
                                width: 25,
                                height: 25,
                                backgroundColor: COLORS.primary,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 25
                                }}
                                //onPress={() => editOrder("+", item.menuId, item.price)}
                                >
                                <Text style={{ ...FONTS.body2, color:COLORS.white }}>+</Text>
                        </TouchableOpacity>
                        </View>   
                </View>  
                <View
                    style={{
                        width:86, 
                        height:32,
                        marginTop:36,
                        borderRadius:10,
                        left:20,
                        justifyContent:'center',
                        alignContent:'center',
                        backgroundColor:COLORS.lightGray3}}
                >
                <Text style={{
                    ...FONTS.body3,
                    color:COLORS.red,
                    textAlign:'center'
                
                }}>
                {item.price}
                </Text>
                </View> 

                <TouchableOpacity
                    style={{width:30,
                    height:90,
                    left:31
                    }}
                    
                >

                <Image source={icons.cancel}
                    style={{width:30,
                    height:90,
                    borderTopRightRadius:20,
                    borderBottomRightRadius:20,
                    
                    }}
                />       
                </TouchableOpacity>                                                                                                   
            </View>
            )}
            /> 

            <View style={{width:'80%', height:40, left:30}}>
                <Text style={{...FONTS.body2}}>Delivery Info</Text>
                <View style={{flexDirection:'row', left:10, top:10}}>
                    <Image source={icons.location}
                        style={{
                            width:20,
                            height:20
                            }}
                    />
                    <Text></Text>
                    <TouchableOpacity style={{
                            
                            left:270,
                            top:2
                        }}
                        onPress={() => navigation.navigate("DeliveryInfo")}
                    >
                    <Image source={icons.rightArrow}
                        style={{
                            width:15,
                            height:15,
                            }}
                    />
                    </TouchableOpacity>
                </View>
  
            </View>

            <View style={{width:'80%', height:40, left:30, top:30}}>
                <Text style={{...FONTS.body2}}>Payment Info</Text>
                <View style={{flexDirection:'row'}}>
                    <Image source={icons.visa}
                        style={{
                            width:50,
                            height:25,
                            left:10,
                            top:10
                            }}
                    />
                    <Text></Text>
                     <TouchableOpacity style={{
                            
                            left:250,
                            top:15
                        }}
                        onPress={() => navigation.navigate("PaymentInfo")}
                    >
                    <Image source={icons.rightArrow}
                        style={{
                            width:15,
                            height:15,
                        
                            }}
                    />
                    </TouchableOpacity>
                </View>
  
            </View>
            <View style={styles.box}>
                <Text style={{...FONTS.body2, left:30, top:20}}>Order Info</Text>
                <View style={{flexDirection:'row', left:50, top:30}}>
                    <Text style={{...FONTS.body3, color:COLORS.darkgray}}>Subtotal</Text>
                    <Text></Text>
                </View>
                <View style={{flexDirection:'row', left:50, top:40}}>
                    <Text style={{...FONTS.body3, color:COLORS.darkgray}}>Delivery Charges</Text>
                    <Text></Text>
                </View>
                <View style={{flexDirection:'row', left:50, top:50}}>
                    <Text style={{...FONTS.body3, color:COLORS.darkgray}}>Total</Text>
                    <Text></Text>
                </View>
                <View style={{alignSelf:'center'}}>
                <TouchableOpacity
                     style={{
                    
                    width: SIZES.width * 0.80,
                    padding: SIZES.padding,
                    backgroundColor: COLORS.primary,
                    alignItems: 'center',
                    borderRadius: SIZES.radius,
                    top:80,
                    ...styles.shadow
                    }}
                    //onPress={() => navigation.navigate("Login")}
                >
                <Text style={{ color: COLORS.white, ...FONTS.body3 }}>CHECKOUT</Text>
            </TouchableOpacity>
            </View>   
            </View>
            </ScrollView>

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
    item: {
        width:320,
        height:130,
        padding:20,
        marginTop:20,
        backgroundColor: COLORS.white, 
        alignSelf:'center',
        borderRadius:20,
        flexDirection:'column'

    },
    box: {
        width:'100%',
        height:400,
        top:90,
        backgroundColor:COLORS.white,
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5, 
    }

})

export default Cart;
