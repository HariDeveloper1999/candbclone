import { Text,StyleSheet,View,ScrollView } from 'react-native';
import Banner from '../components/banner';
import Wishlist from '../components/Wishlist';
import ViewAllBtn from '../components/viewAllBtn';
import TabCard from '../components/tabCard';
// import Card from '../components/card';
import FavouritesCard from '../components/FavoritesCard';
import BrandCard from '../components/brandCard';
import ReserveWithUs from '../components/ReserveWithUs';




export default function Home() {
  return (
    
    <View style={styles.container}>
        <ScrollView>
       <Banner
       url={'../assets/banner.jpg'}
       />
       <Wishlist title="Wishlist"/>
       <TabCard/>
       <FavouritesCard/>
       <Wishlist title="Moonsoon Arraivals" containerStyle={styles.wishlistContainer}/>
       <BrandCard/>
       <Wishlist title="Splashing Deals" containerStyle={styles.wishlistContainer}/>
       <ReserveWithUs/>

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

 