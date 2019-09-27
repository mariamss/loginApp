import React from 'react';
import { Text, TouchableOpacity , View} from "react-native"
import styles from "./buttonStyles"

const Button = (props) => {
    const {style, disabled, title} = props;
    return (
        disabled ? 
        <View style={[styles.container,styles.disabledButton, style]} {...props}>
            <Text style={[styles.text, styles.disabledText]}> Login </Text>
        </View>  
         : 
         <TouchableOpacity style={[styles.container, style]} {...props}>
            <Text style={styles.text}> {title}</Text>
        </TouchableOpacity> 
    );
}
 
export default Button;
