import { View, Image, StyleSheet, Text } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({roundsNumber, UserNumber, onStartNewGame}) {
  return (
    <View style={styles.root}>
      <Title> GAME OVER! </Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/background.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}> {roundsNumber} </Text>rounds to
        guess the number
        <Text style={styles.highlight}> UserNumber </Text>
      </Text>
      <PrimaryButton onPress={onStartNewGame}> Start New Game </PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.purple,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    //fontFamily: "open-sans",
    fontSize:20,
    textAlign:'center',
    marginVertical: 24
  },
  highlight: {
    //fontFamily: "open-sans-bold",
    color: Colors.pink,
  },
});
