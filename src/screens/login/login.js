import { Formik } from 'formik'

import React, { Component, Fragment } from 'react';
import { SafeAreaView, View, ImageBackground,TouchableOpacity,Text,ActivityIndicator } from 'react-native';

import validationSchema from "../../services/validation-service"

import loginBackground from "../../../images/login/loginBackground.png"
import Button from "../../components/button/button"
import Input from "../../components/input/input"

import styles from "./loginStyles"



export default class Login extends Component {
  
  render() {
    const  onSubmit =(values)=>{
        this.props.loginRequest();
        let authSuccess =  values.email=="test@gmail.com" && values.password=="12345";
        
        setTimeout(()=> {
            if(authSuccess) {
                this.props.loginSuccess();
                alert("success")
           } else {
               this.props.loginFailure("User not found")
           }
        }, 2000);
    }
  
    return (
        <SafeAreaView>
            <ImageBackground source={loginBackground} style={styles.backgroundImage}>
                <View style={styles.formContainer}> 
                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={values => onSubmit(values)}
                    validationSchema={validationSchema}
                >
                    {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
                    <Fragment>
                        <Input
                            value={values.email}
                            onChangeText={handleChange('email')}
                            onBlur={() => setFieldTouched('email')}
                            placeholder="Email"
                            error={touched.email && errors.email}
                        />
                        <Input
                            value={values.password}
                            onChangeText={handleChange('password')}
                            placeholder="Password"
                            onBlur={() => setFieldTouched('password')}
                            secureTextEntry={true}
                            error= {touched.password && errors.password}
                        />
                        <Text style={styles.errorMessage}> {this.props.errorMessage}</Text>
                        <TouchableOpacity style={styles.textContainer}>
                            <Text style={styles.textStyle}> By logging in you , you accept our <Text style={styles.underlinedText}>Terms and Conditions</Text></Text>
                        </TouchableOpacity>
                        <View>
                            {this.props.loading ? <ActivityIndicator/> : <Button title='Login' disabled={!isValid} onPress={handleSubmit}/>}
                        </View>
                        
                    </Fragment>
                    )}
                </Formik>

                    <TouchableOpacity style={styles.textContainer} >
                        <Text style={[styles.textStyle, styles.underlinedText]}>Terms and Conditions</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
  }
}