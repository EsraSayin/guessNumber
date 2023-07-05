import { StyleSheet, Text} from "react-native";
import Colors from "../../constants/colors";

function InstructionLabel({children, style}){
  return <Text style={[styles.label, style]}>{children}</Text>
}

export  default InstructionLabel;

const styles = StyleSheet.create({
    label:{
     color: Colors.lightpurple,
     fontSize:20
    },
})