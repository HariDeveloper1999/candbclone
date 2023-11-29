import { FlatList,View,Image,Text} from "react-native";
import Title from "./title";
import { StyleSheet } from "react-native";

let imageData = [
    {
        url:"https://images.carandbike.com/wms/Group_21_98b96f8571.png"
    },
    {
      url:"https://images.carandbike.com/wms/Group_25_e516777c22.png"
    },
    {
      url:"https://images.carandbike.com/wms/Group_22_b99ddd9354.png"
    },
    {
     url:"https://images.carandbike.com/wms/Group_25_e516777c22.png"
    },

]


export default function FavouritesCard(){
    const imageRender=(item)=>{
       
        return(
             <>
             <View>
               <Image
                 source={{uri:item.url}}
                 style={styles.imageStyle}
               />
              </View>
                </>
         
           )

    }
   
  return(
    <>
    <Title title="Drive India Favorites"/>
    <FlatList
       horizontal={true}
      data={imageData}
      renderItem={(item)=>imageRender(item.item)}
      keyExtractor={(item,index)=>index}
      showsVerticalScrollIndicator={false}
    />
    </>

  )

 

}

const styles =StyleSheet.create({
    imageStyle:{
        height:330,
        width:200,
        borderRadius:10,
        marginLeft:10,
        objectFit:'cover',
        marginBottom:20
    }
    
})