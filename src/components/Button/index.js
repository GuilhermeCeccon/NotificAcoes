import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

const Button = ({
    onPress,
    title
}) => {
	return (
        <TouchableOpacity
            style={styles.button}
            onPress={onPress}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
	);
};

export { Button };