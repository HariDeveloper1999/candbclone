import { FlatList } from "react-native-gesture-handler";
import Accordiaon from "./accordian";
import Title from "./title";
import { StyleSheet,View } from "react-native";




const faqData = [
    {
        label:'Does car&bike Superstore offer warranty?',
        value:'Our used cars are secured with 2-Year Mahindra warranty however if you want to upgrade/change your warranty coverage or opt for Roadside Assistance, you can explore our warranty offerings ',
        line:true
    },
    {
        label:"What happens if I miss my test drive or if there is a no-show?",
        value:'If you miss your test drive, we will help you reschedule it within the 48-hours reservation window. You can call us on +91 96060 45096 to reschedule the same.',
        line:true
    },
    {
      label:"What are my test drive options?",
      value:'To ensure you have a hassle-free experience, we offer you 2 options to test-drive the vehicle within 48 hours:',
      line:true
    },
    {
        label:'Does car&bike Superstore offer warranty?',
        value:'Our used cars are secured with 2-Year Mahindra warranty however if you want to upgrade/change your warranty coverage or opt for Roadside Assistance, you can explore our warranty offerings ',
        line:true
    },
    {
        label:"What happens if I miss my test drive or if there is a no-show?",
        value:'If you miss your test drive, we will help you reschedule it within the 48-hours reservation window. You can call us on +91 96060 45096 to reschedule the same.',
        line:true
    },
    {
      label:"What are my test drive options?",
      value:'To ensure you have a hassle-free experience, we offer you 2 options to test-drive the vehicle within 48 hours:',
      line:false
    }
]


export default function Faq(){
    return(
        <>
        <Title title="FAQ's"/>
        <View style={styles.faqContainer}>
       <FlatList 
          data={faqData}
          renderItem={(item)=><Accordiaon item={item.item}/>}
          keyExtractor={(item,index)=>index}
       
       />
       </View>
       </>
    )
}
const styles= StyleSheet.create({
    faqContainer:{
        margin:20,
        padding:10,
        backgroundColor:'#2B2E31',
        borderRadius:15,
     
    }

})