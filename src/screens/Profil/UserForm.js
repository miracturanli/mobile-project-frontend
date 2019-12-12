import React, { Component } from 'react';
import {Button, Content, Input, Item, Spinner, Text} from "native-base";
import { Formik } from "formik";
import validations from './validations';
//import {API_BASE} from '../../constants';
import { StyleSheet, View, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
//import {observer,inject} from 'mobx-react';
//import axios from 'axios';
//@inject('UserStore')
//@observer
export default class UserForm extends Component {
	/*_handleSubmit = async ({username,password}, bag) => {
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
	};*/
	_handleSubmit = async ({isim,soyisim,yas,boy,kilo}, bag) => {
		alert(isim,kilo);
	};

  render() {
    return (
		<View style={styles.signupContainer}>
			<Formik
				initialValues={{
					isim: '',
                    soyisim: '',
                    yas: '',
                    boy: '',
                    kilo: ''
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
						<Item error={errors.isim && touched.isim}>
							<Input
                                returnKeyType={'next'}
                                onSubmitEditing={() => this.soyisimRef._root.focus()}
								onChangeText={handleChange('isim')}
								value={values.isim}
								placeholder='isim'
                                autoCorrect={false}
								onBlur={() => setFieldTouched('isim')}
								autoCapitalize={'none'}
							/>
							{ (errors.isim && touched.isim) && <Text style={{color: 'red'}}>{errors.isim}</Text>}
						</Item>


                        <Item error={errors.soyisim && touched.soyisim}>
							<Input
                                ref={ref => this.soyisimRef = ref}
                                returnKeyType={'next'}
                                onSubmitEditing={() => this.yasRef._root.focus()}
								onChangeText={handleChange('soyisim')}
								value={values.soyisim}
								placeholder='soyisim'
                                autoCorrect={false}
								onBlur={() => setFieldTouched('soyisim')}
								autoCapitalize={'none'}
							/>
							{ (errors.soyisim && touched.soyisim) && <Text style={{color: 'red'}}>{errors.soyisim}</Text>}
						</Item>


                        <Item error={errors.yas && touched.yas}>
							<Input
                                ref={ref => this.yasRef = ref}
                                returnKeyType={'next'}
                                onSubmitEditing={() => this.boyRef._root.focus()}
								onChangeText={handleChange('yas')}
								value={values.yas}
								placeholder='yas'
                                autoCorrect={false}
								onBlur={() => setFieldTouched('yas')}
								autoCapitalize={'none'}
							/>
							{ (errors.yas && touched.yas) && <Text style={{color: 'red'}}>{errors.yas}</Text>}
						</Item>
                        

                        <Item error={errors.boy && touched.boy}>
							<Input
                                ref={ref => this.boyRef = ref}
                                returnKeyType={'next'}
                                onSubmitEditing={() => this.kiloRef._root.focus()}
								onChangeText={handleChange('boy')}
								value={values.boy}
								placeholder='boy'
                                autoCorrect={false}
								onBlur={() => setFieldTouched('boy')}
								autoCapitalize={'none'}
							/>
							{ (errors.boy && touched.boy) && <Text style={{color: 'red'}}>{errors.boy}</Text>}
						</Item>

                        

						<Item error={errors.kilo && touched.kilo}>
							<Input
                                ref={ref => this.kiloRef = ref}
                                returnKeyType={'go'}
								onChangeText={handleChange('kilo')}
								value={values.kilo}
								placeholder='kilo'
								autoCorrect={false}
								onBlur={() => setFieldTouched('kilo')}
								autoCapitalize={'none'}
							/>
							{ (errors.kilo && touched.kilo) && <Text style={{color: 'red'}}>{errors.kilo}</Text>}
						</Item>

						<Button
							block
							disabled={!isValid || isSubmitting}
							onPress={handleSubmit}
							style={{marginTop: 10,backgroundColor:'#4285f4'}}>
							{ isSubmitting && <Spinner size={'small'} color={'white'} /> }
							<Text>Kaydet</Text>
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
        marginTop: 150
    }
});