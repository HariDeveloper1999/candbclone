import { Text,StyleSheet,View,ScrollView } from 'react-native';
import Banner from '../components/banner';
import Wishlist from '../components/Wishlist';
import ViewAllBtn from '../components/viewAllBtn';
import TabCard from '../components/tabCard';
// import Card from '../components/card';
import FavouritesCard from '../components/FavoritesCard';
import BrandCard from '../components/brandCard';
import ReserveWithUs from '../components/ReserveWithUs';
import Accordiaon from '../components/accordian';
import Faq from '../components/faq';
import RatingCard from '../components/ratingCard';
import { useState } from 'react';




export default function Home() {
  const[wishlist,setWishlist]=useState([])
  return (
    
    <View style={styles.container}>
        <ScrollView>
       <Banner
       url={'../assets/banner.jpg'}
       />
       <Wishlist title="Wishlist" setWishlist={setWishlist} wishlist={wishlist}/>
       <TabCard/>
       <FavouritesCard/>
       <Wishlist title="Moonsoon Arraivals" containerStyle={styles.wishlistContainer} setWishlist={setWishlist} wishlist={wishlist}/>
       <BrandCard/>
       <Wishlist title="Splashing Deals" containerStyle={styles.wishlistContainer} setWishlist={setWishlist} wishlist={wishlist}/>
       <ReserveWithUs/>
      <Faq/>
      <RatingCard/>

       </ScrollView>
      
       
      

    </View>
   
  )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:'#26282B',
     },

     wishlistContainer:{
      paddingVertical:20

     }
})

 