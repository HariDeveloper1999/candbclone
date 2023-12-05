import Title from "./title";
import { Image,StyleSheet,View,Text} from "react-native";
import Card from "./card";
// import { Rating } from "react-native-ratings"
import RatingStar from "react-native-rating-stars";
import { FlatList } from "react-native-gesture-handler";


const ratingData=[
    {
        url:'https://images.carandbike.com/wms/thumbnail_1_6_20a6cb7a8d.jpg',
        heading:'Jitendra Kumar',
        rating:5,
        description:"Finally found a perfect family car! I Highly recommend car&bike if you are looking for used cars that are as good as new & budget friendly. Kudos team car&bike."

    },
    {
        url:"https://images.carandbike.com/wms/thumbnail_3_3_966531ec18.jpg",
        heading:'Hari',
        rating:3,
        description:"I was concerned about budget, but I found my dream car with a perfect EMI solution at car&bike. The car purchase was also effortless and we did not have to worry "
    },
    {
        url:'https://images.carandbike.com/wms/thumbnail_1_6_20a6cb7a8d.jpg',
        heading:'Jitendra Kumar',
        rating:4,
        description:"Finally found a perfect family car! I Highly recommend car&bike if you are looking for used cars that are as good as new & budget friendly. Kudos team car&bike."

    },
    {
        url:"https://images.carandbike.com/wms/thumbnail_3_3_966531ec18.jpg",
        heading:'Hari',
        rating:3.6,
        description:"I was concerned about budget, but I found my dream car with a perfect EMI solution at car&bike. The car purchase was also effortless and we did not have to worry "
    },
    {
        url:'https://images.carandbike.com/wms/thumbnail_1_6_20a6cb7a8d.jpg',
        heading:'Jitendra Kumar',
        rating:4,
        description:"Finally found a perfect family car! I Highly recommend car&bike if you are looking for used cars that are as good as new & budget friendly. Kudos team car&bike."

    },
    {
        url:"https://images.carandbike.com/wms/thumbnail_3_3_966531ec18.jpg",
        heading:'Hari',
        rating:5,
        description:"I was concerned about budget, but I found my dream car with a perfect EMI solution at car&bike. The car purchase was also effortless and we did not have to worry "
    }
]
export default function RatingCard(){
    const renderRatingCard=(item)=>{
        // console.log("item",item)
     return(   
        <View style={styles.container}>
       <Image
         source={{uri:item.url}}
         style={styles.imageStyle}
        
        />
        <View style={styles.ratingContainer}>
        <Card>
         <View style={styles.headContainer}>
             <View>
               <Text style={[styles.tStyle,{fontSize:17}]}>{item.heading}</Text>
             </View>
             <View style={styles.ratingChContainer}>
               <RatingStar numberOfStar={5} ratingState={item.rating} color="#E0C500" size={20}  />
             </View>
         </View>
        
        <Text style={[styles.tStyle,{width:300}]}>{item.description}</Text>
      
      
        </Card>
        </View>
    
        </View>
     )
    }
   
    return(
        <>
       <Title title="2Min+ Happy Customers"/>
       <FlatList
          data={ratingData}
          renderItem={(item)=>renderRatingCard(item.item)}
          keyExtractor={(item,index)=>index}
          horizontal={true}
       
       />
       
        </>
      
        
       
    )
}

const styles=StyleSheet.create({
    container:{
        margin:20

    },
    ratingChContainer:{
        padding:10
    },
    headContainer:{
      flexDirection:'row',
      justifyContent:'space-between'
    },
    tStyle:{
      color:'white',
      padding:10,
     
    },
    ratingContainer:{
        marginTop:-40
    },

    imageStyle:{
        height:218,
        width:"100%",
        objectFit:'cover',
        borderRadius:20
    },


})