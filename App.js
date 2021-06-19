import React, { useState } from 'react';
import { StyleSheet, LogBox } from 'react-native';
import { Container } from 'native-base';
import Login from './src/screens/Login';
import Chat from './src/screens/Chat';

LogBox.ignoreLogs(['Setting a timer'])

export default function App() {
  const [userName, setUserName] = useState(null);

  return (
    <Container style={ styles.container }>
      {!userName ? (
        // LOGIN
        <Login setUserName={ setUserName }/>
      ) : (
        // CHAT
        <Chat userName={userName} />
      )}
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#16202b',
  },
});
