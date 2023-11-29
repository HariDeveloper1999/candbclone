import { View,FlatList,StyleSheet } from "react-native";
import { CAR_DATA } from "../constants/data";
import ImageDataCard from "./imageDataCard";
import Title from "./title";
import ViewAllBtn from "./viewAllBtn";

export default function Wishlist({title,containerStyle}){
    return(
        <View style={containerStyle ? containerStyle:styles.container}>
            <Title title={title}/>
            <FlatList
            horizontal={true}
            data={CAR_DATA}
            renderItem={(item)=>{
                return(
                    <ImageDataCard data={item.item}/>
                )
            }}
            keyExtractor={(item,index)=>index}
            showsHorizontalScrollIndicator={false}
            
            />
            
               <ViewAllBtn title="View All >"/>
            
            
        </View>

    )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:'#9732a8',
        paddingVertical:20,
       
    },
    

})