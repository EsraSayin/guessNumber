import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./front/screens/StartGameScreen";
import GameScreen from "./front/screens/GameScreen";
import Colors from "./front/constants/colors";
import GameOverScreen from "./front/screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);


  function guessedNumberHandler(guessedNumber) {
    setUserNumber(guessedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(){
    setGameIsOver(true);
  }

  function startNewGame(){
    setUserNumber(null);
    setGameIsOver(true);
  }
  let screen = <StartGameScreen onGuessedNumber={guessedNumberHandler}/>

  if(userNumber){
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
  }

  if(gameIsOver && userNumber){
    screen = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGame}/>
  }

  return (
    <LinearGradient colors={[Colors.lightpurple, Colors.khaki]} style={styles.screen}>
      <ImageBackground
        source={require("./front/assets/images/background2.png")}
        resizeMode="cover"
        style={styles.screen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.screen}>
        {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.2,
  },
});
