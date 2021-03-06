import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { styles } from './styles';

export default function Login() {

    const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

    const pressMe = () => {
        /* console.log(this.email)
        console.log(password) */
        console.log('Oiiii')
    }
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../../../assets/icon.png')}/>
            </View>
            <Text style={styles.loginTitle}>
                Faça seu login
            </Text>
            <View style={styles.inputContainer}>
                <Input 
                    placeholder="E-mail"
                    textContentType="emailAddress"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
            </View>
            <View style={styles.inputContainer}>
                <Input 
                    placeholder="Senha"
                    textContentType="password"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
            </View>
            <View style={styles.buttonContainer}>
				<Button 
                    title="Teste"
                    onPress={pressMe}
                />
			</View>
        </View>
    );
};
