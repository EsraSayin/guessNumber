import { useState } from "react";
import { TextInput, View, StyleSheet, Alert, Text } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from '../components/ui/Card';
import InstructionLabel from "../components/ui/InstructionLabel";

function StartGameScreen({onGuessedNumber}) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }

    onGuessedNumber(chosenNumber);
  }

  return (
    <View style={styles.rootContainer}>
      <Title> Guess My Number </Title>
    <Card>
      <InstructionLabel> Enter a number between 1 and 99 </InstructionLabel>
      <TextInput
        style={styles.input}
        maxLength={2}
        keyboardType="number-pad"
        onChangeText={numberInputHandler}
        value={enteredNumber}
      />
      <View style={styles.buttonContainer}>
        <View>
          <PrimaryButton onPress={resetInputHandler} style={styles.button}>
            Reset
          </PrimaryButton>
        </View>
        <View>
          <PrimaryButton onPress={confirmInputHandler} style={styles.button}>
            Confirm
          </PrimaryButton>
        </View>
      </View>
    </Card>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer:{
    flex:1,
    marginTop: 100,
    alignItems: "center",
  },
  input: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.purple,
    borderBottomWidth: 2,
    color: Colors.pink,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },
});
