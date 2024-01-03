import React, {useEffect, useState} from 'react';
import {Button, SafeAreaView, Text} from 'react-native';
import {useTimer} from './src/useTimer';

function App(): JSX.Element {
  // const [shouldStart, setShouldStart] = useState(false);
  const {timer, startTimer, stopTimer, resetTimer} = useTimer(5, true);
  // const {timer} = useRafTimer(111);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={{fontSize: 24, textAlign: 'center', marginVertical: 20}}>
        {/* {timer} */}
        {timer}
      </Text>
      {/* <Button title="Start" onPress={() => startTimer()} /> */}
      {/* <Button title="Stop" onPress={() => stopTimer()} /> */}
      {/* <Button title="Reset" onPress={() => resetTimer()} /> */}
    </SafeAreaView>
  );
}

export default App;
