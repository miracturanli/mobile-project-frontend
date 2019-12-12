import React, { Component } from 'react';
import {Button, Content, Input, Item, Spinner, Text} from "native-base";
import { Formik } from "formik";
import validations from './validations';
import {API_BASE} from '../../constants';
import { StyleSheet, View, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
import {observer,inject} from 'mobx-react';
import axios from 'axios';
@inject('UserStore')
@observer
export default class SigninForm extends Component {
	_handleSubmit = async ({username,password}, bag) => {
		try {
			const { data } = await axios.post(`${API_BASE}/authenticate`,{username,password});
			bag.setSubmitting(false);
			if(!data.status){
				if(data.message === 'Authentication failed, user not found'){
					alert('Kullanıcı Bulunamadı.');
					return false;
				}
				if(data.message === 'authentication failed, wrong password.'){
					alert('Parola Yanlış.');
					return false;
				}
				alert(data.message);
				return false;
			}
			this.props.UserStore.saveToken(data.token);
			
		}catch (e) {
			bag.setSubmitting(false);
			bag.setErrors(e)
		}
	};

  render() {
    return (
		<View style={styles.signupContainer}>
			<Formik
				initialValues={{
					username: '',
					password: ''
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
                                returnKeyType={'go'}
								onChangeText={handleChange('password')}
								value={values.password}
								placeholder='parola'
								onBlur={() => setFieldTouched('password')}
								autoCapitalize={'none'}
								secureTextEntry={true}
							/>
							{ (errors.password && touched.password) && <Text style={{color: 'red'}}>{errors.password}</Text>}
						</Item>

						<Button
							block
							disabled={!isValid || isSubmitting}
							onPress={handleSubmit}
							style={{marginTop: 10,backgroundColor:'#4285f4'}}>
							{ isSubmitting && <Spinner size={'small'} color={'white'} /> }
							<Text>Giriş Yap</Text>
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