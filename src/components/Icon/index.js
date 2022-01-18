import React from 'react';
import { View, Image } from 'react-native';
import { styles } from './styles';

const Icon = () => {
	return (
		<View>
            <Image style={{height: 50, width: 50}} source={require('./assets/icon.png')} />
        </View>
	);
};

export { Icon };