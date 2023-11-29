import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import Card from "./card";
import Title from "./title";
import { useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import ViewAllBtn from "./viewAllBtn"

let TabData = [
  {
    label: "By Budget",
    name: "budget",
  },
  {
    label: "By Catogory",
    name: "catagory",
  },
];

const priceData=[
    {
        label:"< 3Lakh"
    },
    {
        label:"3-6 Lakh"
    },
    {
        label:"6-9Lakh"
    },
    {
        label:"9-12 Lakh"
    },
    {
        label:"12-15 Lakh"
    },
    {
        label:"15-18 Lakh"
    }
]
const catData=[
  {
      label:"Hatchback"
  },
  {
      label:"Seaden"
  },
  {
      label:"SUV"
  },
  {
      label:"Cross over"
  },
  {
      label:"MUV"
  }
]

export default function TabCard() {
  const [selectedVal, setSelectedVal] = useState("budget");
  const[price,setPrice]=useState()

 
  const renderFunction = (item) => {
    return (
      <>
      <View style={styles.radioBtnContainer}>
        <TouchableOpacity onPress={() => {setSelectedVal(item.name)}} style={styles.radioButton}>
            {
                selectedVal == item.name &&
                <View style={styles.radioButtonIcon} />
            }
        
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {setSelectedVal(item.name)}}>
          <Text style={styles.radioButtonText}>{item.label}</Text>
        </TouchableOpacity>
        </View>
      </>
    );
  };
  const budgetRender=(item)=>{
    return(
        <Pressable style={styles.priceBtnContainer} onPress={()=>{setPrice(item.label)}}>
            <Text style={price == item.label ? styles.priceBtnSelected: styles.priceBtn}>{item.label}</Text>
        </Pressable>
    )

 }

  return (
    <View style={styles.tabCard}>
      <Title title="Find Your Match" />
    
            <FlatList
              horizontal={true}
              data={TabData}
              renderItem={(item)=>renderFunction(item.item)}
              keyExtractor={(item,index)=>index}
           />
           {
            (selectedVal == "budget" || selectedVal == "catagory")
            &&
            <FlatList
            // horizontal={true}
            numColumns={4}
            data={ selectedVal == "budget" ? priceData : catData}
            renderItem={(item)=>budgetRender(item.item)}
            keyExtractor={(item,index)=>index}
         />
           
           }
           <View style={styles.tabBtnContainer}>
           <ViewAllBtn title="View All  >"/>
           </View>

      
    </View>
  );
}

const styles = StyleSheet.create({
  tabCard: {
    margin: 20,
    backgroundColor: "#2B2E31",
    borderRadius: 15,
    padding:10
  },
  radioBtnContainer: {
    flexDirection: "row",
    marginLeft:20,
  },
  radioButton: {
    height: 20,
    width: 20,
    backgroundColor: "#16191b",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: " #25292d",
    alignItems: "center",
    justifyContent: "center",
  },
  radioButtonIcon: {
    height: 14,
    width: 14,
    borderRadius: 7,
    backgroundColor: "#F7E300",
  },
  radioButtonText: {
    fontSize: 16,
    marginLeft: 16,
    color:"#ffffff"
  },
  priceBtnContainer:{
    borderColor:"#3a4047",
    borderWidth:2,
    width:84,
    borderRadius:15,
    marginRight:5,
    marginVertical:20,
    padding:5,
    backgroundColor:"#16191b"

  },
  priceBtn:{
    color:"#ffffff",
    textAlign:'center'
  },
  priceBtnSelected:{
    color:"#F7E300",
    textAlign:'center'

  },
  bNone:{
    borderWidth:0
  },
  tabBtnContainer:{
    flexDirection:'row',

  }
});
