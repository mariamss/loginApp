import React, {useState, useReducer} from 'react';
import {View, Text, TextInput, StyleSheet} from "react-native";
import styles from "./inputStyles"
const Input= props=>{
    return (
        <View style={styles.inputContainer}>
            <TextInput 
                {...props}
                placeholderTextColor = "#888888"
                style={styles.input}
            />
            <Text style={styles.errorText}>{props.error}</Text>
        </View>
    )
}

export default Input;

