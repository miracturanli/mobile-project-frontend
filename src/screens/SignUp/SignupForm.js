import React, { Component } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import {Button, Content, Input, Item, Spinner, Text} from "native-base";
import { Formik } from "formik";
import { API_BASE } from '../../constants';
import validations from './validations';
import axios from 'axios';

export default class SignupForm extends Component {
	_handleSubmit = async ({username,password}, bag) => {
		try {
			const { data } = await axios.post(`${API_BASE}/register`,{username,password});
			console.log(data);
			bag.setSubmitting(false);
			if(data.hasOwnProperty('errmsg')){
				bag.setErrors(data.errmsg);
				alert('Kullanıcı Adı Kullanılmaktadır.');
				return false;
			}
			this.props.navigation.navigate('SignIn');
		}catch (e) {
			bag.setSubmitting(false);
			bag.setErrors(e)
			console.log(e);
			console.log("hata");
		}
	};

  render() {
    return (
		<View style={styles.signupContainer}>
			<Formik
				initialValues={{
					username: '',
					password: '',
					passwordConfirm: ''
				}}
				onSubmit={this._handleSubmit}
				validationSchema={validations}
			>
				{({
						values,
						handleChange,
						handleSubmit,
						errors,
						touched,
						setFieldTouched,
						isValid,
						isSubmitting
					}) => (
					<Content style={{padding: 10}}>
						<Item error={errors.username && touched.username}>
							<Input
                                returnKeyType={'next'}
                                onSubmitEditing={() => this.passwordRef._root.focus()}
								onChangeText={handleChange('username')}
								value={values.username}
								placeholder='kullanıcı adı'
                                autoCorrect={false}
								onBlur={() => setFieldTouched('username')}
								autoCapitalize={'none'}
							/>

							{ (errors.username && touched.username) && <Text style={{color: 'red'}}>{errors.username}</Text>}
						</Item>

						<Item error={errors.password && touched.password}>
							<Input
                                ref={ref => this.passwordRef = ref}
                                onSubmitEditing={() => this.passwordConfirmRef._root.focus()}
                                returnKeyType={'next'}
								onChangeText={handleChange('password')}
								value={values.password}
								placeholder='parola'
								onBlur={() => setFieldTouched('password')}
								autoCapitalize={'none'}
								secureTextEntry={true}
							/>

							{ (errors.password && touched.password) && <Text style={{color: 'red'}}>{errors.password}</Text>}
						</Item>

						<Item error={errors.passwordConfirm && touched.passwordConfirm}>
							<Input
                                returnKeyType={'go'}
                                ref={ref => this.passwordConfirmRef = ref}
								onChangeText={handleChange('passwordConfirm')}
								value={values.passwordConfirm}
								placeholder='parolanızı doğrulayın'
								onBlur={() => setFieldTouched('passwordConfirm')}
								autoCapitalize={'none'}
								secureTextEntry={true}
								
							/>

							{ (errors.passwordConfirm && touched.passwordConfirm) && <Text style={{color: 'red'}}>{errors.passwordConfirm}</Text>}
						</Item>

						<Button
							block
							disabled={!isValid || isSubmitting}
							onPress={handleSubmit}
							style={{marginTop: 10,backgroundColor:'#4285f4'}}>
							{ isSubmitting && <Spinner size={'small'} color={'white'} /> }
							<Text>Kayıt Ol</Text>
						</Button>
					</Content>
				)}
			</Formik>
		</View>
    );
  }
}
const styles = StyleSheet.create({
    signupContainer: {
        flex: 1,
        position: 'absolute',
        width: width-65,
        marginTop: 100
    }
});