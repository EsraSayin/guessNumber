import {View, Text, Pressable, StyleSheet} from 'react-native';
import Colors from '../../constants/colors';

function PrimaryButton({children, onPress}) {
    return (
        <View style={styles.outerContainer}>
    <Pressable 
        style={styles.container} 
        onPress={onPress} 
        android_ripple={{color:Colors.pink}}
    >
        <Text style={styles.buttonText}>
            {children}
        </Text>
    </Pressable>
    </View>
    );
}

export default PrimaryButton; 

const styles = StyleSheet.create({
    container: {
        backgroundColor:Colors.purple,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 3
    },
    outerContainer: {
        borderRadius: 28,
        margin:4,
        overflow: 'hidden'
    },
    buttonText:{
        color:'white',
        textAlign: 'center'
    }
});