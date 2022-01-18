import React from 'react';
import Routes from './src/Routes';

export default function App() {
	return <Routes />;
}


/* import { StyleSheet, View } from 'react-native';

import { Loading } from './src/components/Loading';
import { Input } from './src/components/Input';
import { Button } from './src/components/Button';

export default function App() {

  const pressMe = () => {
    alert('Você clicou no botão!')
	}

  return (
    <View style={styles.container}>
      <Loading />
      <Input
					placeholder="Email"
				/>
        <Button 
          title="Teste"
          onPress={pressMe}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6930C3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 */