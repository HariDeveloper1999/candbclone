import { FlatList } from "react-native-gesture-handler";
import Card from "./card";
import Title from "./title";
import { Text ,StyleSheet,View,Image, Pressable} from "react-native";
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import RootSass from "../sass/root.scss";
let brandData=[
    {
        logo:"https://stage-images.carandbike.com/car-images/big/maruti-suzuki/maruti-suzuki.png?v=1_2",
        label:"Maruti Suzuki"
    },
    {
        logo:"https://stage-images.carandbike.com/car-images/big/hyundai/hyundai.png?v=1_2",
        label:"Hyundai"
    },
    {
         logo:"https://stage-images.carandbike.com/car-images/big/mahindra/mahindra.png?v=1_2",
         label:"Mahindra"

    },
    {
        logo:"https://stage-images.carandbike.com/car-images/big/maruti-suzuki/maruti-suzuki.png?v=1_2",
        label:"Maruti Suzuki"
    },
    {
        logo:"https://stage-images.carandbike.com/car-images/big/hyundai/hyundai.png?v=1_2",
        label:"Hyundai"
    },
    {
         logo:"https://stage-images.carandbike.com/car-images/big/mahindra/mahindra.png?v=1_2",
         label:"Mahindra"

    },
    {
        logo:"https://stage-images.carandbike.com/car-images/big/maruti-suzuki/maruti-suzuki.png?v=1_2",
        label:"Maruti Suzuki"
    },
    {
        logo:"https://stage-images.carandbike.com/car-images/big/hyundai/hyundai.png?v=1_2",
        label:"Hyundai"
    },
    {
         logo:"https://stage-images.carandbike.com/car-images/big/mahindra/mahindra.png?v=1_2",
         label:"Mahindra"

    }
]
export default function BrandCard(){
    const [isRead,setIsRead]=useState(false)
    const brandRender = (item) => {
        return(
            <View style={{paddingBottom:20}}>
                <Image
                source={{uri:item.logo}}
                style={styles.imageStyle}
                />
                <Text style={RootSass.tStyle}>{item.label}</Text>
            </View>
        )
    }
    return(
        <>
        <Title title="Popular brands"/>
        <View style={styles.parentContainer}>
        <View style={isRead? styles.fullContainer:styles.container}>
        <Card>
            
            <FlatList
              numColumns={3}
              columnWrapperStyle={{ justifyContent: 'space-around' }}
              data={brandData}
              renderItem={(item)=>brandRender(item.item)}
              keyExtractor={(item,index)=>index}
              showsHorizontalScrollIndicator={false}
            
            />
        </Card>
        </View>
        <Pressable onPress={()=>setIsRead(!isRead)} style={styles.pressContainer}>
             <Text style={RootSass.tStyle}>{isRead? "Read Less":"Read More"}</Text> 
             <Ionicons name={isRead?"arrow-up":"arrow-down"} size={18} color="white" />
        </Pressable>
        </View>
        </>
    )
}

const styles=StyleSheet.create({
    container:{
        height:200,
        marginBottom:30

    },
    pressContainer:{
       flexDirection:"row",
       justifyContent:'center'
    },
    parentContainer:{
        backgroundColor:'#2B2E31',
        borderRadius:15,
        margin:20

    },
    fullContainer:{
        height:350,
        marginBottom:RootSass.mb20.marginBottom
    },
    imageStyle:{
          height:50,
          width:50,
          objectFit:'contain',
          
    },
   
})