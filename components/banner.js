import { Image,StyleSheet } from "react-native"
export default function Banner(props){
    const {url}=props
    return(
        <Image
        source={require('../assets/banner.jpg')}
        style={styles.imageStyle}
        resizeMode="stretch"
          
        
        />
    )

}

const styles=StyleSheet.create({
    imageStyle:{
        flex:1,
        width:'100%',
        height:500
  
    }
})