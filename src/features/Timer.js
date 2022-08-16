import React, { useState } from 'react';
import { View, StyleSheet, Text, Platform, Vibration } from 'react-native';
import { useKeepAwake } from 'expo-keep-awake';
import { ProgressBar } from 'react-native-paper';
import { Countdown } from '../components/Countdown';
import { RoundedButton } from '../components/RoundedButton';
import { spacing } from '../utils/sizes';
import { colors } from '../utils/color';
import {Timing} from '../features/Timing.js';


export const Timer = ({ focusSubject,clearSubject,onTimerEnd }) => {
   useKeepAwake();
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);


  const PATTERN_DESC = Platform.OS === 'android';
  const ONE_SECOND_IN_MS = 1000;
  const onEnd = (reset) =>{
    Vibration.vibrate(5 * ONE_SECOND_IN_MS);
    setIsStarted(false)
    setProgress(1)
    reset();
    onTimerEnd(focusSubject);


  }

  

  return (
    <View style={styles.Container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={setProgress}
          onEnd={onEnd}
        />
        <View style={{ paddingTop: spacing.xxxl }}>
          <Text style={styles.title}>
            Focus On :<Text style={styles.task}> {focusSubject}</Text>
          </Text>
        </View>
        </View>
         
        <View style={{ paddingTop: spacing.sm }}>
          <ProgressBar
            progress={progress}
            color={colors.yellow}
            style={{ height: spacing.sm }}
          />
        </View>
         <View style={styles.timingWrapper}>
        <Timing onChangeTime={setMinutes}>
        </Timing>
        </View>
        

        <View style={styles.buttonWrapper}>
          {!isStarted && (
            <RoundedButton title="start" onPress={() => setIsStarted(true)} />
          )}
          {isStarted && (
            <RoundedButton title="pause" onPress={() => setIsStarted(false)} />
          )}
        </View>
        <View style={styles.clearSubjectWrapper}>
        <RoundedButton title="-" size={50} onPress={clearSubject}/>

       
       </View>
      </View>
  
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  countdown: {
    flex: 0.5,
    alignItem: 'center',
    justifyContent: 'center',
  },
   timingWrapper:{
    flex: 0.1,
     flexDirection: 'row',
    padding: spacing.xxl
  
   



  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    padding: spacing.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearSubjectWrapper:{
    flexDirection:'row',
    justifyContent:'center'
  },
 
  title: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  task: {
    color: colors.white,
  }
});
