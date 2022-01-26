import React, { useState } from 'react';
import { View, Text } from 'react-native';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { styles } from './styles';

export default function Login() {

    const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [profession, setProfession] = useState('');
    const [age, setAge] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const createAccount = () => {
        console.log('Criar conta')
    }
    return (
        <View style={styles.container}>
            <Text style={styles.createAccountTitle}>
                Preencha os dados abaixo para criar sua conta
            </Text>
            <View style={styles.inputContainer}>
                <Input
                    placeholder="Nome Completo"
                    textContentType="fullName"
                    value={fullName}
                    onChangeText={(text) => setFullName(text)}
                />
            </View>
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
                    placeholder="Profissão"
                    textContentType="profession"
                    value={profession}
                    onChangeText={(text) => setProfession(text)}
                />
            </View>
            <View style={styles.inputContainer}>
                <Input
                    placeholder="Idade"
                    textContentType="age"
                    value={age}
                    onChangeText={(text) => setAge(text)}
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
            <View style={styles.inputContainer}>
                <Input 
                    placeholder="Confirmar Senha"
                    textContentType="confirmPassword"
                    secureTextEntry={true}
                    value={confirmPassword}
                    onChangeText={(text) => setConfirmPassword(text)}
                />
            </View>
            <View style={styles.buttonContainer}>
				<Button 
                    title="Criar minha conta"
                    onPress={createAccount}
                />
			</View>
        </View>
    );
};
