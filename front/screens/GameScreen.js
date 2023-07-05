import { useState, useEffect } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import Card from "../components/ui/Card";
import InstructionLabel from "../components/ui/InstructionLabel";


function generateRandomBetween(min,max, exclude){
  const rndNum = Math.floor(Math.random()*(max-min))+min;
  if (rndNum === exclude){
    return generateRandomBetween (min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;


function GameScreen({userNumber, onGameOver}) {
  const initialGuess = generateRandomBetween(
    1,
    100, 
    userNumber
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if(currentGuess === userNumber){
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  function nextGuessHandler(dir){0

    if((dir === 'lower' && currentGuess<userNumber) || (dir ==='greater' && currentGuess> userNumber)){
      Alert.alert('Wrong move!', [{text:'Error', style: 'cancel', onPress
    }]);
      return;
    }
    if(dir === 'lower'){
      maxBoundary = currentGuess - 1;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRandomNum = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRandomNum);
  }
  return <View style={styles.screen}>
   <Title> Your Guess </Title>
   <NumberContainer>{currentGuess}</NumberContainer>
    <Card>
    <InstructionLabel style={styles.InstructionLabel}> Higher or lower? </InstructionLabel>
    <View style={styles.buttonContainer}> 
    <View style={styles.button}>
    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}><Ionicons name="md-remove" size={24} color="white"/></PrimaryButton>
    </View>
    <View style={styles.button}>
    <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}><Ionicons name="md-add" size={24} color="white"/></PrimaryButton>
    </View>
    </View>
    </Card>
    {/* <View>
       LOG ROUNDS 
    </View> */}
  </View>
}

export default GameScreen;

const styles = StyleSheet.create({
  screen:{
    flex:1,
    padding:35
 },
 InstructionLabel:{
  marginBottom:12
 },
 buttonContainer: {
  flexDirection: "row",
},
button: {
  flex: 1,
},
})
