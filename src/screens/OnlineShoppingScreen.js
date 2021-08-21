import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native'

const OnlineShoppingScreen = ({navigation}) => {
    const handleSkip =()=>{
        navigation.navigate('Payment Successful')
    }

    const handleNext = ()=>{
        navigation.navigate('Add to cart')
    }



    return (
        <View style={styles.container}>
            
            <View style={styles.textcontainer}>
                <Text style={styles.heading}>ONLINE SHOPPING</Text>
                <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Text>
            </View>
            <View style={styles.imagecontainer}>
                <Image style={styles.image} source={require('../../assets/Online_shopping.png')}></Image>
            </View>
            <View style={styles.buttoncontain}>
                <TouchableOpacity onPress={handleNext} style={styles.button}>
					<Text style={styles.buttonText}>Next</Text>
				</TouchableOpacity>
            </View>
            <View style={styles.paginationcontainer}>
                <View style={styles.mainpage}></View>
                <View style={styles.pagination}></View>
                <View style={styles.pagination}></View>
            <TouchableOpacity onPress={handleSkip}>   
                <Text style={styles.pageskip}>Skip</Text>
            </TouchableOpacity> 
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 25,
        marginHorizontal:40
    },
    textcontainer:{
        flex: 0.25
    },
    heading:{
        fontSize: 20,
        fontWeight:'bold',
        // marginTop: 50,
        marginBottom: 10,
        color: 'black'
    },
    imagecontainer:{
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image:{
        height:260,
        width:300
    },
    buttoncontain:{
        flex:0.1,
        justifyContent: 'center',
		alignItems: 'center',
    },
    button:{
        width: '50%',
		height: 50,
		backgroundColor: '#7a1ef6',
		borderRadius: 30,
		justifyContent: 'center',
		alignItems: 'center',
        marginVertical: 70
    },
    buttonText: {
		color: 'white',
		fontSize: 15,
    },
    paginationcontainer:{
        flex:0.15,
        flexDirection: 'row',
        justifyContent: 'flex-end',
		alignItems: 'center',
        marginTop: 25
    },
    pagination:{
        width:10,
        height:10,
        backgroundColor: 'lightgrey',
        borderRadius:100,
        marginRight: 3
    },
    mainpage:{
        width:20,
        height:10,
        backgroundColor: '#7a1ef6',
        borderRadius:100,
        marginRight: 3
    },
    pageskip:{
        marginLeft:90,
        color: 'lightgrey'
        
    }

})

export default OnlineShoppingScreen
